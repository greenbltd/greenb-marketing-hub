#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { request } from "node:http";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const port = Number(process.env.SITE_TEST_PORT || 4174);
const baseUrl = `http://127.0.0.1:${port}`;
const failures = [];

function pass(message) {
  console.log(`PASS  ${message}`);
}

function fail(message) {
  failures.push(message);
  console.error(`FAIL  ${message}`);
}

function assert(condition, message) {
  if (condition) pass(message);
  else fail(message);
}

function get(url) {
  return new Promise((resolveRequest, reject) => {
    const requestUrl = new URL(url);
    const req = request({ hostname: requestUrl.hostname, port: requestUrl.port, path: requestUrl.pathname, method: "GET" }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => { body += chunk; });
      res.on("end", () => resolveRequest({ status: res.statusCode ?? 0, body }));
    });
    req.setTimeout(3000, () => req.destroy(new Error("request timeout")));
    req.on("error", reject);
    req.end();
  });
}

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await get(`${baseUrl}/`);
      if (response.status === 200) return;
    } catch {
      // The preview server may still be starting.
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 250));
  }
  throw new Error(`Preview server did not become ready at ${baseUrl}`);
}

const preview = spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1", "--port", String(port)], {
  cwd: root,
  stdio: "ignore",
  env: { ...process.env, BROWSER: "none" },
});

const stopPreview = () => {
  if (!preview.killed) preview.kill("SIGTERM");
};
process.on("exit", stopPreview);
process.on("SIGINT", () => { stopPreview(); process.exit(130); });
process.on("SIGTERM", () => { stopPreview(); process.exit(143); });

try {
  assert(existsSync(resolve(root, "dist/index.html")), "production dist/index.html exists");
  await waitForServer();
  pass("production preview server is reachable");

  const routes = [
    "/",
    "/about",
    "/solutions",
    "/smart-waste-management",
    "/smart-bin",
    "/ecorewards",
    "/recycling",
    "/impact",
    "/partners",
    "/projects",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  for (const route of routes) {
    const response = await get(`${baseUrl}${route}`);
    assert(response.status === 200, `${route} returns HTTP 200`);
    assert(response.body.includes('<div id="root">'), `${route} returns the React app shell`);
  }

  for (const asset of ["/robots.txt", "/sitemap.xml"]) {
    const response = await get(`${baseUrl}${asset}`);
    assert(response.status === 200, `${asset} returns HTTP 200`);
    assert(response.body.trim().length > 0, `${asset} is not empty`);
  }

  const indexHtml = readFileSync(resolve(root, "index.html"), "utf8");
  const appSource = readFileSync(resolve(root, "src/App.tsx"), "utf8");
  const homepageSource = readFileSync(resolve(root, "src/pages/Index.tsx"), "utf8");
  const contactSource = readFileSync(resolve(root, "src/components/ContactSection.tsx"), "utf8");
  const seoSource = readFileSync(resolve(root, "src/components/Seo.tsx"), "utf8");
  const sitemap = readFileSync(resolve(root, "public/sitemap.xml"), "utf8");
  const robots = readFileSync(resolve(root, "public/robots.txt"), "utf8");

  const routeMarkers = [
    ["/ecorewards", "EcoRewards route is registered"],
    ["/smart-bin", "Smart Bin route is registered"],
    ["/smart-waste-management", "Smart Waste Management route is registered"],
    ["/privacy", "Privacy route is registered"],
    ["/terms", "Terms route is registered"],
  ];
  for (const [marker, label] of routeMarkers) assert(appSource.includes(`path=\"${marker}\"`), label);

  const featureMarkers = [
    ["HomeSolutions", "homepage includes solution sections"],
    ["FAQBlock", "homepage includes FAQ content"],
    ["EcoRewards", "homepage includes EcoRewards messaging"],
    ["ContactSection", "homepage includes contact section"],
  ];
  for (const [marker, label] of featureMarkers) assert(homepageSource.includes(marker), label);

  for (const [marker, label] of [
    ["website", "contact form has honeypot spam protection"],
    ["mailto:greenbltd01@gmail.com", "contact form has a GreenB email handoff"],
    ["minLength={20}", "contact form validates message length"],
  ]) assert(contactSource.includes(marker), label);

  for (const [marker, label] of [
    ["application/ld+json", "root HTML includes structured data"],
    ["canonical", "root HTML includes a canonical link"],
    ["og:title", "root HTML includes Open Graph metadata"],
  ]) assert(indexHtml.includes(marker), label);

  for (const [marker, label] of [
    ["data-greenb-schema", "runtime SEO component maintains structured data"],
    ["siteUrl = \"https://greenb.io\"", "SEO uses the GreenB canonical domain"],
  ]) assert(seoSource.includes(marker), label);

  assert(sitemap.includes("https://greenb.io/ecorewards"), "sitemap includes EcoRewards");
  assert(sitemap.includes("https://greenb.io/smart-bin"), "sitemap includes Smart Bin");
  assert(sitemap.includes("https://greenb.io/smart-waste-management"), "sitemap includes Smart Waste Management");
  assert(robots.includes("Sitemap: https://greenb.io/sitemap.xml"), "robots.txt points to the sitemap");
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
} finally {
  stopPreview();
}

if (failures.length > 0) {
  console.error(`\n${failures.length} verification check(s) failed.`);
  process.exitCode = 1;
} else {
  console.log("\nAll GreenB website verification checks passed.");
}
