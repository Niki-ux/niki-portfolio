import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="inner-page about-page">

      {/* HEADER */}
      <section className="inner-hero">
        <div className="inner-hero-number">01</div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="page-eyebrow">
            A little about me
          </p>

          <h1>
            Curious by nature.
            <br />
            <span>Always building.</span>
          </h1>

          <p className="page-intro">
            I'm Niki, an Electrical Engineering student at
            IIT Jodhpur who enjoys exploring the space between
            engineering, software and creativity.
          </p>
        </motion.div>
      </section>

      {/* STORY */}
      <section className="about-story">

        <div className="story-label">
          <span>01</span>
          <p>My story</p>
        </div>

        <div className="story-content">

          <p className="story-large">
            I like understanding how things work —
            and then figuring out how they could work better.
          </p>

          <p>
            My academic journey in Electrical Engineering has
            given me a foundation in systems, mathematics,
            electronics and problem solving. Alongside that,
            I've developed a strong interest in software
            development, data structures, AI and technology.
          </p>

          <p>
            I enjoy moving between different kinds of problems.
            One day that might mean writing C++ or debugging
            an algorithm, another might mean designing a web
            experience or exploring an AI idea.
          </p>

          <p>
            For me, the fun is in learning something unfamiliar,
            experimenting with it and eventually turning it into
            something useful.
          </p>

        </div>
      </section>

      {/* INTERESTS */}
      <section className="about-interests">

        <div className="interests-heading">
          <p className="page-eyebrow">Beyond the code</p>

          <h2>
            Things that
            <br />
            keep me curious.
          </h2>
        </div>

        <div className="interest-grid">

          <article className="interest-card interest-dark">
            <span>01</span>
            <h3>Technology</h3>
            <p>
              Software, AI, data and the endless possibilities
              of building with technology.
            </p>
          </article>

          <article className="interest-card">
            <span>02</span>
            <h3>Engineering</h3>
            <p>
              Understanding systems, solving technical problems
              and learning how things work beneath the surface.
            </p>
          </article>

          <article className="interest-card">
            <span>03</span>
            <h3>Creativity</h3>
            <p>
              Design, visual storytelling and finding better
              ways to communicate ideas.
            </p>
          </article>

          <article className="interest-card">
            <span>04</span>
            <h3>Sports</h3>
            <p>
              Staying active, competing, working with a team
              and learning from the process.
            </p>
          </article>

        </div>
      </section>

      {/* CURRENTLY */}
      <section className="currently-section">

        <div>
          <p className="page-eyebrow">
            Currently
          </p>

          <h2>
            Learning.
            <br />
            Building.
            <br />
            Exploring.
          </h2>
        </div>

        <div className="currently-list">

          <div>
            <span>01</span>
            <p>Improving my DSA & problem-solving skills</p>
          </div>

          <div>
            <span>02</span>
            <p>Exploring AI, ML & data analytics</p>
          </div>

          <div>
            <span>03</span>
            <p>Building web experiences with React</p>
          </div>

          <div>
            <span>04</span>
            <p>Taking part in hackathons & innovation challenges</p>
          </div>

        </div>

      </section>

      {/* NEXT */}
      <section className="next-page-section">

        <p>Next</p>

        <Link to="/education">
          Education
          <ArrowUpRight />
        </Link>

      </section>

    </main>
  );
}

export default About;