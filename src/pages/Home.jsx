import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      <section className="home-hero">

        {/* LEFT SIDE */}
        <div className="home-content">

          <motion.div
            className="home-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-line"></span>
            IIT Jodhpur · Electrical Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm
            <br />
            <span>Niki.</span>
          </motion.h1>

          <motion.div
            className="home-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Engineering student
            <span>×</span>
            Developer
            <span>×</span>
            Curious builder
          </motion.div>

          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            I enjoy building software, exploring AI,
            solving challenging problems and turning
            interesting ideas into useful things.
          </motion.p>

          <motion.div
            className="home-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Link to="/about" className="home-primary">
              About me
              <ArrowUpRight size={16} />
            </Link>

            <Link to="/projects" className="home-text-link">
              View projects
            </Link>
          </motion.div>

        </div>


        {/* RIGHT ARTWORK */}
        <motion.div
          className="home-art-wrapper"
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          <div className="home-artwork">

            {/* Decorative shapes */}
            <div className="art-sand"></div>
            <div className="art-burgundy"></div>
            <div className="art-blue"></div>

            {/* Thin architectural lines */}
            <div className="art-line art-line-one"></div>
            <div className="art-line art-line-two"></div>

            {/* Header */}
            <div className="art-header">
              <span>NIKI / 01</span>

              <Sparkles size={15} />
            </div>

            {/* Main typography */}
            <div className="art-center">

              <span className="art-overline">
                ENGINEERING
              </span>

              <h2>
                Think.
                <br />
                Build.
                <br />
                <em>Explore.</em>
              </h2>

            </div>

            {/* Bottom */}
            <div className="art-bottom">

              <span>2026</span>

              <span>IIT JODHPUR</span>

              <span>INDIA</span>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}

export default Home;