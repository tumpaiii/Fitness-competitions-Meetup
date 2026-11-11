"use client";

import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import BarbellFloor from "@/assets/images/barbell-floor.jpg";
import BoxingDrills from "@/assets/images/boxing-drills.jpg";
import TrackRunner from "@/assets/images/track-runner.jpg";
import TrainingFloor from "@/assets/images/training-floor.jpg";

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {
  return (
  <MotionConfig reducedMotion="user">
<section {...{ "scroll": "wrap" }} className={cn("section_about", className)} id="about">
  <div className="padding-global">
    <div className="container-large">
      <div className="about_wrap">
        <div className="about_left-wrap">
          <div {...{ "scroll": "up" }} className="about_left-top">
            <motion.h2 whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} className="text-style-h3">
              {"Beyond your"}
              <br />
              {"usual workout"}
            </motion.h2>
            <div className="text-style-muted container-small">
              {"One day of strength, endurance and team challenges. Find your division and compete at your level."}
            </div>
            <div className="button-wrap">
              <a data-wf--button--variant="base" href="#events" className="button w-inline-block">
                <div className="button-text-wrap">
                  <div className="button-text">
                    {"Explore the events"}
                  </div>
                  <div className="button-text is-absolute">
                    {"Explore the events"}
                  </div>
                </div>
                <div className="button-background"></div>
              </a>
            </div>
          </div>
          <div {...{ "scroll": "up" }} className="about_left-bottom">
            <div className="user-image-block">
              <img src={BarbellFloor.src} loading="lazy" alt="Barbells arranged on a gym floor" className="user-image" />
              <img src={BoxingDrills.src} loading="lazy" alt="Two athletes practicing boxing drills in T-shirts and long sleeves" className="user-image left-margin" />
              <img src={TrackRunner.src} loading="lazy" alt="Runner training outdoors" className="user-image left-margin" />
              <img src={TrainingFloor.src} loading="lazy" alt="Athlete in a long-sleeve top doing a push-up" className="user-image left-margin" />
              <img src={BoxingDrills.src} loading="lazy" alt="Two athletes practicing boxing drills in T-shirts and long sleeves" className="user-image left-margin" />
            </div>
            <div>
              {"Open to first-time competitors"}
            </div>
          </div>
        </div>
        <div className="about_right-wrap">
          <div className="about_column">
            <div {...{ "scroll": "up" }} className="about_card">
              <div className="text-style-h4">
                {"Solo"}
              </div>
              <div className="text-size-large text-medium text-style-muted">
                {"Individual entries"}
              </div>
            </div>
            <div {...{ "scroll": "up" }} className="about_image-wrap">
              <motion.img whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} className="about_section-image" src={BarbellFloor.src} alt="Barbells arranged on a gym floor" {...{ "scale": "down" }} loading="lazy"></motion.img>
            </div>
          </div>
          <div className="about_column">
            <div {...{ "scroll": "up" }} className="about_image-wrap">
              <motion.img whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} className="about_section-image" src={BoxingDrills.src} alt="Two athletes practicing boxing drills in T-shirts and long sleeves" {...{ "scale": "down" }} loading="lazy"></motion.img>
            </div>
            <div {...{ "scroll": "up" }} className="about_card">
              <div className="text-style-h4">
                {"Team"}
              </div>
              <div className="text-size-large text-medium text-style-muted">
                {"Relay entries"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </MotionConfig>
  );
}
