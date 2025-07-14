import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com",
  },
  {
    icon: Twitter,
    href: "https://x.com",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
  },
  {
    icon: Mail,
    href: "mailto:example@email.com",
  },
];

const Hero = () => {
  return (
    <>
      <div className="lg:grid grid-cols-2">
        <div className="space-y-5 leading-7">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Web3 Developer.
          </h1>
          <p>
            I&apos;m a passionate developer with expertise in full-stack
            development and blockchain technologies.{" "}
          </p>
          <p>
            With a strong foundation in modern web technologies and a deep
            understanding of decentralized systems, I create innovative
            solutions that bridge the gap between traditional web applications
            and the blockchain ecosystem.
          </p>
          <div className="space-x-5 mt-4 md:mt-6">
            {socials.map((social) => {
              return (
                <a
                  href={social.href}
                  target="_blank"
                  key={social.href}
                  className="p-1.5 rounded-full border-solid border-ring border-2 inline-block group hover:border-primary"
                >
                  <social.icon className="text-ring group-hover:text-primary size-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
