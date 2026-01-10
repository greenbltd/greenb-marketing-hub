import { Linkedin, Twitter, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import teamMember1 from "@/assets/team-member-1.jpeg";
import teamCeo from "@/assets/team-ceo.jpeg";
import teamCeo2 from "@/assets/team-ceo-2.jpeg";
import teamAbdullahi from "@/assets/team-abdullahi.jpeg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Team Member",
    role: "Co-Founder",
    image: teamMember1,
    bio: "Passionate about sustainable solutions and smart technology innovation.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "member@greenb.com",
    },
  },
  {
    name: "CEO Name",
    role: "Chief Executive Officer",
    image: teamCeo,
    bio: "Visionary leader driving GreenB's mission to revolutionize waste management.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ceo@greenb.com",
    },
  },
  {
    name: "CEO Name",
    role: "Chief Executive Officer",
    image: teamCeo2,
    bio: "Strategic thinker focused on scaling sustainable technology solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ceo2@greenb.com",
    },
  },
  {
    name: "Abdullahi",
    role: "Team Member",
    image: teamAbdullahi,
    bio: "Dedicated to building innovative IoT solutions for cleaner communities.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "abdullahi@greenb.com",
    },
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the People Behind <span className="text-primary">GreenB</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our passionate team is dedicated to creating innovative solutions for a cleaner, smarter future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social links overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
