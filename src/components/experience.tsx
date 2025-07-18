import { experiences } from "@/constants/experiences";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

function formatMonthYear(iso: `${number}-${number}`): string {
  const date = new Date(`${iso}-01`);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(date);
}

experiences.sort(
  (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
);

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold lg:text-5xl">Or my work? 😏</h2>
        <div className="relative max-w-[100%] mx-auto my-[50px] md:my-[100px] after:content-[''] after:absolute after:w-[6px] after:h-full after:bg-ring/70 after:top-0 after:left-[31px] md:after:left-1/2 after:ml-[-3px] after:z-[-1] after:[animation:moveline_6s_linear_forwards]">
          <AnimatePresence mode="sync">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -30,
                  },
                  hover: {
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.2,
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                    },
                  }),
                }}
                className="pl-[70px] pr-[25px] md:px-[50px] py-[10px] relative w-full md:w-1/2 odd:left-0 md:even:left-1/2 group"
              >
                <img
                  src={exp.icon}
                  alt={exp.workedAt}
                  className="absolute transition-all duration-300 w-[40px] rounded-full left-[10px] md:group-odd:left-auto md:group-odd:right-[-20px] md:group-hover:group-odd:right-[-13px] md:group-even:left-[-20px] md:group-hover:group-even:left-[-13px] top-[32px] z-[10] group-hover:animate-bounce"
                />
                <motion.div
                  className="bg-input/70 border-input relative rounded-[6px] p-[25px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-base font-semibold text-ring">
                    {exp.role} @ {exp.workedAt}
                  </h3>
                  <small className="text-muted-foreground text-xs inline-block mb-[10px] md:mb-[15px]">
                    {formatMonthYear(exp.start)} –{" "}
                    {exp.end === "Present"
                      ? "Present"
                      : formatMonthYear(exp.end)}
                  </small>
                  <p className="mb-[15px]">{exp.description}</p>
                  <Button asChild>
                    <a href={exp.link} target="_blank">
                      View <ArrowUpRight />
                    </a>
                  </Button>
                  <span
                    className={clsx(
                      "size-0 absolute top-[28px] z-[1] border-y-[15px] border-y-transparent border-y-solid",
                      "md:group-odd:border-l-[15px] md:group-odd:border-l-solid md:group-odd:border-l-input/70 md:group-odd:right-[-15px]",
                      "md:group-even:border-r-[15px] md:group-even:border-r-solid md:group-even:border-r-input/70 md:group-even:left-[-15px]",
                      "left-[-15px] md:left-auto border-r-[15px] md:border-r-0 border-r-input/70 md:border-r-transparent"
                    )}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
