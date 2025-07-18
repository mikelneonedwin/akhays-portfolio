import { socials } from "@/constants/socials";
import { motion, type Variants } from "framer-motion";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AVATAR_URL } from "@/constants/globals";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
} satisfies Variants;

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:grid grid-cols-2 items-center gap-10"
        id="hero"
      >
        <div className="space-y-5 leading-7">
          <motion.h1
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-semibold"
          >
            Web3 Developer.
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            I'm a passionate developer with expertise in full-stack development
            and blockchain technologies.
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            With a strong foundation in modern web technologies and a deep
            understanding of decentralized systems, I create innovative
            solutions that bridge the gap between traditional web applications
            and the blockchain ecosystem.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <ScrollArea className="mt-4 md:mt-6 whitespace-nowrap rounded-md w-full">
              <div className="flex gap-x-5 p-4">
                {socials.map((social) => (
                  <a
                    href={social.href}
                    target="_blank"
                    key={social.href}
                    className="p-1.5 rounded-full border-solid border-ring border-2 inline-block group hover:border-primary"
                  >
                    <social.icon className="text-ring group-hover:text-primary size-5" />
                  </a>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </motion.div>
        </div>

        {/* Avatar image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <Avatar
            className="rounded-xl shadow-lg w-64 h-64 object-cover bg-transparent"
            style={{ filter: "drop-shadow(0 0 10px #10B981)" }}
          >
            <AvatarImage src={AVATAR_URL} alt="Digital avatar" />
            <AvatarFallback>Me</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
