"use client";

import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import BarbellFloor from "@/assets/images/barbell-floor.jpg";
import Kettlebells from "@/assets/images/kettlebells.jpg";
import Spectators from "@/assets/images/spectators.jpg";
import TrainingFloor from "@/assets/images/training-floor.jpg";

interface DivisionsProps {
  className?: string;
}

export default function Divisions({ className }: DivisionsProps) {
  return (
  <MotionConfig reducedMotion="user">
<section {...{ "scroll": "wrap" }} className={cn("section_service", className)} id="divisions">
  <div className="padding-global">
    <div className="w-layout-blockcontainer container-large w-container">
      <div className="service_wrap">
        <div className="service_left-wrap">
          <div className="service_sticky">
            <div {...{ "scroll": "up" }} className="flex-default">
              <motion.h2 whileInView={{ opacity: [0, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }} className="text-style-h3">
                {"Find your"}
                <br />
                {"division"}
              </motion.h2>
              <div>
                {"Choose the format that fits how you train."}
              </div>
              <div className="service_button-wrap">
                <a data-wf--button--variant="base" href="#passes" className="button w-inline-block">
                  <div className="button-text-wrap">
                    <div className="button-text">
                      {"See event passes"}
                    </div>
                    <div className="button-text is-absolute">
                      {"See event passes"}
                    </div>
                  </div>
                  <div className="button-background"></div>
                </a>
              </div>
            </div>
            <div {...{ "scroll": "up" }} className="service_navigator-wrap">
              <a href="#service-one" className="service_navigation w-inline-block">
                <div className="service_dot"></div>
                <div className="text-black">
                  {"Beginner"}
                </div>
              </a>
              <a href="#service-two" className="service_navigation w-inline-block">
                <div className="service_dot"></div>
                <div className="text-black">
                  {"Open"}
                </div>
              </a>
              <a href="#service-three" className="service_navigation w-inline-block">
                <div className="service_dot"></div>
                <div className="text-black">
                  {"Team"}
                </div>
              </a>
              <a href="#service-four" className="service_navigation w-inline-block">
                <div className="service_dot"></div>
                <div className="text-black">
                  {"Spectator"}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="service_right-wrap">
          <div id="service-one" className="service_card-wrap one">
            <div {...{ "scroll": "up" }} className="service_card">
              <div className="service_image-wrap">
                <img loading="lazy" src={TrainingFloor.src} alt="Athlete in a long-sleeve top doing a push-up" className="service_image" />
              </div>
              <div className="service_info-wrap">
                <div className="text-style-h5">
                  {"Beginner"}
                </div>
                <div className="text-style-muted">
                  {"Scaled movements and approachable loads for your first competition."}
                </div>
              </div>
            </div>
          </div>
          <div id="service-two" className="service_card-wrap">
            <div {...{ "scroll": "up" }} className="service_card">
              <div className="service_image-wrap">
                <img loading="lazy" src={Kettlebells.src} alt="Kettlebells lined up in the gym" className="service_image" />
              </div>
              <div className="service_info-wrap">
                <div className="text-style-h5">
                  {"Open"}
                </div>
                <div className="text-style-muted">
                  {"Individual heats with standard loads and movement requirements."}
                </div>
              </div>
            </div>
          </div>
          <div id="service-three" className="service_card-wrap">
            <div {...{ "scroll": "up" }} className="service_card">
              <div className="service_image-wrap">
                <img loading="lazy" src={BarbellFloor.src} alt="Barbells arranged on a gym floor" className="service_image" />
              </div>
              <div className="service_info-wrap">
                <div className="text-style-h5">
                  {"Team"}
                </div>
                <div className="text-style-muted">
                  {"Share the stations and keep each other moving through a relay."}
                </div>
              </div>
            </div>
          </div>
          <div id="service-four" className="service_card-wrap">
            <div {...{ "scroll": "up" }} className="service_card">
              <div className="service_image-wrap">
                <img loading="lazy" src={Spectators.src} alt="Spectators watching from the stands" className="service_image" />
              </div>
              <div className="service_info-wrap">
                <div className="text-style-h5">
                  {"Spectator"}
                </div>
                <div className="text-style-muted">
                  {"Come watch the heats and cheer on your crew."}
                </div>
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
