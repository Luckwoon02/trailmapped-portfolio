import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'E-Commerce Web Application',
      description: 'Full-stack e-commerce platform built with Spring Boot backend and React frontend. Features include user authentication, product catalog, shopping cart, and order management.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'JPA', 'Hibernate'],
      liveUrl: '#',
      codeUrl: '#',
      icon: Globe,
      category: 'Full Stack'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with user authentication, CRUD operations, and role-based access control. Built with Spring Boot and documented with Swagger.',
      tech: ['Spring Boot', 'REST API', 'MySQL', 'JWT', 'Swagger'],
      liveUrl: '#',
      codeUrl: '#',
      icon: Database,
      category: 'Backend'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio website showcasing my projects and skills. Built with React.js, Framer Motion for animations, and Tailwind CSS for styling.',
      tech: ['React.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      liveUrl: '#',
      codeUrl: '#',
      icon: Code,
      category: 'Frontend'
    },
    {
      title: 'Student Management System',
      description: 'Desktop application for managing student records, grades, and attendance. Features data validation, search functionality, and report generation.',
      tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
      liveUrl: '#',
      codeUrl: '#',
      icon: Database,
      category: 'Desktop'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard displaying current conditions and forecasts. Integrates with external weather APIs and features responsive design.',
      tech: ['React.js', 'Weather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      codeUrl: '#',
      icon: Globe,
      category: 'Frontend'
    },
    {
      title: 'Inventory Management System',
      description: 'Backend system for inventory management with real-time stock tracking, supplier management, and automated alerts for low stock items.',
      tech: ['Spring Boot', 'MySQL', 'JPA', 'REST API'],
      liveUrl: '#',
      codeUrl: '#',
      icon: Database,
      category: 'Backend'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="project-card h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                      Live Demo
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            size="lg"
            className="gradient-hero text-white px-8 py-3 glow-hover"
            onClick={() => window.open('https://github.com/kaushikghosh', '_blank')}
          >
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};