"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, MapPin, Award, TrendingUp, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Lives We Wish to Impact",
    description: "Individuals we aim to reach through our programs and initiatives",
    color: "from-purple-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-blue-50",
  },
  {
    icon: BookOpen,
    value: 150,
    suffix: "+",
    label: "Workshops We Plan to Conduct",
    description: "Educational sessions on legal literacy and rights awareness we aim to deliver",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
  },
  {
    icon: MapPin,
    value: 25,
    suffix: "+",
    label: "Communities We Aim to Reach",
    description: "Regions where we plan to establish active programs",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
  },
  {
    icon: Award,
    value: 12,
    suffix: "",
    label: "Recognition We Aspire To",
    description: "Honors we hope to receive for our advocacy and community work",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    icon: TrendingUp,
    value: 85,
    suffix: "%",
    label: "Success Rate We Target",
    description: "Percentage of participants we aim to help gain increased legal knowledge",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    icon: Heart,
    value: 200,
    suffix: "+",
    label: "Volunteers We Seek",
    description: "Dedicated students and professionals we hope will support our mission",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
  },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2500
    const steps = 100
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <div className="relative">
      <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {count.toLocaleString()}
        {suffix}
      </span>
      <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
    </div>
  )
}

function useInView() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

export function ImpactSection() {
  const { ref, inView } = useInView()

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6 font-serif">
              Our Impact
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8">
            Building towards success through the lives we wish to touch, communities we aim to empower, and positive change we dream of creating together.
          </p>
        </div>

        {/* Statistics Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className={`
                  border-0 backdrop-blur-sm bg-white/70 hover:bg-white/90 
                  transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20
                  group cursor-pointer transform hover:scale-105 hover:-translate-y-2
                  animate-fade-in-up
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/2 right-4 sm:right-8 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>

                  <div
                    className={`
                    w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl 
                    flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 
                    group-hover:rotate-12 group-hover:scale-110 
                    transition-all duration-500 shadow-lg group-hover:shadow-xl
                    relative overflow-hidden
                  `}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl group-hover:bg-white/30 transition-colors duration-300"></div>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white relative z-10" />
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {stat.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
