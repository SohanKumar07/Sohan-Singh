import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const categories = [
  {
    emoji: '💻',
    title: 'Programming Languages',
    type: 'icons',
    items: [
      { name: 'Java',       icon: 'https://skillicons.dev/icons?i=java' },
      { name: 'Python',     icon: 'https://skillicons.dev/icons?i=python' },
      { name: 'C',          icon: 'https://skillicons.dev/icons?i=c' },
      { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
      { name: 'Kotlin',     icon: 'https://skillicons.dev/icons?i=kotlin' },
    ],
  },
  {
    emoji: '🌐',
    title: 'Web & Mobile Development',
    type: 'icons',
    items: [
      { name: 'HTML',            icon: 'https://skillicons.dev/icons?i=html' },
      { name: 'CSS',             icon: 'https://skillicons.dev/icons?i=css' },
      { name: 'React',           icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'Node.js',         icon: 'https://skillicons.dev/icons?i=nodejs' },
      { name: 'Express',         icon: 'https://skillicons.dev/icons?i=express' },
      { name: 'MongoDB',         icon: 'https://skillicons.dev/icons?i=mongodb' },
      { name: 'Android Studio',  icon: 'https://skillicons.dev/icons?i=androidstudio' },
      { name: 'Firebase',        icon: 'https://skillicons.dev/icons?i=firebase' },
    ],
  },
  {
    emoji: '🔒',
    title: 'DevOps & Security Tools',
    type: 'icons',
    items: [
      { name: 'Linux',      icon: 'https://skillicons.dev/icons?i=linux' },
      { name: 'Git',        icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'GitHub',     icon: 'https://skillicons.dev/icons?i=github' },
      { name: 'Docker',     icon: 'https://skillicons.dev/icons?i=docker' },
      { name: 'Kubernetes', icon: 'https://skillicons.dev/icons?i=kubernetes' },
      { name: 'AWS',        icon: 'https://skillicons.dev/icons?i=aws' },
      { name: 'Kali Linux', icon: 'https://skillicons.dev/icons?i=kali' },
    ],
  },
  {
    emoji: '🛡️',
    title: 'Cybersecurity Arsenal',
    type: 'badges',
    items: [
      { name: 'Burp Suite',      color: '#FF6633' },
      { name: 'Wireshark',       color: '#1679A7' },
      { name: 'Metasploit',      color: '#2596BE' },
      { name: 'Nmap',            color: '#F5A623' },
      { name: 'OWASP',           color: '#444' },
      { name: 'Hashcat',         color: '#111' },
      { name: 'John the Ripper', color: '#C0392B' },
      { name: 'Nikto',           color: '#7B2FBE' },
    ],
  },
];

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className={`skills ${visible ? 'skills--visible' : ''}`}>

      <div className="skills-header">
        <div className="skills-label">
          <span className="skills-label-line" />
          <span>Skills</span>
        </div>
        <h2 className="skills-heading">What I Work With</h2>
        <p className="skills-sub">Technologies and tools I use to build and secure software.</p>
      </div>

      <div className="skills-categories">
        {categories.map((cat, catIdx) => (
          <div
            className="skills-category"
            key={cat.title}
            style={{ '--cat-delay': `${catIdx * 0.15}s` }}
          >
            <div className="skills-cat-title">
              <span className="skills-cat-emoji">{cat.emoji}</span>
              {cat.title}
            </div>

            {cat.type === 'icons' ? (
              <div className="skills-icons-grid">
                {cat.items.map((item, i) => (
                  <div
                    className="skill-icon-card"
                    key={item.name}
                    style={{ '--item-delay': `${catIdx * 0.15 + i * 0.07}s` }}
                  >
                    <img src={item.icon} alt={item.name} className="skill-icon-img" />
                    <span className="skill-icon-name">{item.name}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="skills-badges-grid">
                {cat.items.map((item, i) => (
                  <div
                    className="skill-badge"
                    key={item.name}
                    style={{
                      '--badge-color': item.color,
                      '--item-delay': `${catIdx * 0.15 + i * 0.07}s`,
                    }}
                  >
                    <span className="skill-badge-dot" />
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;