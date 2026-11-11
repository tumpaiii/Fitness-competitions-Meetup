"use client";

import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import RepMark from "@/assets/icons/rep-mark.svg";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
  <MotionConfig reducedMotion="user">
<div className={cn("rep-end", className)}>
  <section className="rep-closing" id="register" aria-labelledby="closing-title">
    <motion.div whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }}>
      <h2 id="closing-title">
        {"Ready to step"}
        <br />
        {"onto the floor?"}
      </h2>
      <p>
        {"Choose an athlete or spectator pass for competition day."}
      </p>
      <a href="#passes">
        {"View passes"}
      </a>
    </motion.div>
  </section>
  <footer className="rep-footer" id="footer">
    <motion.div whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} className="rep-footer-card">
      <div className="rep-footer-grid">
        <div className="rep-footer-brand">
          <a href="#home" aria-label="REP CLUB home">
            <img src={RepMark.src} alt="" width="28" height="28" />
            {"REP CLUB"}
          </a>
          <p>
            {"A one-day fitness meetup for competitors, teams and their supporters."}
          </p>
        </div>
        <nav aria-label="Competition">
          <h3>
            {"Competition"}
          </h3>
          <a href="#events">
            {"Events"}
          </a>
          <a href="#divisions">
            {"Divisions"}
          </a>
          <a href="#schedule">
            {"Schedule"}
          </a>
        </nav>
        <nav aria-label="Event day">
          <h3>
            {"Event day"}
          </h3>
          <a href="#venue">
            {"Venue"}
          </a>
          <a href="#event-guide">
            {"Athlete guide"}
          </a>
          <a href="#faq">
            {"FAQ"}
          </a>
        </nav>
        <nav aria-label="REP CLUB">
          <h3>
            {"REP CLUB"}
          </h3>
          <a href="#about">
            {"About"}
          </a>
          <a href="#passes">
            {"Passes"}
          </a>
          <a href="#register">
            {"Registration"}
          </a>
        </nav>
      </div>
      <div className="rep-footer-bottom">
        <small>
          {"© REP CLUB 2026. All rights reserved."}
        </small>
        <a href="#home">
          {"Back to top"}
        </a>
      </div>
    </motion.div>
    <div className="rep-footer-wordmark" aria-hidden="true">
      {"REP CLUB"}
    </div>
  </footer>
</div>
  </MotionConfig>
  );
}
