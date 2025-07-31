import { AVATAR_URL } from "@/constants/globals";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between h-16 px-5 sm:px-8 lg:px-20">
        {/* Branding */}
        <a href="/" className="text-ring font-semibold text-xl md:text-3xl">
          Web3 Dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#hero" className="hover:text-ring transition">
            About
          </a>
          <a href="#projects" className="hover:text-ring transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-ring transition">
            Contact
          </a>
        </nav>

        {/* Right side: Resume + Avatar + Mobile menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hidden sm:flex items-center justify-center"
          >
            <Avatar className="size-8">
              <AvatarImage src={AVATAR_URL} />
              <AvatarFallback>Me</AvatarFallback>
            </Avatar>
          </Button>

          {/* Mobile menu with shadcn Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-ring font-semibold text-xl">Menu</h3>
              </div>
              <nav className="flex flex-col gap-6 text-lg text-ring">
                <SheetClose asChild>
                  <a href="#hero" className="hover:text-primary transition">
                    About
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#projects" className="hover:text-primary transition">
                    Projects
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#contact" className="hover:text-primary transition">
                    Contact
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
