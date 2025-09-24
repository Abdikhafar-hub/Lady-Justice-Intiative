"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, BookOpen, Heart, MapPin, Clock } from "lucide-react"
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation"

const programs = [
  {
    id: "gender-justice",
    icon: Scale,
    title: "Gender Justice Advocacy",
    subtitle: "Fighting for Equal Rights",
    description:
      "Comprehensive advocacy programs focused on eliminating gender-based discrimination and promoting equal opportunities in education, workplace, and society.",
    features: [
      "Legal advocacy and support",
      "Policy research and recommendations",
      "Community awareness campaigns",
      "Workplace equality initiatives",
    ],
    impact: "500+ individuals supported",
    duration: "Ongoing",
    location: "Multiple regions",
  },
  {
    id: "legal-literacy",
    icon: BookOpen,
    title: "Legal Literacy Programs",
    subtitle: "Knowledge Empowers",
    description:
      "Educational workshops and resources designed to make legal knowledge accessible to everyone, focusing on fundamental rights and legal processes.",
    features: [
      "Interactive legal workshops",
      "Rights awareness sessions",
      "Legal aid referral services",
      "Community legal clinics",
    ],
    impact: "2,000+ participants trained",
    duration: "Monthly workshops",
    location: "Universities & Communities",
  },
  {
    id: "srhr",
    icon: Heart,
    title: "Sexual & Reproductive Health Rights",
    subtitle: "Health is a Human Right",
    description:
      "Comprehensive education and advocacy programs promoting sexual and reproductive health rights, access to healthcare, and informed decision-making.",
    features: [
      "Health education workshops",
      "Rights advocacy campaigns",
      "Healthcare access support",
      "Policy advocacy initiatives",
    ],
    impact: "1,500+ individuals reached",
    duration: "Quarterly programs",
    location: "Schools & Health Centers",
  },
  {
    id: "empowerment",
    icon: Users,
    title: "Women's Empowerment",
    subtitle: "Leading Change Together",
    description:
      "Leadership development and empowerment programs designed to build confidence, skills, and opportunities for women in various sectors.",
    features: [
      "Leadership training programs",
      "Mentorship opportunities",
      "Skill development workshops",
      "Networking events",
    ],
    impact: "800+ women empowered",
    duration: "Bi-annual cohorts",
    location: "Regional centers",
  },
]

export function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(programs[0].id)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: navRef, visibleItems: navVisible } = useStaggeredAnimation<HTMLDivElement>(programs.length, { threshold: 0.3 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })

  const currentProgram = programs.find((p) => p.id === activeProgram) || programs[0]
  const Icon = currentProgram.icon

  return (
    <section id="programs" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our Programs & Initiatives
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to create lasting change through education, advocacy, and empowerment.
          </p>
        </div>

        {/* Program Navigation */}
        <div ref={navRef} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {programs.map((program, index) => {
            const ProgramIcon = program.icon
            return (
              <Button
                key={program.id}
                variant={activeProgram === program.id ? "default" : "outline"}
                onClick={() => setActiveProgram(program.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-500 ${
                  navVisible[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProgramIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{program.title}</span>
                <span className="sm:hidden">{program.title.split(" ")[0]}</span>
              </Button>
            )
          })}
        </div>

        {/* Active Program Display */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-all duration-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Program Details */}
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-200 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">{currentProgram.title}</h3>
                <p className="text-base sm:text-lg text-accent font-serif">{currentProgram.subtitle}</p>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{currentProgram.description}</p>

            {/* Program Features */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Key Features:</h4>
              <ul className="space-y-1 sm:space-y-2">
                {currentProgram.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-muted-foreground">{currentProgram.impact}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-muted-foreground">{currentProgram.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-muted-foreground">{currentProgram.location}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs sm:text-sm">Learn More</Button>
              <Button size="sm" variant="outline" className="text-xs sm:text-sm">Get Involved</Button>
            </div>
          </div>

          {/* Program Visual */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="border-0 shadow-xl sm:shadow-2xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1758700862/Image_fx_15_nhh03a.png" 
                  alt={currentProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-white">{currentProgram.title}</h4>
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                        {currentProgram.impact}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Stats Cards */}
            
          </div>
        </div>

        {/* Call to Action */}
        <div
          ref={ctaRef}
          className={`text-center mt-12 sm:mt-16 transition-all duration-700 ${
            ctaVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <Card className="bg-primary text-primary-foreground border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-serif">Ready to Make a Difference?</h3>
              <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Join our programs and become part of a movement that's creating real change in communities. Whether you
                want to learn, volunteer, or lead, there's a place for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm">
                  Join a Program
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-xs sm:text-sm"
                >
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
