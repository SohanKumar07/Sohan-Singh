import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Website',
    desc: 'A full-stack shopping platform with cart, authentication, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather forecast app using OpenWeatherMap API with a clean UI.',
    tech: ['React', 'REST API', 'CSS'],
  },
  {
    title: 'Task Manager',
    desc: 'A productivity app with drag-and-drop task management and local storage.',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-label">03 — Projects</div>
      <h2>Things I've Built</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;