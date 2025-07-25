import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Luckwoon02',
      hoverColor: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kaushik-g-0946a5223/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      hoverColor: 'hover:text-blue-600'
    },
    {
      name: 'Instagram (@trailmapper)',
      icon: Instagram,
      url: 'https://www.instagram.com/trailmapper02/?igsh=bmtzejQwY3QwbTJw&utm_source=qr#',
      hoverColor: 'hover:text-pink-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold gradient-text mb-2">Kaushik Ghosh</h3>
              <p className="text-muted-foreground">
                Backend-Focused Web Developer
                <br />
                Trailmapper in Life & Code
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-background border border-border transition-all duration-300 ${social.hoverColor} hover:border-current hover:shadow-lg`}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center md:text-right"
            >
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground mb-3">Quick Links</p>
                <div className="flex flex-col space-y-1">
                  {[
                    { name: 'About', href: '#about' },
                    { name: 'Projects', href: '#projects' },
                    { name: 'Contact', href: '#contact' }
                  ].map((link) => (
                    <button
                      key={link.name}
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Kaushik Ghosh. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="mx-1"
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>using React.js & Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <span className="text-sm mr-2">Back to top</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </Button>
        </motion.div>

        {/* Trailmapper Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center py-6 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground italic">
            "Every path is unique, every trail tells a story. 
            <br className="hidden sm:inline" />
            I'm here to map mine through code and creativity."
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">- Trailmapper Philosophy</p>
        </motion.div>
      </div>
    </footer>
  );
};