import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialIcon = ({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/70 border border-white/20 backdrop-blur fire-card transition-transform duration-300 hover:scale-110 hover:rotate-180 active:scale-95"
          )}
        >
          <Icon size={24} className="fire-icon text-white" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">{label}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/yourusername",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      label: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/yourusername",
    },
    {
      label: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
    },
  ];

  return (
    <footer className="bg-gray-300 border-t border-white/20 relative">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-lg font-bold fire-text">Portfolio</h2>
            <p className="text-sm text-white">
              Building the future through code, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-lg font-bold text-white">Quick Links</h2>
            <div className="flex flex-col gap-2">
              <a href="/" className="fire-nav-item text-white hover:underline">
                Home
              </a>
              <a
                href="/assets"
                className="fire-nav-item text-white hover:underline"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-lg font-bold text-white">Connect</h2>
            <div className="flex flex-row gap-4">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-white">
            © {currentYear} Portfolio. All rights reserved.
          </span>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "w-12 h-12 rounded-full bg-black/70 border border-white/20 backdrop-blur fire-card transition-transform duration-300 hover:scale-110 hover:rotate-180 active:scale-95"
            )}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="fire-icon text-white" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
