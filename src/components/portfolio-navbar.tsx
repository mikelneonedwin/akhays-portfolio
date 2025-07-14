"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { name: "Email", href: "mailto:your.email@example.com", icon: Mail },
]

export function PortfolioNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
        {/* Logo/Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-lg">JD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground">John Doe</h1>
              <p className="text-xs text-muted-foreground -mt-1">Full Stack Developer</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Button key={social.name} variant="ghost" size="icon" className="h-9 w-9" asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              )
            })}
          </div>

          <Separator orientation="vertical" className="h-6" />

          {/* Resume Download */}
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Resume
          </Button>

          {/* CTA Button */}
          <Button size="sm" className="gap-2">
            <Mail className="h-4 w-4" />
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">JD</span>
                  </div>
                  <div>
                    <h1 className="font-bold text-lg">John Doe</h1>
                    <p className="text-sm text-muted-foreground -mt-1">Full Stack Developer</p>
                  </div>
                </div>
              </SheetTitle>
              <SheetDescription className="text-left">
                Passionate developer creating digital experiences
              </SheetDescription>
            </SheetHeader>

            <div className="mt-8 space-y-6">
              {/* Navigation Links */}
              <div className="space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex w-full text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <Separator />

              {/* Social Links */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Connect</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{social.name}</span>
                        <ExternalLink className="h-3 w-3 ml-auto" />
                      </Link>
                    )
                  })}
                </div>
              </div>

              <Separator />

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full gap-2 bg-transparent" onClick={() => setIsOpen(false)}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button className="w-full gap-2" onClick={() => setIsOpen(false)}>
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Button>
              </div>

              {/* Status Badge */}
              <div className="pt-4">
                <Badge variant="secondary" className="gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Available for work
                </Badge>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
