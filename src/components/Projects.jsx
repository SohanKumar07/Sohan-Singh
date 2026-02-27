import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Smart Data Recovery Browser Extension',
    shortTitle: 'Smart Data Recovery',
    desc: 'A browser extension that intelligently recovers lost or accidentally deleted form data, drafts, and user inputs. Saves time and frustration by restoring unsaved work with a single click.',
    tags: ['JavaScript', 'Chrome API', 'HTML', 'CSS', 'LocalStorage'],
    category: 'Browser Extension',
    color: '#f0f7ff',
    accent: '#2563eb',
    github: 'https://github.com/sohansingh',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/>
        <path d="M3 12h4m10 0h4M12 3v4m0 10v4"/>
        <path d="M7.8 7.8l2.8 2.8m2.8 2.8l2.8 2.8M16.2 7.8l-2.8 2.8m-2.8 2.8l-2.8 2.8"/>
        <circle cx="12" cy="12" r="2.5"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Personal Health Record Management',
    shortTitle: 'Health Record System',
    desc: 'A secure full-stack web application to manage personal health records, medical history, prescriptions, and appointments. Empowers patients to take control of their own health data.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'REST API'],
    category: 'Full Stack Web App',
    color: '#f0fdf4',
    accent: '#16a34a',
    github: 'https://github.com/sohansingh',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={`projects ${visible ? 'projects--visible' : ''}`}>

      {/* Header */}
      <div className="projects-header">
        <div className="projects-label">
          <span className="projects-label-line" />
          <span>Projects</span>
        </div>
        <h2 className="projects-heading">Things I've Built</h2>
        <p className="projects-sub">Real-world software that solves real problems.</p>
      </div>

      {/* Cards */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div
            className="project-card"
            key={project.number}
            style={{ '--delay': `${i * 0.18}s`, '--accent': project.accent, '--card-bg': project.color }}
          >
            {/* Top strip */}
            <div className="project-card-top">
              <div className="project-icon-wrap" style={{ background: project.color, color: project.accent }}>
                {project.icon}
              </div>
              <div className="project-meta">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="project-github-btn" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            </div>

            {/* Content */}
            <div className="project-card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>

            {/* Tags */}
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="project-card-footer">
              <a href={project.github} target="_blank" rel="noreferrer" className="project-view-btn">
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Hover accent bar */}
            <div className="project-accent-bar" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;