"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Download, Github, Twitter, Zap, Wallet, Globe, Hexagon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "NFTs", href: "#nfts" },
  { name: "Contact", href: "#contact" },
]

const web3Links = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter },
  { name: "OpenSea", href: "https://opensea.io/yourusername", icon: Hexagon },
]

export function Web3Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isConnected, setIsConnected] = React.useState(false)

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  const connectWallet = () => {
    setIsConnected(!isConnected)
  }

  return (
    <>
      {/* Cyber grid background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background [background-image:radial-gradient(circle_at_1px_1px,rgb(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px]" />

      <header className="sticky top-0 z-50 w-full border-b border-cyan-500/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10" />

        <div className="container relative flex h-16 max-w-screen-xl items-center justify-between px-4">
          {/* Logo/Name with neon effect */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 flex items-center justify-center shadow-lg border border-cyan-400/30">
                  <span className="text-white font-bold text-lg font-mono">Ξ</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  CryptoBuilder.eth
                </h1>
                <p className="text-xs text-cyan-400/80 -mt-1 font-mono">Web3 Developer</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-all duration-300 cursor-pointer group font-mono"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-cyan-500/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Web3 Links */}
            <div className="flex items-center space-x-2">
              {web3Links.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                    asChild
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>

            <Separator orientation="vertical" className="h-6 bg-cyan-500/30" />

            {/* Portfolio Download */}
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 font-mono"
            >
              <Download className="h-4 w-4" />
              Portfolio
            </Button>

            {/* Wallet Connect */}
            <Button
              onClick={connectWallet}
              size="sm"
              className="gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-mono"
            >
              <Wallet className="h-4 w-4" />
              {isConnected ? "0x1234...5678" : "Connect"}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-cyan-500/20 hover:text-cyan-400 border border-transparent hover:border-cyan-500/30"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-cyan-500/20"
            >
              {/* Mobile sheet neon glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />

              <SheetHeader className="relative">
                <SheetTitle className="text-left">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-md opacity-75" />
                      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 flex items-center justify-center border border-cyan-400/30">
                        <span className="text-white font-bold text-lg font-mono">Ξ</span>
                      </div>
                    </div>
                    <div>
                      <h1 className="font-bold text-lg bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                        CryptoBuilder.eth
                      </h1>
                      <p className="text-sm text-cyan-400/80 -mt-1 font-mono">Web3 Developer</p>
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription className="text-left text-muted-foreground">
                  Building the decentralized future, one block at a time
                </SheetDescription>
              </SheetHeader>

              <div className="mt-8 space-y-6 relative">
                {/* Navigation Links */}
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex w-full text-left text-lg font-medium text-foreground hover:text-cyan-400 transition-colors font-mono"
                    >
                      <span className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyan-500" />
                        {item.name}
                      </span>
                    </button>
                  ))}
                </div>

                <Separator className="bg-cyan-500/30" />

                {/* Web3 Links */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider font-mono">
                    Web3 Presence
                  </h3>
                  <div className="space-y-3">
                    {web3Links.map((social) => {
                      const Icon = social.icon
                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-foreground hover:text-cyan-400 transition-colors font-mono"
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{social.name}</span>
                          <Globe className="h-3 w-3 ml-auto" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <Separator className="bg-cyan-500/30" />

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full gap-2 bg-transparent border-purple-500/50 text-purple-400 hover:bg-purple-500/20 font-mono"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="h-4 w-4" />
                    Download Portfolio
                  </Button>
                  <Button
                    onClick={() => {
                      connectWallet()
                      setIsOpen(false)
                    }}
                    className="w-full gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-mono"
                  >
                    <Wallet className="h-4 w-4" />
                    {isConnected ? "Wallet Connected" : "Connect Wallet"}
                  </Button>
                </div>

                {/* Status Badge */}
                <div className="pt-4">
                  <Badge
                    variant="secondary"
                    className="gap-2 bg-green-500/20 text-green-400 border-green-500/30 font-mono"
                  >
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Building on-chain
                  </Badge>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
