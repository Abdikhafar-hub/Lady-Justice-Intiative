"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const footerLinks = {
  organization: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Impact Report", href: "#" },
    { name: "Careers", href: "#" },
  ],
  programs: [
    { name: "Legal Literacy", href: "#programs" },
    { name: "Women's Empowerment", href: "#programs" },
    { name: "SRHR Advocacy", href: "#programs" },
    { name: "Gender Justice", href: "#programs" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Publications", href: "#" },
    { name: "Legal Resources", href: "#" },
    { name: "Training Materials", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Volunteer", href: "#" },
    { name: "Donate", href: "#" },
    { name: "Partner With Us", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#" },
  { icon: Twitter, name: "Twitter", url: "#" },
  { icon: Instagram, name: "Instagram", url: "#" },
  { icon: Linkedin, name: "LinkedIn", url: "#" },
  { icon: Youtube, name: "YouTube", url: "#" },
]

export function Footer() {
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: mainFooterRef, isVisible: mainFooterVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 })
  const { ref: bottomFooterRef, isVisible: bottomFooterVisible } = useScrollAnimation<HTMLDivElement>({ delay: 400 })

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div
          ref={newsletterRef}
          className={`py-8 sm:py-12 border-b border-primary-foreground/20 transition-all duration-1000 ${
            newsletterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="bg-accent text-accent-foreground border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-serif">Stay Connected</h3>
              <p className="text-sm sm:text-base text-accent-foreground/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for updates on programs, events, and opportunities to help create change in your
                community.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background text-foreground border-border text-sm"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Footer Content */}
        <div
          ref={mainFooterRef}
          className={`py-8 sm:py-12 transition-all duration-1000 ${
            mainFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {/* Organization Info */}
            <div
              className={`col-span-2 lg:col-span-2 transition-all duration-1000 ${
                mainFooterVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: mainFooterVisible ? "200ms" : "0ms",
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                  <img 
                    src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1758705767/iqra_n6c1rf.jpg" 
                    alt="Lady Justice Initiative Logo" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="font-bold text-sm sm:text-base lg:text-lg text-pink-500">Lady Justice Initiative</span>
              </div>
              <p className="text-xs sm:text-sm text-primary-foreground/80 mb-4 sm:mb-6 leading-relaxed">
                Empowering communities through legal literacy, gender equality advocacy, and comprehensive rights
                education. Together, we aim to build a more just and equitable world.
              </p>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <span>ladyjusticeinitiative@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <span>0794 011942</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <span>JKUAT, Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Footer Links - Mobile Layout: Organization & Programs side by side */}
            <div className="col-span-2 lg:col-span-1">
              <div className="grid grid-cols-2 gap-4 lg:block">
                {/* Organization Links */}
                <div
                  className={`transition-all duration-1000 ${
                    mainFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: mainFooterVisible ? "350ms" : "0ms",
                  }}
                >
                  <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Organization</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {footerLinks.organization.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Programs Links */}
                <div
                  className={`transition-all duration-1000 ${
                    mainFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: mainFooterVisible ? "500ms" : "0ms",
                  }}
                >
                  <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Programs</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {footerLinks.programs.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Links - Mobile Layout: Resources & Get Involved side by side */}
            <div className="col-span-2 lg:col-span-1">
              <div className="grid grid-cols-2 gap-4 lg:block">
                {/* Resources Links */}
                <div
                  className={`transition-all duration-1000 ${
                    mainFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: mainFooterVisible ? "650ms" : "0ms",
                  }}
                >
                  <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Resources</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Involved Links */}
                <div
                  className={`transition-all duration-1000 ${
                    mainFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: mainFooterVisible ? "800ms" : "0ms",
                  }}
                >
                  <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Get Involved</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          ref={bottomFooterRef}
          className={`py-4 sm:py-6 border-t border-primary-foreground/20 transition-all duration-1000 ${
            bottomFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary-foreground/80">
              <span>© 2025 Lady Justice Initiative. Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent fill-accent" />
              <span>by</span>
              <a 
                href="https://www.instagram.com/abdikhafar_issack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
              >
                Abdikhafar
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 ${
                      bottomFooterVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{
                      transitionDelay: bottomFooterVisible ? `${index * 100 + 400}ms` : "0ms",
                    }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                )
              })}
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
