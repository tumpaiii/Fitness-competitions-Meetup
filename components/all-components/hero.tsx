import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import TrackRunner from "@/assets/images/track-runner.jpg";
import TrainingFloor from "@/assets/images/training-floor.jpg";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
<section {...{ "section": "hero" }} className={cn("section_hero", className)} id="home">
  <div className="hero_image-wrap">
    <img className="hero_image" src={TrainingFloor.src} alt="Athlete in a long-sleeve top doing a push-up" {...{ "hero": "image" }} loading="lazy" />
  </div>
  <div className="hero_overlay"></div>
  <div className="hero_content-wrap">
    <div className="padding-global">
      <div {...{ "hero": "text" }} className="hero_content">
        <div className="hero_left-wrap">
          <h1 {...{ "load": "up" }} className="text-style-display text-white">
            {"Show up strong."}
            <br />
            {"Finish together."}
          </h1>
        </div>
        <div className="hero_right-wrap">
          <a {...{ "load": "up" }} href="#register" className="hero_button-wrap w-inline-block">
            <div>
              <div className="button-image-wrap">
                <img src={TrackRunner.src} loading="lazy" alt="Runner training outdoors" className="button-image" />
              </div>
            </div>
            <div className="hero_button-text">
              <div className="contact-person-wrap">
                <div className="text-black text-uppercase text-medium">
                  {"REP CLUB"}
                </div>
                <div className="text-black text-size-small text-style-muted">
                  {"Fitness Competitions Meetup"}
                </div>
              </div>
              <div className="hero_button-bottom">
                <div className="text-black text-medium">
                  {"Register to compete"}
                </div>
                <div className="button-icon-wrap">
                  <ArrowUpRight className="button-icon" aria-hidden="true" />
                  <ArrowUpRight className="button-icon is-absolute" aria-hidden="true" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
