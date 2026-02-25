import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-label">01 — About</div>
      <div className="about-grid">
        <div className="about-avatar">SS</div>
        <div className="about-text">
          <h2>Hi, I'm Sohan</h2>
          <p>
            I'm a passionate Computer Science student with a strong interest in
            web development. I love turning ideas into real, working products using
            modern technologies. Currently exploring full-stack development and
            building projects that solve real-world problems.
          </p>
          <p>
            When I'm not coding, I enjoy learning about design, reading tech blogs,
            and collaborating on open-source projects.
          </p>
          <div className="about-details">
            <span>📍 India</span>
            <span>🎓 B.Tech — Computer Science</span>
            <span>💼 Open to Internships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;