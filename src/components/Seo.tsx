import { useEffect } from "react";

export const siteUrl = "https://greenb.io";
const defaultImage = `${siteUrl}/favicon.png`;

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.setAttribute(attribute, value);
}

export function Seo({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    const url = `${siteUrl}${path === "/" ? "" : path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", defaultImage);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", defaultImage);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute("href", url);

    const schema = document.head.querySelector<HTMLScriptElement>('script[data-greenb-schema]');
    if (schema) {
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "GreenB",
        url: siteUrl,
        logo: defaultImage,
        email: "mailto:greenbltd01@gmail.com",
        telephone: "+2347062633321",
        address: { "@type": "PostalAddress", addressLocality: "Kano", addressCountry: "NG" },
        sameAs: ["https://www.facebook.com/profile.php?id=61576584218445"],
      });
    }
  }, [title, description, path]);

  return null;
}
