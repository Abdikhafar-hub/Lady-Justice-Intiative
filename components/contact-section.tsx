"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["ladyjusticeinitiative@gmail.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["0794 011942"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["JKUAT, Nairobi, Kenya"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
  },
]

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-600" },
  { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
  { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" },
  { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-700" },
  { icon: Youtube, name: "YouTube", url: "#", color: "hover:text-red-600" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    interest: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: contactInfoRef, isVisible: contactInfoVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 })
  const { ref: contactFormRef, isVisible: contactFormVisible } = useScrollAnimation<HTMLDivElement>({ delay: 400 })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      interest: "",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4">
            Ready to join our mission? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information - Left Side */}
          <div
            ref={contactInfoRef}
            className={`flex flex-col h-full transition-all duration-1000 ${
              contactInfoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Card className="flex-1 border-border/50 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Mail className="w-3 h-3 text-white" />
                    </div>
                    Contact Information
                  </h3>
                  <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>

                <div className="grid gap-3 sm:gap-4 flex-1">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div
                        key={index}
                        className={`group p-3 rounded-xl border border-border/30 bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                          contactInfoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: contactInfoVisible ? `${index * 100 + 300}ms` : "0ms",
                        }}
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                              {info.title}
                            </h4>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Social Media & Quick Actions */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/30">
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-sm sm:text-base font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
                      Follow Us
                    </h4>
                    <div className="flex gap-1.5 sm:gap-2">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon
                        return (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className={`transition-all duration-300 hover:scale-110 hover:shadow-lg border-border/50 ${social.color} hover:border-current w-8 h-8 sm:w-10 sm:h-10 p-0`}
                          >
                            <Icon className="w-3 h-3" />
                          </Button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full animate-pulse delay-500" />
                      Quick Actions
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md text-xs px-2 py-1"
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Live Chat
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md text-xs px-2 py-1"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Schedule Call
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md text-xs px-2 py-1"
                      >
                        <Mail className="w-3 h-3 mr-1" />
                        Newsletter
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Right Side */}
          <div
            ref={contactFormRef}
            className={`flex flex-col h-full transition-all duration-1000 ${
              contactFormVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="flex-1 border-border/50 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                      <Send className="w-3 h-3 text-white" />
                    </div>
                    Send Us a Message
                  </h3>
                  <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-secondary to-accent rounded-full" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-border/50 focus:border-primary transition-colors duration-300 hover:border-primary/50 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-border/50 focus:border-primary transition-colors duration-300 hover:border-primary/50 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="interest" className="text-xs sm:text-sm font-medium text-foreground">
                      Area of Interest
                    </Label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border/50 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50 text-sm"
                    >
                      <option value="">Select an area of interest</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="programs">Program Participation</option>
                      <option value="partnership">Partnership</option>
                      <option value="donation">Donation/Support</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="subject" className="text-xs sm:text-sm font-medium text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject of your message"
                      required
                      className="border-border/50 focus:border-primary transition-colors duration-300 hover:border-primary/50 text-sm"
                    />
                  </div>

                  <div className="space-y-1 flex-1 flex flex-col">
                    <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                      required
                      className="border-border/50 focus:border-primary transition-colors duration-300 hover:border-primary/50 flex-1 resize-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] mt-auto text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-1 sm:mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">Find Us</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Visit us at our JKUAT Karen Campus location
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl border border-border/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7012234707204!2d36.73840727626432!3d-1.3558655357088045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f053eaa497271%3A0x3a7cb666d65c8bae!2sJKUAT%20-%20Karen%20Campus!5e0!3m2!1sen!2ske!4v1758704950000!5m2!1sen!2ske" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-80 lg:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
