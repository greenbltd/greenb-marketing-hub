import { Linkedin, Twitter, Mail } from "lucide-react";
import musaImg from "@/assets/team/musa-adamu-iya.jpeg";
import abdullahiImg from "@/assets/team/abdullahi-adamu.jpeg";
import hadizaImg from "@/assets/team/hadiza-shettima-lawan.jpg";
import ahmedImg from "@/assets/team/ahmed-salisu-ahmed.jpg";

interface TeamMember {
  name: string;
  role: string;
  focus?: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Musa Adamu Iya",
    role: "Co-founder & CEO",
    image: musaImg,
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:musa@greenb.com",
    },
  },
  {
    name: "Abdullahi Adamu",
    role: "Co-founder & CTO",
    image: abdullahiImg,
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:abdullahi@greenb.com",
    },
  },
  {
    name: "Ahmed Salisu Ahmed",
    role: "Chief Operating Officer (COO)",
    focus: "Lead Operations • Execution • Efficiency • Business Performance",
    image: ahmedImg,
  },
  {
    name: "Dr. Hadiza Shettima Lawan",
    role: "Business Development Director (BDD)",
    focus: "Lead Business Growth • Strategic Partnerships • Market Expansion • New Opportunities",
    image: hadizaImg,
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the People Behind GreenB
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate innovators dedicated to transforming waste management through technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-1">
                  {member.role}
                </p>
                {member.focus && (
                  <p className="text-muted-foreground text-xs mb-3">
                    {member.focus}
                  </p>
                )}

                {/* Social Links */}
                {member.socials && (
                  <div className="flex justify-center gap-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={member.socials.email}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
