import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      {/* HERO */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/hero.png'})` }}
      >
        <div className="overlay"></div>
      </header>

      {/* FLOATING CTA */}
      <section className="floating-cta">
        <Link to="/phish" className="btn-fish">🎮 Play Game</Link>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="benefits">
        <div className="container">
          <h2>Why This Matters</h2>
          <p>
            Cybercrime targeting seniors is on the rise. We make digital safety simple, friendly, and accessible for everyone—no tech jargon, just real-world guidance.
          </p>
          <ul>
            <li>✅ Simple, relatable guides (print + PDF)</li>
            <li>✅ Gamified learning like “Spot the Scam”</li>
            <li>✅ Peer-led community workshops</li>
            <li>✅ Available in English and multilingual formats</li>
            <li>✅ Funded by community grants – free to join</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2>What People Say</h2>
          <blockquote>
            “After attending one workshop, I feel so much safer using my phone. I even taught my neighbour how to detect scam emails!” – Joan R., 72
          </blockquote>
          <blockquote>
            “The printed guide helped my mum navigate online banking with confidence.” – Alex M., caregiver
          </blockquote>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta" id="signup">
        <div className="container">
          <h2>Ready to Take Control?</h2>
          <p>Join the movement for safer digital habits. Sign up below to receive your free starter guide or locate a community workshop near you.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Cyber Awareness Initiative. Made with ❤️ in Victoria.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
