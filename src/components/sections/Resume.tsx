import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Eye, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export const Resume = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleDownload = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with actual resume path
    link.download = 'Kaushik_Ghosh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    // Open resume in new tab for preview
    window.open('/resume.pdf', '_blank');
  };

  const resumeHighlights = [
    'Final Year BCA Student',
    'Backend Development Specialist',
    'Spring Boot & React.js Expert',
    '15+ Projects Completed',
    'Strong Problem-Solving Skills',
    'Team Collaboration Experience'
  ];

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my comprehensive resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden bg-gradient-card border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            
            <CardContent className="relative p-8 md:p-12">
              {/* Resume Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                className="w-24 h-24 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center"
              >
                <FileText className="w-12 h-12 text-primary" />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl font-bold gradient-text mb-4"
              >
                Kaushik Ghosh
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Backend-Focused Web Developer
              </motion.p>

              {/* Resume Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid md:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto"
              >
                {resumeHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <Star className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    {highlight}
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  onClick={handleDownload}
                  className="gradient-hero text-white px-8 py-3 glow-hover group"
                >
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download Resume
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handlePreview}
                  className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Preview Online
                </Button>
              </motion.div>

              {/* Additional Info */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-sm text-muted-foreground mt-6"
              >
                Last updated: January 2025 • Available in PDF format
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in discussing opportunities?
          </p>
          <Button
            variant="link"
            className="text-primary hover:text-primary/80"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's get in touch →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};