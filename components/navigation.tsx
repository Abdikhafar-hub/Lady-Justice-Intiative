"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#impact", label: "Impact" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-2xl border-b border-primary/20 shadow-2xl shadow-primary/10"
          : "bg-gradient-to-b from-background/90 via-background/60 to-transparent backdrop-blur-xl"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-secondary/8 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-18 lg:h-22">
          <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1758705767/iqra_n6c1rf.jpg" 
                  alt="Lady Justice Initiative Logo" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-xl sm:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-80" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base lg:text-lg text-pink-500 group-hover:text-pink-400 transition-all duration-500 tracking-tight">
                Lady Justice Initiative
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                Empowering Communities
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-5 py-3 text-foreground/80 hover:text-primary transition-all duration-500 font-semibold group rounded-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 tracking-wide">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/15 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100" />
                <div className="absolute bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-secondary rounded-full group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </a>
            ))}

            <div className="ml-8">
              <Button className="relative bg-gradient-to-r from-primary via-primary/95 to-secondary hover:from-primary/90 hover:via-primary hover:to-secondary/90 text-primary-foreground font-bold px-8 py-3 rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-110 group overflow-hidden border border-primary/20">
                <span className="relative z-10 tracking-wide">Join Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-primary/20 to-secondary/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative hover:bg-primary/15 transition-all duration-500 group rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative p-2">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground group-hover:text-primary transition-all duration-500 group-hover:rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
              )}
            </div>
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-2xl border-t border-primary/20 rounded-b-2xl shadow-2xl shadow-primary/10 animate-in slide-in-from-top-2 duration-500">
            <div className="px-6 pt-6 pb-8 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-4 text-foreground/80 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-500 font-semibold rounded-xl group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative tracking-wide">
                    {item.label}
                    <div className="absolute bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-500" />
                  </span>
                </a>
              ))}
              <div className="pt-6">
                <Button className="w-full bg-gradient-to-r from-primary via-primary/95 to-secondary hover:from-primary/90 hover:via-primary hover:to-secondary/90 text-primary-foreground font-bold py-4 rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-[1.02] border border-primary/20">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
