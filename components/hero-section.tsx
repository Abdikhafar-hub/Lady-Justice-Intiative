"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Scale, BookOpen, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const heroSlides = [
  {
    title: "Empowering Women, Shaping Justice",
    subtitle: "Building a world where every woman has equal rights and opportunities",
    description:
      "Join our student-led movement promoting gender equality, legal literacy, and women's empowerment across communities.",
    icon: Scale,
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758701310/Image_fx_16_iihxr9.png",
  },
  {
    title: "Legal Literacy for All",
    subtitle: "Knowledge is power, education is liberation",
    description:
      "We provide accessible legal education and rights awareness programs to empower individuals with the knowledge they need.",
    icon: BookOpen,
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758701650/Image_fx_17_q5rsjj.png",
  },
  {
    title: "Sexual & Reproductive Health Rights",
    subtitle: "Advocating for comprehensive health education and rights",
    description:
      "Promoting awareness and access to sexual and reproductive health information and services for all individuals.",
    icon: Heart,
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758701770/Image_fx_18_reyx0d.png",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref: heroRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen min-h-[600px] sm:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={slide.image || "/placeholder.svg"} 
            alt={slide.title} 
            className="w-full h-full object-cover" 
            style={{
              objectPosition: 'center 30%'
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div
        ref={heroRef}
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div
            className={`mb-6 flex justify-center transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            {heroSlides.map((slide, index) => {
              const Icon = slide.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"
                  }`}
                >
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {heroSlides[currentSlide].title}
            </h1>
            <p
              className={`text-xl sm:text-2xl font-serif text-accent transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {heroSlides[currentSlide].subtitle}
            </p>
            <p
              className={`text-lg sm:text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {heroSlides[currentSlide].description}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3">
              Join Our Movement
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-accent" : "bg-white/50"}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
