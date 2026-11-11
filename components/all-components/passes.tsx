import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PassesProps {
  className?: string;
}

export default function Passes({ className }: PassesProps) {
  return (
<section {...{ "scroll": "wrap" }} className={cn("section_pricing", className)} id="passes">
  <div className="partner-block">
    <div className="partner-logo-wrap"></div>
    <div className="partner-logo-wrap"></div>
    <div className="partner-logo-wrap"></div>
    <div className="partner-logo-wrap"></div>
    <div className="partner-logo-wrap"></div>
    <div className="partner-logo-wrap"></div>
  </div>
  <div className="padding-global">
    <div className="w-layout-blockcontainer container-large w-container">
      <div className="pricing_header">
        <h2 {...{ "scroll": "up" }} className="text-style-h3">
          {"Choose your pass"}
        </h2>
        <div {...{ "scroll": "up" }} className="container-small">
          {"Pick your place on competition day."}
        </div>
      </div>
      <div className="pricing_block">
        <div {...{ "scroll": "up" }} className="pricing_card-wrap">
          <div className="pricing_card">
            <div className="pricing_card-top">
              <div className="pricing_card-text">
                <div className="text-style-h5">
                  {"Athlete pass"}
                </div>
                <div className="text-style-muted">
                  {"For solo and team competitors."}
                </div>
              </div>
              <div className="pricing_wrap">
                <div className="text-style-h3">
                  {"Athlete"}
                </div>
                <div>
                  {" entry"}
                </div>
              </div>
            </div>
            <div className="pricing_card-divider"></div>
            <div className="pricing_card-bottom">
              <div className="pricing_bottom-top">
                <div className="text-medium text-size-small text-style-muted">
                  {"What’s included"}
                </div>
                <div className="pricing_feature-wrap">
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Competition entry"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Athlete check-in"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Warm-up area access"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Movement briefing"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Heat assignment"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Score tracking"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Awards access"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing_bottom-bottom">
                <div className="pricing_info-wrap">
                  <div className="text-medium text-size-small text-style-muted">
                    {"Format:"}
                  </div>
                  <div>
                    {"Solo or team"}
                  </div>
                </div>
                <div className="pricing_button-wrap">
                  <a data-wf--button--variant="outline" href="#register" className="button w-variant-2e0bb085-31bc-d207-71dd-d977cae6fefa w-inline-block" data-pass="athlete">
                    <div className="button-text-wrap">
                      <div className="button-text w-variant-2e0bb085-31bc-d207-71dd-d977cae6fefa">
                        {"Choose athlete"}
                      </div>
                      <div className="button-text w-variant-2e0bb085-31bc-d207-71dd-d977cae6fefa is-absolute">
                        {"Choose athlete"}
                      </div>
                    </div>
                    <div className="button-background w-variant-2e0bb085-31bc-d207-71dd-d977cae6fefa"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing_card is-popular">
            <div className="pricing_card-top">
              <div className="pricing_card-text">
                <div className="text-style-h5">
                  {"Spectator pass"}
                </div>
                <div className="text-style-muted">
                  {"For friends, family and the rest of the crew."}
                </div>
              </div>
              <div className="pricing_wrap">
                <div className="text-style-h3">
                  {"Spectator"}
                </div>
                <div>
                  {" entry"}
                </div>
              </div>
            </div>
            <div className="pricing_card-divider"></div>
            <div className="pricing_card-bottom">
              <div className="pricing_bottom-top">
                <div className="text-medium text-size-small text-style-muted">
                  {"What’s included"}
                </div>
                <div className="pricing_feature-wrap">
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Venue admission"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Strength heat viewing"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Endurance heat viewing"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Team relay viewing"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Finals viewing"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Awards viewing"}
                    </div>
                  </div>
                  <div className="pricing_feature-single">
                    <div className="pricing_icon-wrap">
                      <Check className="tik-icon" aria-hidden="true" />
                    </div>
                    <div>
                      {"Event schedule"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing_bottom-bottom">
                <div className="pricing_info-wrap">
                  <div className="text-medium text-size-small text-style-muted">
                    {"Format:"}
                  </div>
                  <div>
                    {"General admission"}
                  </div>
                </div>
                <div className="pricing_button-wrap">
                  <a data-wf--button--variant="base" href="#register" className="button w-inline-block" data-pass="spectator">
                    <div className="button-text-wrap">
                      <div className="button-text">
                        {"Choose spectator"}
                      </div>
                      <div className="button-text is-absolute">
                        {"Choose spectator"}
                      </div>
                    </div>
                    <div className="button-background"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
