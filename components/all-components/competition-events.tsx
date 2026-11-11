"use client";

import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import BarbellFloor from "@/assets/images/barbell-floor.jpg";
import BoxingDrills from "@/assets/images/boxing-drills.jpg";
import TrackRunner from "@/assets/images/track-runner.jpg";
import TrainingFloor from "@/assets/images/training-floor.jpg";

interface CompetitionEventsProps {
  className?: string;
}

export default function CompetitionEvents({ className }: CompetitionEventsProps) {
  return (
  <MotionConfig reducedMotion="user">
<section {...{ "scroll": "wrap" }} className={cn("section_project", className)} id="events">
  <div className="padding-global">
    <div className="w-layout-blockcontainer container-large w-container">
      <div className="header project">
        <div className="header-left-wrap">
          <h2 {...{ "scroll": "up" }} className="text-style-h3">
            {"Meet the"}
            <br />
            {"competition"}
          </h2>
        </div>
        <div className="header-right-wrap">
          <div {...{ "scroll": "up" }} className="text-grey">
            {"Four ways to compete, "}
            <br />
            {"one day on the floor."}
            <br />
          </div>
        </div>
      </div>
      <div className="project_wrap">
        <div className="w-dyn-list">
          <div role="list" className="project_list-grid w-dyn-items">
            <div {...{ "scroll": "up" }} role="listitem" className="project_item w-dyn-item">
              <motion.a whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} href="#divisions" className="project_card w-inline-block">
                <div className="project_image-wrap strength-photos">
                  <img src={TrainingFloor.src} loading="lazy" alt="Athlete in a long-sleeve top doing a push-up" className="project_image" />
                  <img src={BarbellFloor.src} alt="Barbell ready for the strength event" loading="lazy" className="project_image strength-photo-secondary" />
                  <div className="project_overlay">
                    <div className="project_info-left">
                      <div className="project_info-wrap">
                        <div className="project_name">
                          {"Strength"}
                        </div>
                      </div>
                    </div>
                    <div className="project_info-right">
                      <div className="project_info-wrap">
                        <div className="text-white">
                          {"Solo"}
                        </div>
                      </div>
                      <div className="project_info-wrap">
                        <div className="text-white">
                          {"Lift for reps"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </div>
            <div {...{ "scroll": "up" }} role="listitem" className="project_item w-dyn-item">
              <motion.a whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} href="#divisions" className="project_card w-inline-block">
                <div className="project_image-wrap">
                  <img src={TrackRunner.src} loading="lazy" alt="Runner training outdoors" className="project_image" />
                  <div className="project_overlay">
                    <div className="project_info-left">
                      <div className="project_info-wrap">
                        <div className="project_name">
                          {"Endurance"}
                        </div>
                      </div>
                    </div>
                    <div className="project_info-right">
                      <div className="project_info-wrap">
                        <div className="text-white">
                          {"Solo"}
                        </div>
                      </div>
                      <div className="project_info-wrap">
                        <div className="text-white">
                          {"Race the clock"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </div>
            <div {...{ "scroll": "up" }} role="listitem" className="project_item w-dyn-item">
              <motion.a whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} href="#divisions" className="project_card w-inline-block">
                <div className="project_image-wrap">
                  <img src={BarbellFloor.src} loading="lazy" alt="Barbells arranged on a gym floor" className="project_image" />
                  <div className="project_overlay">
                    <div className="project_info-left">
                      <div className="project_info-wrap">
                        <div className="project_name">
                          {"Team relay"}
                        </div>
                      </div>
                    </div>
                    <div className="project_info-right">
                      <div className="project_info-wrap">
                        <div className="text-white">
                          {"Teams"}
                        </div>
                      </div>
                      <div className="project_info-wrap">
                        <div className="text-white">
                          {"Split the work"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </div>
            <div {...{ "scroll": "up" }} role="listitem" className="project_item w-dyn-item">
              <motion.a whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} href="#divisions" className="project_card w-inline-block">
                <div className="project_image-wrap">
                  <img src={BoxingDrills.src} loading="lazy" alt="Two athletes practicing boxing drills in T-shirts and long sleeves" className="project_image" />
                  <div className="project_overlay">
                    <div className="project_info-left">
                      <div className="project_info-wrap">
                        <div className="project_name">
                          {"Mixed circuit"}
                        </div>
                      </div>
                    </div>
                    <div className="project_info-right">
                      <div className="project_info-wrap">
                        <div className="text-white">
                          {"Solo"}
                        </div>
                      </div>
                      <div className="project_info-wrap">
                        <div className="text-white">
                          {"Combine strength and stamina"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
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
