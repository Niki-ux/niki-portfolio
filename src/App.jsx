import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

const skills = [
  ["Languages", "C / C++ · Python · JavaScript · HTML · CSS · Verilog"],
  ["Development", "React.js · Node.js · Responsive Web Development"],
  ["Tools", "Git · GitHub · VS Code · Arduino · SolidWorks"],
  ["Core", "Electrical Engineering · Problem Solving · DSA"],
  ["Exploring", "AI / ML · Data Analytics · Generative AI"],
];

const projects = [
  {
    number: "01",
    title: "Toxic Comment Classification",
    category: "AI / ML",
    description:
      "A machine-learning project focused on identifying toxic online comments and supporting safer digital conversations.",
    technologies: "Python · Machine Learning · NLP",
  },
  {
    number: "02",
    title: "Hospital Management System",
    category: "Software",
    description:
      "A C-based management system designed to organize hospital records and streamline common administrative operations.",
    technologies: "C · Data Structures",
  },
  {
    number: "03",
    title: "Smart Dustbin",
    category: "Hardware",
    description:
      "An Arduino-based smart system exploring automation and sensor-driven waste management.",
    technologies: "Arduino · Sensors · Embedded",
  },
  {
    number: "04",
    title: "Web Development",
    category: "Frontend",
    description:
      "Responsive web experiences built with modern frontend technologies, clean interfaces and reusable components.",
    technologies: "React · HTML · CSS · JavaScript",
  },
];

const achievements = [
  ["01", "IIT Jodhpur", "B.Tech in Electrical Engineering · 2024–2028"],
  [
    "02",
    "Competitive Programming",
    "180+ LeetCode problems and continuous DSA practice",
  ],
  ["03", "Open Source", "GirlScript Summer of Code 2026 Contributor"],
  [
    "04",
    "Innovation",
    "Participation in hackathons, challenges and technology competitions",
  ],
];

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function Arrow() {
  return <span className="icon">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Achievements", "achievements"],
    ["Contact", "contact"],
  ];

  return (
    <div className="site">
      <header className="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">
            N<span>.</span>
          </a>

          <nav className="desktop-nav">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="talk-button desktop-talk">
            Let's talk
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-content">
              <motion.p
                className="eyebrow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                IIT Jodhpur · Electrical Engineering
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Electrical Engineering Student{" "}
                <span>&</span> Developer.
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm <strong>Niki</strong>. I enjoy building software,
                solving problems, exploring AI, and turning ideas into
                practical solutions.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <a href="#projects" className="primary-button">
                  Explore my work <Arrow />
                </a>

                <a href="#contact" className="secondary-button">
                  Let's connect
                </a>
              </motion.div>

              <div className="stats">
                <div>
                  <strong>180+</strong>
                  <span>DSA problems</span>
                </div>

                <div>
                  <strong>2024–28</strong>
                  <span>IIT Jodhpur</span>
                </div>

                <div>
                  <strong>Builder</strong>
                  <span>mindset</span>
                </div>
              </div>
            </div>

            <motion.div
              className="hero-card-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="hero-card-outer">
                <div className="hero-card">
                  <div className="card-top">
                    <span>NIKI / 01</span>
                    <span>✦</span>
                  </div>

                  <div>
                    <div className="big-n">
                      N<span>.</span>
                    </div>

                    <p>
                      Engineer by education.
                      <br />
                      Developer by curiosity.
                    </p>
                  </div>

                  <div className="status">
                    <span />
                    Currently learning & building
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section white-section">
          <div className="container">
            <Reveal>
              <p className="section-number">01 — About</p>

              <h2>
                Curious about technology,
                <br />
                serious about building.
              </h2>
            </Reveal>

            <div className="two-column">
              <Reveal>
                <p className="large-text">
                  I'm an Electrical Engineering student at IIT Jodhpur with a
                  strong interest in software development, data structures, AI
                  and innovation.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="body-text">
                  My work sits at the intersection of engineering and
                  technology. I like understanding how things work, breaking
                  complex problems into smaller pieces, and turning ideas into
                  useful products. Outside academics, I enjoy creative work,
                  sports and taking part in new challenges.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="container">
            <Reveal>
              <p className="section-number">02 — Skills</p>
              <h2>Tools I build with.</h2>
            </Reveal>

            <div className="skills-list">
              {skills.map(([title, items], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="skill-row">
                    <strong>{title}</strong>
                    <span>{items}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="dark-section">
          <div className="container">
            <Reveal>
              <p className="section-number dark-number">
                03 — Projects
              </p>
              <h2>Things I've built.</h2>
            </Reveal>

            <div className="project-grid">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.05}>
                  <article className="project-card">
                    <div className="project-top">
                      <span>{project.number}</span>
                      <small>{project.category}</small>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-bottom">
                      <span>{project.technologies}</span>
                      <span className="project-arrow">↗</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section white-section">
          <div className="container">
            <Reveal>
              <p className="section-number">04 — Experience</p>
              <h2>Learning by doing.</h2>
            </Reveal>

            <div className="experience-grid">
              <article className="experience-card">
                <div className="experience-icon">&lt;/&gt;</div>
                <h3>Open Source</h3>
                <p>
                  Contributor experience through collaborative development and
                  community-driven projects.
                </p>
              </article>

              <article className="experience-card">
                <div className="experience-icon">AI</div>
                <h3>Data & AI</h3>
                <p>
                  Hands-on exposure to AI, data analytics and machine-learning
                  projects.
                </p>
              </article>

              <article className="experience-card">
                <div className="experience-icon">✦</div>
                <h3>Competitions</h3>
                <p>
                  Exploring ambitious ideas through hackathons, innovation
                  challenges and technical competitions.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="section">
          <div className="container">
            <Reveal>
              <p className="section-number">05 — Highlights</p>
              <h2>A few milestones.</h2>
            </Reveal>

            <div className="achievement-list">
              {achievements.map(([number, title, description], index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <div className="achievement-row">
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="container">
            <Reveal>
              <p className="section-number">06 — Contact</p>

              <h2>
                Have an idea?
                <br />
                <span>Let's build it.</span>
              </h2>

              <p className="contact-description">
                I'm always open to interesting projects, collaborations,
                learning opportunities and conversations around technology.
              </p>

              <div className="contact-buttons">
                <a
                  href="mailto:b24ee1047@iitj.ac.in"
                  className="primary-button"
                >
                  Email me
                </a>

                <a href="#" className="secondary-button">
                  LinkedIn
                </a>

                <a href="#" className="secondary-button">
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 Niki. Built with curiosity.</span>

          <a href="#">
            ↓ &nbsp; Resume
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;