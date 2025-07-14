import {
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:your.email@example.com", icon: Mail },
];

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/75">
        <div className="w-full flex items-center justify-between h-16 px-5 sm:px-8 md:py-12 lg:px-20">
          <div className="flex items-center">
            <a href="/">
              <h3 className="font-semibold text-xl md:text-3xl text-ring">
                Akwaubok
              </h3>
            </a>
          </div>
          <div className="flex items-start gap-x-0">
            <Button
              variant="ghost"
              size="icon"
              className="!p-6 rounded-full hidden sm:flex items-center justify-center"
            >
              <Avatar className="size-8">
                {/* TODO replace with actual image */}
                <AvatarImage src="/vite.svg" />
                <AvatarFallback>Me</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

/*
            <Sheet>
              <SheetTrigger asChild className="sm:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="!p-6 rounded-full"
                >
                  <Avatar className="size-8">
                    <AvatarImage src="/vite.svg" />
                    <AvatarFallback>Me</AvatarFallback>
                  </Avatar>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />

                <SheetHeader className="relative">
                  <SheetTitle className="text-left">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-md opacity-75" />
                        <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 flex items-center justify-center border border-cyan-400/30">
                          <span className="text-white font-bold text-lg font-mono">
                            Ξ
                          </span>
                        </div>
                      </div>
                      <div>
                        <h1 className="font-bold text-lg bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                          CryptoBuilder.eth
                        </h1>
                        <p className="text-sm text-cyan-400/80 -mt-1 font-mono">
                          Web3 Developer
                        </p>
                      </div>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="text-left text-muted-foreground">
                    Building the decentralized future, one block at a time
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-8 space-y-6 relative">
                  <div className="space-y-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        // onClick={() => scrollToSection(item.href)}
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

                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider font-mono">
                      Web3 Presence
                    </h3>
                    <div className="space-y-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 text-foreground hover:text-cyan-400 transition-colors font-mono"
                            // onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-5 w-5" />
                            <span>{social.name}</span>
                            <Globe className="h-3 w-3 ml-auto" />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <Separator className="bg-cyan-500/30" />
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full gap-2 bg-transparent border-purple-500/50 text-purple-400 hover:bg-purple-500/20 font-mono"
                      // onClick={() => setIsOpen(false)}
                    >
                      <Download className="h-4 w-4" />
                      Download Portfolio
                    </Button>
                    <Button
                      onClick={() => {
                        // connectWallet();
                        // setIsOpen(false);
                      }}
                      className="w-full gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-mono"
                    >
                      <Wallet className="h-4 w-4" />
                    </Button>
                  </div>
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
            */
