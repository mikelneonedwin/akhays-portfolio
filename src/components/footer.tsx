import { socials } from "@/constants/socials";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <div className="flex gap-6">
          {socials.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-ring transition"
              aria-label={`Link to social profile`}
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
