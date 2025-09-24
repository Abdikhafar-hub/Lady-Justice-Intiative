"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Scale, BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const values = [
  {
    icon: Scale,
    title: "Justice & Equality",
    description:
      "We believe in equal rights and opportunities for all individuals, regardless of gender, background, or circumstances.",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "We empower individuals through education, advocacy, and community building to create lasting change.",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Knowledge is the foundation of empowerment. We provide accessible legal literacy and rights education.",
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach our work with empathy and understanding, creating safe spaces for all community members.",
    color: "from-rose-500 to-rose-700",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
  },
]

export function AboutSection() {
  const [visibleValues, setVisibleValues] = useState<boolean[]>([])
  const valuesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleValues((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    const valueCards = valuesRef.current?.querySelectorAll("[data-index]")
    valueCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About Lady Justice Initiative
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A student-led organization dedicated to promoting gender equality, women's empowerment, and comprehensive
            rights education across communities.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Mission */}
          <div className="group relative">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110"></div>

            <Card className="relative border-0 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden rounded-3xl">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] bg-card rounded-[inherit]"></div>
              </div>

              {/* Animated particles */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
                <div
                  className="absolute top-12 right-8 w-1 h-1 bg-primary/30 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <CardContent className="relative p-4 sm:p-6 lg:p-8 text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                  </div>
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/10 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 font-serif group-hover:scale-105 transition-transform duration-300 group-hover:text-primary">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  To create a world where every individual has equal access to justice, education, and opportunities,
                  with a special focus on empowering women and marginalized communities through legal literacy and
                  advocacy.
                </p>
                {/* Animated underline */}
                <div className="mt-3 sm:mt-4 h-1 bg-gradient-to-r from-primary to-primary/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
              </CardContent>
            </Card>
          </div>

          {/* Vision */}
          <div className="group relative">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110"></div>

            <Card className="relative border-0 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden rounded-3xl">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] bg-card rounded-[inherit]"></div>
              </div>

              {/* Animated particles */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-6 left-4 w-2 h-2 bg-secondary/40 rounded-full animate-bounce"></div>
                <div
                  className="absolute top-16 left-12 w-1 h-1 bg-secondary/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-secondary/20 rounded-full animate-bounce"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </div>

              <CardContent className="relative p-4 sm:p-6 lg:p-8 text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-secondary to-secondary/80 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-secondary/20 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-700"></div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 font-serif group-hover:scale-105 transition-transform duration-300 group-hover:text-secondary">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  A society where justice is accessible to all, where women are empowered to lead and participate fully,
                  and where comprehensive rights education is a fundamental part of every individual's development.
                </p>
                {/* Animated underline */}
                <div className="mt-3 sm:mt-4 h-1 bg-gradient-to-r from-secondary to-secondary/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
              </CardContent>
            </Card>
          </div>

          {/* Impact */}
          <div className="group relative">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110"></div>

            <Card className="relative border-0 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden rounded-3xl">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] bg-card rounded-[inherit]"></div>
              </div>

              {/* Animated particles */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-8 right-6 w-2 h-2 bg-accent/40 rounded-full animate-ping"></div>
                <div
                  className="absolute top-4 right-12 w-1 h-1 bg-accent/30 rounded-full animate-ping"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className="absolute bottom-10 left-4 w-1.5 h-1.5 bg-accent/20 rounded-full animate-ping"
                  style={{ animationDelay: "0.7s" }}
                ></div>
              </div>

              <CardContent className="relative p-4 sm:p-6 lg:p-8 text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-accent to-accent/80 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                  </div>
                  {/* Expanding circle effect */}
                  <div className="absolute inset-0 rounded-full bg-accent/5 scale-0 group-hover:scale-200 opacity-0 group-hover:opacity-20 transition-all duration-1000"></div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 font-serif group-hover:scale-105 transition-transform duration-300 group-hover:text-accent">
                  Our Impact
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  Through workshops, advocacy campaigns, and community outreach, we've reached thousands of individuals,
                  providing them with the knowledge and tools needed to understand and exercise their rights.
                </p>
                {/* Animated underline */}
                <div className="mt-3 sm:mt-4 h-1 bg-gradient-to-r from-accent to-accent/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 sm:mb-6 font-serif animate-fade-in">
              Our Core Values
            </h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-6 sm:mt-8 animate-fade-in-delay">
            These principles guide everything we do and shape our approach to creating positive change.
          </p>
        </div>

        <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            const isVisible = visibleValues[index]
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Animated background glow */}
                <div
                  className={`absolute inset-0 ${value.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-110`}
                ></div>

                <Card className="relative border-0 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                  {/* Gradient border effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  >
                    <div className="absolute inset-[1px] bg-card rounded-[inherit]"></div>
                  </div>

                  <CardContent className="relative p-4 sm:p-6 lg:p-8 text-center">
                    {/* Animated icon container */}
                    <div className="relative mb-4 sm:mb-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white drop-shadow-sm" />
                      </div>
                      {/* Floating particles effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div
                          className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-r ${value.color} rounded-full animate-bounce`}
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className={`absolute bottom-2 left-2 w-1.5 h-1.5 bg-gradient-to-r ${value.color} rounded-full animate-bounce`}
                          style={{ animationDelay: "200ms" }}
                        ></div>
                        <div
                          className={`absolute top-1/2 right-0 w-1 h-1 bg-gradient-to-r ${value.color} rounded-full animate-bounce`}
                          style={{ animationDelay: "400ms" }}
                        ></div>
                      </div>
                    </div>

                    {/* Enhanced typography */}
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 font-serif">
                      {value.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Animated underline */}
                    <div
                      className={`mt-4 h-0.5 bg-gradient-to-r ${value.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full`}
                    ></div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Story Section */}
        <div className="mt-20 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              {/* Enhanced header */}
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 font-serif">
                    Our Story
                  </h3>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                </div>
                <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                  From passionate students to a movement for justice and equality
                </p>
              </div>

              {/* Story timeline/content */}
              <div className="space-y-8">
                {/* Story paragraph 1 */}
                <div className="group relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="pl-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-3 font-serif group-hover:text-primary transition-colors duration-300">
                          The Beginning
                        </h4>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                          Lady Justice Initiative was born from a group of passionate students who recognized the urgent
                          need for accessible legal education and gender equality advocacy. What started as informal
                          discussions about justice and rights has grown into a comprehensive organization that serves
                          communities across regions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story paragraph 2 */}
                <div className="group relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-secondary to-accent rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="pl-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full mt-2 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-3 font-serif group-hover:text-secondary transition-colors duration-300">
                          The Recognition
                        </h4>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                          Our founders understood that knowledge is power, and that many individuals—particularly women
                          and marginalized communities—lack access to basic legal literacy and rights education. This
                          gap in knowledge often perpetuates cycles of inequality and injustice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story paragraph 3 */}
                <div className="group relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="pl-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full mt-2 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-3 font-serif group-hover:text-accent transition-colors duration-300">
                          The Impact Today
                        </h4>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                          Today, we continue to grow our impact through innovative programs, strategic partnerships, and
                          the unwavering dedication of our student volunteers who believe in creating a more just and
                          equitable world for all.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <Heart className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    Join our journey towards justice and equality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
