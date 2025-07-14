import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const projects = [
  {
    title: "Flask REST API",
    subtitle: "NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION",
    description:
      "A comprehensive backend system featuring JWT authentication, SQLAlchemy ORM, and Swagger documentation. Includes user management, role-based access control, and automated testing.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Image Editor",
    subtitle: "REACT JS, FRAMER MOTION",
    description:
      "An intelligent image processing application that leverages OpenAI's CLIP model for smart image classification and editing. Built with Python and modern AI frameworks.",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Hospital Management",
    subtitle: "REACT JS, NODE JS, MONGO DB, EXPRESS",
    description:
      "A full-stack healthcare management solution with appointment scheduling, patient records, and medical inventory tracking. Features real-time updates and secure data handling.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  return (
    <>
      <div className="space-y-8">
        <h2 className="text-3xl lg:text-5xl font-semibold">My Projects?</h2>
        {/* TODO make this a scroll area */}
        <div className="md:grid flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="rounded-2xl backdrop-blur-md overflow-hidden hover:-translate-y-1 transition group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col gap-y-3 py-4 px-6">
                <span className="text-sm truncate whitespace-nowrap">
                  {project.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-ring/75">
                  {project.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="flex gap-2">
                      <Github className="w-5 h-5" />
                      View Code
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="lg" className="flex gap-2">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
