import { socials } from "@/constants/socials";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { EMAIL_URL } from "@/constants/globals";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-center py-20"
    >
      <h2 className="text-3xl font-semibold lg:text-5xl">Get in Touch ✉️</h2>

      <p className="text-muted-foreground text-base sm:text-lg">
        Whether you want to collaborate, ask questions, or just say hi, feel
        free to reach out!
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {socials.map(({ href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-ring hover:border-primary transition"
            aria-label={`Link to ${href}`}
          >
            <Icon className="size-5 sm:size-6 text-ring hover:text-primary" />
          </a>
        ))}
      </div>

      <Button
        asChild
        className="mt-6 w-full sm:w-auto"
        size="lg"
        variant="default"
      >
        <a href={EMAIL_URL}>Email Me</a>
      </Button>
    </motion.section>
  );
};

export default Contact;
