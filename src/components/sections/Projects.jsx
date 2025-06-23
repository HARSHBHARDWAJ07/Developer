import React, { useState } from 'react';
// Remove the unused motion import:
// import { motion } from 'framer-motion'; 
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import ScrollReveal from '../animations/ScrollReveal';
import { projects } from '../../config/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Featured Projects
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Here are some of my recent projects that showcase my skills and expertise
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 mb-4 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
        />
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary">Featured</Badge>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        
        <p className="flex-1 mb-4 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default" size="xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button
            href={project.links.demo}
            variant="primary"
            size="sm"
            className="flex-1"
          >
            Live Demo
          </Button>
          <Button
            href={project.links.github}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Projects;