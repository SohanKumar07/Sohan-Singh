import { useEffect, useRef, useState } from 'react';
import './About.css';

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '3+',  label: 'Years Coding' },
  { value: '5+',  label: 'Technologies' },
];

const tags = [
  'React.js', 'Node.js', 'MongoDB', 'Full Stack', 'Open Source', 'UI/UX',
];

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`about ${visible ? 'about--visible' : ''}`}>

      {/* Left column */}
      <div className="about-left">
        <div className="about-label">
          <span className="about-label-line" />
          <span>About Me</span>
        </div>

        <h2 className="about-heading">
          Crafting digital<br />
          <em>experiences</em> that<br />
          actually work.
        </h2>

        {/* Stats row */}
        <div className="about-stats">
          {stats.map(({ value, label }, i) => (
            <div className="about-stat" key={label} style={{ '--delay': `${0.5 + i * 0.12}s` }}>
              <span className="about-stat-value">{value}</span>
              <span className="about-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="about-right">

        {/* Card */}
        <div className="about-card">
          <div className="about-card-tag">Full Stack Developer</div>
          <p className="about-bio">
            I'm a passionate Computer Science student who loves turning ideas into
            real, working products. I thrive at the intersection of clean code and
            thoughtful design — building things people actually enjoy using.
          </p>
          <p className="about-bio">
            Currently exploring full-stack development and open-source contributions.
            When I'm not coding, I'm reading about design systems or tinkering with
            side projects.
          </p>

          {/* Detail pills */}
          <div className="about-details">
            <div className="about-detail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z"/></svg>
              India
            </div>
            <div className="about-detail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              B.Tech — Computer Science
            </div>
            <div className="about-detail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Open to Internships
            </div>
          </div>
        </div>

        {/* Floating tags */}
        <div className="about-tags">
          {tags.map((tag, i) => (
            <span className="about-tag" key={tag} style={{ '--delay': `${0.6 + i * 0.08}s` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;