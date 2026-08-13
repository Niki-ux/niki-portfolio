import { useState } from "react";
import { LockKeyhole, ArrowRight } from "lucide-react";

function Vault() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main className="vault-page">

      <div className="vault-grid"></div>

      <div className="vault-top">
        <span>03 / PRIVATE</span>
        <span>NIKI — 2026</span>
      </div>

      <section className="vault-entrance">

        <div className="vault-number">
          01
        </div>

        <div className="vault-lock">
          <LockKeyhole size={34} strokeWidth={1.4} />
        </div>

        <p className="vault-eyebrow">
          PRIVATE SPACE
        </p>

        <h1>
          NIKI'S
          <span>VAULT</span>
        </h1>

        <p className="vault-description">
          A little corner of the internet for thoughts,
          notes, ideas, journals and things worth keeping.
        </p>

        {!showLogin ? (
          <>
            <button
              className="unlock-button"
              onClick={() => setShowLogin(true)}
            >
              UNLOCK VAULT
              <ArrowRight size={17} />
            </button>

            <p className="vault-account">
              Need an account?
              <button onClick={() => setShowLogin(true)}>
                Create one
              </button>
            </p>
          </>
        ) : (
          <div className="vault-login-card">

            <p className="login-label">
              MEMBER ACCESS
            </p>

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button className="login-button">
              ENTER VAULT
              <ArrowRight size={16} />
            </button>

            <p className="login-switch">
              Don't have an account?
              <button>
                Create one
              </button>
            </p>

          </div>
        )}

      </section>

      <div className="vault-bottom">
        <span>NOTES</span>
        <span>THOUGHTS</span>
        <span>JOURNALS</span>
        <span>IDEAS</span>
      </div>

    </main>
  );
}

export default Vault;