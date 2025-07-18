import { projects } from "@/constants/projects";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import clsx from "clsx";
import { motion } from "framer-motion";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const scrollTimer = setInterval(() => {
      api.scrollNext();
    }, 3000);

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", (state) => {
      setCurrent(state.selectedScrollSnap() + 1);
    });

    return () => clearInterval(scrollTimer);
  }, [api]);

  const disableCarouselArrows = api
    ? !(api.canScrollNext() || api.canScrollPrev())
    : true;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
        id="projects"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Need my projects? 🧠
        </h2>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <Card className="rounded-2xl backdrop-blur-md overflow-hidden transition group">
                    <div className="relative overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[200px] lg:h-[300px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-y-3 my-4 mx-6">
                      <span className="text-sm truncate whitespace-nowrap">
                        {project.subtitle}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-ring/75">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-base leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="grid grid-cols-2 gap-x-6 md:flex md:gap-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="lg"
                            className="flex gap-2"
                          >
                            <Github className="size-5" />
                            View Code
                          </Button>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="default"
                            size="lg"
                            className="flex gap-2"
                          >
                            <ExternalLink className="size-5" />
                            Live Demo
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div
            className={clsx(
              "items-center justify-between mt-4 lg:mt-6",
              disableCarouselArrows ? "hidden" : "flex"
            )}
          >
            <div className="space-x-1 hidden md:block">
              {projects.map((_, index) => (
                <Button
                  size="icon"
                  className="rounded-full"
                  variant={current === index - 1 ? "default" : "outline"}
                  key={index}
                />
              ))}
            </div>
            <div className="space-x-2 md:block flex items-center justify-between w-full md:w-auto">
              <Button
                variant="outline"
                size="icon"
                disabled={disableCarouselArrows}
                onClick={() => {
                  if (!api) return;
                  return api.canScrollPrev()
                    ? api.scrollPrev()
                    : api.scrollTo(projects.length - 1);
                }}
              >
                <ArrowLeft />
              </Button>
              <span className="text-sm opacity-70 md:hidden">
                {current} of {projects.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                disabled={disableCarouselArrows}
                onClick={() => {
                  if (!api) return;
                  return api.canScrollNext()
                    ? api.scrollNext()
                    : api.scrollTo(0);
                }}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </Carousel>
      </motion.div>
    </>
  );
};

export default Projects;
