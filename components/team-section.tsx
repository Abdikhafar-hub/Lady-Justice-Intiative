"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const teamMembers = [
  {
    name: "Ann Wangari ",
    role: "Chairlady",
    bio: "Law student passionate about gender equality and social justice. Founded LJI to bridge the gap between legal knowledge and community empowerment.",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758705581/anne_r7wavj.jpg",
    expertise: ["Legal Advocacy", "Leadership", "Policy Research"],
    education: "Jomo Kenyatta University of Agriculture and Technology",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aisha@ladyjustice.org",
    },
  },
  {
    name: "Tasha Gaya",
    role: "Treasurer",
    bio: "student at Jomo Kenyatta University of Agriculture and Technology.",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758705684/tasha_dtwf5b.jpg",
    expertise: ["Public Health", "SRHR Advocacy", "Program Management"],
    education: "Jomo Kenyatta University of Agriculture and Technology",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatima@ladyjustice.org",
    },
  },
  {
    name: "Tinah Nyaga",
    role: "Secretary",
    bio: "Human rights law student dedicated to making legal education accessible. Designs and implements our community-based legal literacy programs.",
    image: "/placeholder.svg?height=300&width=300&text=MS",
    expertise: ["Human Rights Law", "Community Education", "Legal Training"],
    education: "Jomo Kenyatta University of Agriculture and Technology",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "maria@ladyjustice.org",
    },
  },
  {
    name: "Ikra Adow",
    role: "Public Relations Officer",
    bio: "Women's rights advocate. Develops leadership programs that have empowered hundreds of women across Kenya.",
    image: "/placeholder.svg?height=300&width=300&text=PP",
    expertise: ["Leadership Development", "Entrepreneurship", "Mentorship"],
    education: "Jomo Kenyatta University of Agriculture and Technology",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "priya@ladyjustice.org",
    },
  },
  
  

]

export function TeamSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ delay: 400 })

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">Meet Our Team</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate advocates, experienced professionals, and dedicated students working together to create a more
            just and equitable world.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden ${
                gridVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <CardContent className="p-0">
                {/* Member Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-24 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex justify-center gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-8 h-8 sm:w-10 sm:h-10 p-0">
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 sm:w-10 sm:h-10 p-0">
                      <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 sm:w-10 sm:h-10 p-0">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-1 sm:mb-2 text-xs sm:text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">{member.bio}</p>

                  {/* Education */}
                  <p className="text-xs text-muted-foreground mb-1 sm:mb-2 font-medium">{member.education}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-1000 ${
            ctaVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-0 max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 font-serif">Join Our Mission</h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to make a difference. Whether you're a student,
                professional, or community leader, there's a place for you on our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs sm:text-sm">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  View Open Positions
                </Button>
                <Button size="sm" variant="outline" className="text-xs sm:text-sm">
                  Volunteer With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
