import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, tags, demoLink, codeLink, delay = 0 }) => {
    return (
        <motion.div
            className="project-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -10 }}
        >
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                    <div className="project-links">
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaExternalLinkAlt />
                            </a>
                        )}
                        {codeLink && (
                            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaGithub />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
