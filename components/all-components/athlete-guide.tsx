import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BarbellFloor from "@/assets/images/barbell-floor.jpg";
import BoxingDrills from "@/assets/images/boxing-drills.jpg";
import TrackRunner from "@/assets/images/track-runner.jpg";
import TrainingFloor from "@/assets/images/training-floor.jpg";

interface AthleteGuideProps {
  className?: string;
}

export default function AthleteGuide({ className }: AthleteGuideProps) {
  return (
<section {...{ "scroll": "wrap" }} className={cn("section_testimonial", className)} id="event-guide">
  <div className="testimonial_block">
    <div {...{ "scroll": "up" }} className="testimonial_wrap">
      <div className="padding-global">
        <div className="container-large">
          <div className="testimonial_header">
            <div className="header-left-wrap">
              <h2 className="text-style-h3 text-white">
                {"Know before"}
                <br />
                {"you go"}
              </h2>
            </div>
            <div className="header-right-wrap mobile-hidden">
              <div className="text-white">
                {"What athletes need to know "}
                <br />
                {"before arrival."}
              </div>
            </div>
          </div>
          <div className="testimonial_content-wrap">
            <div data-delay="4000" data-animation="cross" className="testimonial_slider w-slider" data-autoplay="false" data-easing="ease-in-out-expo" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
              <div className="testimonial_slider-mask w-slider-mask">
                <div className="testimonial_slide w-slide">
                  <div className="testimonial_card">
                    <div className="testimonial_image-wrap">
                      <img {...{ "scale": "down" }} loading="lazy" alt="Runner training outdoors" src={TrackRunner.src} className="testimonial_image" />
                    </div>
                    <div className="testimonial_content">
                      <div className="testimonial_text-wrap">
                        <div className="text-white text-style-h5 text-style-muted">
                          {"Before your first heat"}
                        </div>
                        <div className="text-white text-style-h6">
                          {"Arrive early enough for check-in, warm-up and the movement briefing."}
                        </div>
                      </div>
                      <div className="testimonial_author-wrap">
                        <div className="text-white text-uppercase text-medium">
                          {"Check-in"}
                        </div>
                        <div className="text-white text-style-muted">
                          {"Athlete guide"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_slide w-slide">
                  <div className="testimonial_card">
                    <div className="testimonial_image-wrap">
                      <img {...{ "scale": "down" }} loading="lazy" alt="Athlete in a long-sleeve top doing a push-up" src={TrainingFloor.src} className="testimonial_image" />
                    </div>
                    <div className="testimonial_content">
                      <div className="testimonial_text-wrap">
                        <div className="text-white text-style-h5 text-style-muted">
                          {"How scoring works"}
                        </div>
                        <div className="text-white text-style-h6">
                          {"Judges record valid reps and finish times according to the standards for each challenge."}
                        </div>
                      </div>
                      <div className="testimonial_author-wrap">
                        <div className="text-white text-uppercase text-medium">
                          {"Scoring"}
                        </div>
                        <div className="text-white text-style-muted">
                          {"Athlete guide"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_slide w-slide">
                  <div className="testimonial_card">
                    <div className="testimonial_image-wrap">
                      <img {...{ "scale": "down" }} loading="lazy" alt="Two athletes practicing boxing drills in T-shirts and long sleeves" src={BoxingDrills.src} className="testimonial_image" />
                    </div>
                    <div className="testimonial_content">
                      <div className="testimonial_text-wrap">
                        <div className="text-white text-style-h5 text-style-muted">
                          {"Competing with a team"}
                        </div>
                        <div className="text-white text-style-h6">
                          {"Check your roster before arrival and agree who takes each station."}
                        </div>
                      </div>
                      <div className="testimonial_author-wrap">
                        <div className="text-white text-uppercase text-medium">
                          {"Team relay"}
                        </div>
                        <div className="text-white text-style-muted">
                          {"Athlete guide"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_slide w-slide">
                  <div className="testimonial_card">
                    <div className="testimonial_image-wrap">
                      <img {...{ "scale": "down" }} loading="lazy" alt="Barbells arranged on a gym floor" src={BarbellFloor.src} className="testimonial_image" />
                    </div>
                    <div className="testimonial_content">
                      <div className="testimonial_text-wrap">
                        <div className="text-white text-style-h5 text-style-muted">
                          {"What to pack"}
                        </div>
                        <div className="text-white text-style-h6">
                          {"Bring training shoes, a water bottle and a change of clothes."}
                        </div>
                      </div>
                      <div className="testimonial_author-wrap">
                        <div className="text-white text-uppercase text-medium">
                          {"Equipment"}
                        </div>
                        <div className="text-white text-style-muted">
                          {"Athlete guide"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_slide w-slide">
                  <div className="testimonial_card">
                    <div className="testimonial_image-wrap">
                      <img {...{ "scale": "down" }} loading="lazy" alt="Two athletes practicing boxing drills in T-shirts and long sleeves" src={BoxingDrills.src} className="testimonial_image" />
                    </div>
                    <div className="testimonial_content">
                      <div className="testimonial_text-wrap">
                        <div className="text-white text-style-h5 text-style-muted">
                          {"Watching the event"}
                        </div>
                        <div className="text-white text-style-h6">
                          {"Check the schedule for team heats, finals and awards."}
                        </div>
                      </div>
                      <div className="testimonial_author-wrap">
                        <div className="text-white text-uppercase text-medium">
                          {"Spectators"}
                        </div>
                        <div className="text-white text-style-muted">
                          {"Event guide"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-arrow w-slider-arrow-left">
                <div className="arrow-icon-wrap">
                  <ArrowRight className="arrow-icon" aria-hidden="true" />
                </div>
              </div>
              <div className="right-arrow w-slider-arrow-right">
                <div className="arrow-icon-wrap">
                  <ArrowLeft className="arrow-icon" aria-hidden="true" />
                </div>
              </div>
              <div className="slide-nav w-slider-nav w-round w-num"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
