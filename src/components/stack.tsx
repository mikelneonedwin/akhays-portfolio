import * as stack from "@/constants/stack";
import { Icon } from "@iconify/react";
import Marquee from "react-fast-marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

type StackItem = {
  group: string;
  items: StackValue[];
};

type StackValue = {
  label: string;
  icon: string;
};

const stackList: StackItem[] = Object.entries(stack).map(([group, items]) => ({
  group,
  items,
}));

const Stack = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-semibold lg:text-5xl">
          What I can do? 💪
        </h2>
        <Accordion
          type="multiple"
          value={stackList.map((stack) => stack.group)}
          className="w-full"
        >
          {stackList.map(({ group, items }, index) => (
            <AccordionItem value={group} key={group} asChild>
              <motion.div
                key={group}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionTrigger className="text-base md:text-lg [&_svg]:size-5">
                  {group}
                </AccordionTrigger>
                <AccordionContent>
                  <Marquee
                    autoFill
                    pauseOnHover
                    speed={(index + 1) * 10 + 5}
                    direction={index & 1 ? "left" : "right"}
                  >
                    {items.map((item) => (
                      <Button
                        key={item.label}
                        variant="outline"
                        size="lg"
                        className="mx-2"
                      >
                        <Icon
                          icon={item.icon}
                          className="text-action-default inline-block mr-2"
                        />
                        {item.label}
                      </Button>
                    ))}
                  </Marquee>
                </AccordionContent>
              </motion.div>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </>
  );
};

export default Stack;
