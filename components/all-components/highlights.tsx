import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import BoxingDrills from "@/assets/images/boxing-drills.jpg";
import RepMark from "@/assets/icons/rep-mark.svg";

interface HighlightsProps {
  className?: string;
}

export default function Highlights({ className }: HighlightsProps) {
  return (
<section className={cn("section_showreel", className)} id="highlights">
  <div className="showreel_image-wrap">
    <img className="showreel_image" src={BoxingDrills.src} alt="Two athletes practicing boxing drills in T-shirts and long sleeves" {...{ "scale": "down" }} loading="lazy" />
  </div>
  <div className="showreel_content-wrap">
    <div className="padding-global">
      <div className="container-large">
        <div className="showreel_content">
          <div className="showreel_button-wrap mobile-only">
            <a href="#highlights" className="showreel_link w-inline-block " data-highlight="">
              <div className="showreel_button">
                <div className="text-black">
                  {"View highlights"}
                </div>
                <Play className="play_icon" aria-hidden="true" />
              </div>
            </a>
          </div>
          <div className="showreel_top-wrap">
            <div className="brand-wrap">
              <img src={RepMark.src} loading="lazy" alt="REP CLUB" className="brand-image is-small" />
            </div>
            <div className="showreel_button-wrap">
              <a href="#highlights" className="showreel_link w-inline-block " data-highlight="">
                <div className="showreel_button">
                  <div className="text-black">
                    {"View highlights"}
                  </div>
                  <Play className="play_icon" aria-hidden="true" />
                </div>
              </a>
            </div>
          </div>
          <div className="showreel_bottom">
            <div className="text-style-h3 text-uppercase text-white">
              {"Competition highlights"}
            </div>
            <div className="text-style-h3 text-uppercase text-white">
              {"REP CLUB"}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="showreel-overlay"></div>
</section>
  );
}
