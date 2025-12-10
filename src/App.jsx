import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import ParticleBackground from './components/ParticleBackground';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  // Skills data
  const skills = [
    { icon: <FaReact />, name: 'React', level: 95 },
    { icon: <FaJs />, name: 'JavaScript', level: 90 },
    { icon: <FaHtml5 />, name: 'HTML5', level: 95 },
    { icon: <FaCss3Alt />, name: 'CSS3', level: 90 },
    { icon: <SiNextdotjs />, name: 'Next.js', level: 85 },
    { icon: <SiTailwindcss />, name: 'Tailwind', level: 90 },
    { icon: <FaNodeJs />, name: 'Node.js', level: 85 },
    { icon: <SiExpress />, name: 'Express', level: 80 },
    { icon: <SiMongodb />, name: 'MongoDB', level: 75 },
  ];

  // Projects data (placeholder)
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/00f5ff?text=E-Commerce+Platform',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and reporting features.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/a855f7?text=Social+Dashboard',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop interface, team collaboration, and progress tracking.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/ec4899?text=Task+Manager',
      tags: ['React', 'Firebase', 'Tailwind', 'DnD'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <div className="app">
      <ParticleBackground />

      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="gradient-text">Tarek</span>
            </motion.h1>
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Web Developer
            </motion.h2>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building modern, scalable web applications with cutting-edge technologies
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title gradient-text">About Me</h2>
            <p className="section-subtitle">Passionate about creating exceptional digital experiences</p>
          </motion.div>

          <motion.div
            className="about-content glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a Full Stack Web Developer with a passion for building beautiful, functional, and user-friendly websites and applications.
              With expertise in modern web technologies, I transform ideas into reality through clean code and innovative solutions.
            </p>
            <p>
              My journey in web development has equipped me with a diverse skill set, allowing me to handle everything from responsive
              front-end interfaces to robust back-end systems. I'm constantly learning and adapting to new technologies to deliver
              the best possible solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title gradient-text">Skills & Technologies</h2>
            <p className="section-subtitle">Tools and technologies I work with</p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title gradient-text">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title gradient-text">Get In Touch</h2>
            <p className="section-subtitle">Let's work together on your next project</p>
          </motion.div>

          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-info glass">
              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="social-links">
                <a href="mailto:your.email@example.com" className="social-link" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Tarek. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
