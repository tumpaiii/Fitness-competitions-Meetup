import { cn } from "@/lib/utils";
import BarbellFloor from "@/assets/images/barbell-floor.jpg";
import TrainingFloor from "@/assets/images/training-floor.jpg";

interface VenueProps {
  className?: string;
}

export default function Venue({ className }: VenueProps) {
  return (
<section {...{ "scroll": "wrap" }} className={cn("section_blog", className)} id="venue">
  <div className="padding-global">
    <div className="w-layout-blockcontainer container-large w-container">
      <div className="header">
        <div className="header-left-wrap">
          <h2 {...{ "scroll": "up" }} className="text-style-h3">
            {"Plan your"}
            <br />
            {"visit"}
          </h2>
        </div>
        <div className="header-right-wrap">
          <div {...{ "scroll": "up" }} className="text-grey">
            {"Venue and check-in "}
            <br />
            {"details for event day."}
            <br />
          </div>
        </div>
      </div>
      <div className="blog_wrap">
        <div className="w-dyn-list">
          <div role="list" className="blog_list w-dyn-items">
            <div {...{ "scroll": "up" }} role="listitem" className="blog_item w-dyn-item">
              <a href="#faq" className="blog_card w-inline-block">
                <div className="blog_image-wrap">
                  <img src={TrainingFloor.src} loading="lazy" alt="Athlete in a long-sleeve top doing a push-up" className="blog_image" />
                </div>
                <div className="blog_info-wrap">
                  <div className="blog_info-top">
                    <div className="text-black text-style-muted text-size-small">
                      {"Venue"}
                    </div>
                    <div className="blog_info-divider"></div>
                    <div className="text-black text-style-muted text-size-small">
                      {"To be announced"}
                    </div>
                  </div>
                  <div className="text-style-h5 text-black">
                    {"Getting to competition day"}
                  </div>
                </div>
              </a>
            </div>
            <div {...{ "scroll": "up" }} role="listitem" className="blog_item w-dyn-item">
              <a href="#faq" className="blog_card w-inline-block">
                <div className="blog_image-wrap">
                  <img src={BarbellFloor.src} loading="lazy" alt="Barbells arranged on a gym floor" className="blog_image" />
                </div>
                <div className="blog_info-wrap">
                  <div className="blog_info-top">
                    <div className="text-black text-style-muted text-size-small">
                      {"Athlete check-in"}
                    </div>
                    <div className="blog_info-divider"></div>
                    <div className="text-black text-style-muted text-size-small">
                      {"Event guide"}
                    </div>
                  </div>
                  <div className="text-style-h5 text-black">
                    {"What to bring when you arrive"}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
