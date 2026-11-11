import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface FaqProps {
  className?: string;
}

export default function Faq({ className }: FaqProps) {
  return (
<section {...{ "scroll": "wrap" }} data-wf--faq--variant="base" className={cn("section_faq", className)} id="faq">
  <div className="padding-global">
    <div className="w-layout-blockcontainer container-large w-container">
      <div className="faq_wrap">
        <div {...{ "scroll": "up" }} className="faq_left-wrap">
          <h2 className="text-style-h3">
            {"A few things"}
            <br />
            {"worth knowing"}
          </h2>
        </div>
        <div className="faq_card-wrap">
          <div {...{ "scroll": "up" }} className="faq_card">
            <div className="faq_question-wrap">
              <div className="text-style-h6">
                {"Can I enter as a beginner?"}
              </div>
              <Plus className="faq_icon" aria-hidden="true" />
            </div>
            <div className="faq_answer-wrap">
              <div className="faq_text-wrap">
                <div className="text-style-muted">
                  {"Yes. The Beginner division is designed for first-time competitors and uses scaled movements."}
                </div>
              </div>
            </div>
          </div>
          <div {...{ "scroll": "up" }} className="faq_card">
            <div className="faq_question-wrap">
              <div className="text-style-h6">
                {"Can I enter with friends?"}
              </div>
              <Plus className="faq_icon" aria-hidden="true" />
            </div>
            <div className="faq_answer-wrap">
              <div className="faq_text-wrap">
                <div className="text-style-muted">
                  {"Choose the Team division for the relay format."}
                </div>
              </div>
            </div>
          </div>
          <div {...{ "scroll": "up" }} className="faq_card">
            <div className="faq_question-wrap">
              <div className="text-style-h6">
                {"What should I bring?"}
              </div>
              <Plus className="faq_icon" aria-hidden="true" />
            </div>
            <div className="faq_answer-wrap">
              <div className="faq_text-wrap">
                <div className="text-style-muted">
                  {"Bring training shoes, water and a change of clothes."}
                </div>
              </div>
            </div>
          </div>
          <div {...{ "scroll": "up" }} className="faq_card">
            <div className="faq_question-wrap">
              <div className="text-style-h6">
                {"How will I know my heat time?"}
              </div>
              <Plus className="faq_icon" aria-hidden="true" />
            </div>
            <div className="faq_answer-wrap">
              <div className="faq_text-wrap">
                <div className="text-style-muted">
                  {"Check your heat assignment during athlete check-in."}
                </div>
              </div>
            </div>
          </div>
          <div {...{ "scroll": "up" }} className="faq_card">
            <div className="faq_question-wrap">
              <div className="text-style-h6">
                {"Can spectators attend?"}
              </div>
              <Plus className="faq_icon" aria-hidden="true" />
            </div>
            <div className="faq_answer-wrap">
              <div className="faq_text-wrap">
                <div className="text-style-muted">
                  {"Yes. Choose the spectator pass to follow the heats and finals."}
                </div>
              </div>
            </div>
          </div>
          <div {...{ "scroll": "up" }} className="faq_card">
            <div className="faq_question-wrap">
              <div className="text-style-h6">
                {"Do I need to bring equipment?"}
              </div>
              <Plus className="faq_icon" aria-hidden="true" />
            </div>
            <div className="faq_answer-wrap">
              <div className="faq_text-wrap">
                <div className="text-style-muted">
                  {"Standard station equipment is provided. Bring personal training gear."}
                </div>
              </div>
            </div>
          </div>
          <div {...{ "scroll": "up" }} className="faq_card">
            <div className="faq_question-wrap">
              <div className="text-style-h6">
                {"Where is the event?"}
              </div>
              <Plus className="faq_icon" aria-hidden="true" />
            </div>
            <div className="faq_answer-wrap">
              <div className="faq_text-wrap">
                <div className="text-style-muted">
                  {"The venue and arrival details will be confirmed before registration opens."}
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
