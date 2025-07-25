import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const educationData = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
      duration: '2022 - 2025',
      status: 'Final Year',
      location: 'West Bengal, India',
      description: 'Specialized in computer applications with focus on software development, database management, and web technologies.',
      achievements: [
        'Consistent academic performance',
        'Active participation in coding competitions',
        'Leadership roles in technical events',
        'Completed multiple real-world projects'
      ]
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'West Bengal Council of Higher Secondary Education',
      duration: '2020 - 2022',
      status: 'Completed',
      location: 'West Bengal, India',
      description: 'Completed higher secondary education with Science stream, laying foundation for computer science studies.',
      achievements: [
        'Strong foundation in Mathematics and Physics',
        'Developed interest in programming',
        'Participated in science exhibitions'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and learning milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 shadow-lg">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-semibold mb-1">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-sm font-medium">{edu.status}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-card rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Beyond formal education, I'm committed to continuous learning through online courses, 
              coding challenges, and hands-on projects. I regularly update my skills with the latest 
              technologies and best practices in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[
                'Online Courses',
                'Coding Challenges',
                'Technical Workshops',
                'Open Source Contributions',
                'Tech Community Participation'
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="skill-tag px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};