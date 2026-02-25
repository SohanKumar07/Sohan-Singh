import './Skills.css';

const skills = [
  'HTML & CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'MongoDB',
  'Git & GitHub',
  'Vite',
  'REST APIs',
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-label">02 — Skills</div>
      <h2>What I Work With</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-chip" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;