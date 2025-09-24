"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "University Student",
    location: "Nairobi, Kenya",
    image: "/placeholder.svg?height=80&width=80&text=SJ",
    quote:
      "Lady Justice Initiative opened my eyes to my rights as a woman. The legal literacy workshop I attended gave me the confidence to speak up against discrimination in my workplace. I'm now an advocate in my community.",
    rating: 5,
    program: "Legal Literacy Program",
  },
  {
    id: 2,
    name: "Amina Hassan",
    role: "University Student",
    location: "Nairobi, Kenya",
    image: "/placeholder.svg?height=80&width=80&text=AH",
    quote:
      "lady justice initiative helped me understand my rights as a woman and how to fight for them.",
    rating: 5,
    program: "SRHR Advocacy",
  },
  {
    id: 4,
    name: "Sarah johnson",
    role: "Law Student",
    location: "Nairobi, Kenya",
    image: "/placeholder.svg?height=80&width=80&text=FZ",
    quote:
      "The mentorship I received through Lady Justice Initiative was invaluable. It connected me with experienced lawyers and helped me understand how to use my legal education to serve marginalized communities.",
    rating: 5,
    program: "Gender Justice Advocacy",
  },
  {
    id: 5,
    name: "Achieng Ouma",
    role: "University Student",
    location: "Nairobi, Kenya",
    image: "/placeholder.svg?height=80&width=80&text=PS",
    quote:
      "The training I received on legal literacy has enabled me to help countless women in my community understand their rights. The ripple effect of this knowledge is transforming entire families.",
    rating: 5,
    program: "Legal Literacy Program",
  },
  {
    id: 6,
    name: "Grace Mwangi",
    role: "University Student",
    location: "Nairobi, Kenya",
    image: "/placeholder.svg?height=80&width=80&text=GO",
    quote:
      "Lady Justice Initiative didn't just teach me about my rights—they showed me how to fight for them. I now run a successful business and mentor other women entrepreneurs in my region.",
    rating: 5,
    program: "Women's Empowerment",
  },
]

export function TestimonialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: carouselContainerRef, isVisible: carouselVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 })

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">Voices of Change</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from the incredible individuals whose lives have been transformed through our programs and who are now
            creating change in their communities.
          </p>
        </div>


        {/* Continuous Scrolling Testimonials */}
        <div
          ref={carouselContainerRef}
          className={`relative transition-all duration-1000 ${
            carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative overflow-hidden w-full">
            {/* Combined testimonials for seamless loop */}
            <div className="flex gap-4 sm:gap-6 animate-scroll" style={{ width: 'max-content' }}>
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${testimonial.id}`}
                  className="flex-shrink-0 w-72 sm:w-80"
                >
                  <Card
                    className={`border-border hover:border-primary/50 transition-all duration-300 ${
                      carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: carouselVisible ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground text-xs sm:text-sm">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                          <p className="text-xs text-accent">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-between mt-3 sm:mt-4">
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-accent text-accent" />
                          ))}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.program}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${testimonial.id}`}
                  className="flex-shrink-0 w-72 sm:w-80"
                >
                  <Card
                    className={`border-border hover:border-primary/50 transition-all duration-300 ${
                      carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: carouselVisible ? `${(index + testimonials.length) * 100}ms` : "0ms",
                    }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground text-xs sm:text-sm">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                          <p className="text-xs text-accent">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-between mt-3 sm:mt-4">
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-accent text-accent" />
                          ))}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.program}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
