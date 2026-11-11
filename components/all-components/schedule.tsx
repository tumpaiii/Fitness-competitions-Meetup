import { cn } from "@/lib/utils";

interface ScheduleProps {
  className?: string;
}

export default function Schedule({ className }: ScheduleProps) {
  return (
<section {...{ "scroll": "wrap" }} className={cn("section_project-progress", className)} id="schedule">
  <div className="padding-global">
    <div className="w-layout-blockcontainer container-large w-container">
      <div className="header">
        <div className="header-left-wrap">
          <h2 {...{ "scroll": "up" }} className="text-style-h3">
            {"Your competition"}
            <br />
            {"day"}
          </h2>
        </div>
        <div className="header-right-wrap">
          <div {...{ "scroll": "up" }} className="text-grey">
            {"From athlete check-in "}
            <br />
            {"to the final podium."}
            <br />
          </div>
        </div>
      </div>
      <div className="progress_wrap">
        <div {...{ "scroll": "up" }} className="progress_card">
          <div className="progress_column-left">
            <div className="text-style-h6">
              {"Athlete check-in"}
            </div>
            <div className="text-style-muted">
              {"Pick up your bib and warm up"}
            </div>
          </div>
          <div data-wf--progress-bar--variant="25" className="progress_column-center">
            <div className="text-medium">
              {"Morning"}
            </div>
            <div className="progress_bar-wrap">
              <div className="progress_bar w-variant-b19c1a79-2fec-e46a-b330-ee93fa5ea7df"></div>
            </div>
          </div>
          <div className="progress_column-right">
            <div className="text-size-small text-uppercase text-style-muted">
              {"Time"}
            </div>
            <div className="text-medium">
              {"8:00 AM"}
            </div>
          </div>
        </div>
        <div {...{ "scroll": "up" }} className="progress_card">
          <div className="progress_column-left">
            <div className="text-style-h6">
              {"Opening heats"}
            </div>
            <div className="text-style-muted">
              {"First rounds begin"}
            </div>
          </div>
          <div data-wf--progress-bar--variant="50" className="progress_column-center">
            <div className="text-medium">
              {"Morning"}
            </div>
            <div className="progress_bar-wrap">
              <div className="progress_bar w-variant-ef73de66-5311-1a42-c5c6-fb4b51adb890"></div>
            </div>
          </div>
          <div className="progress_column-right">
            <div className="text-size-small text-uppercase text-style-muted">
              {"Time"}
            </div>
            <div className="text-medium">
              {"9:00 AM"}
            </div>
          </div>
        </div>
        <div {...{ "scroll": "up" }} className="progress_card">
          <div className="progress_column-left">
            <div className="text-style-h6">
              {"Team relays"}
            </div>
            <div className="text-style-muted">
              {"Team competition begins"}
            </div>
          </div>
          <div data-wf--progress-bar--variant="75" className="progress_column-center">
            <div className="text-medium">
              {"Afternoon"}
            </div>
            <div className="progress_bar-wrap">
              <div className="progress_bar w-variant-603e83fe-f6ec-4f7c-8e51-6bfdedae4963"></div>
            </div>
          </div>
          <div className="progress_column-right">
            <div className="text-size-small text-uppercase text-style-muted">
              {"Time"}
            </div>
            <div className="text-medium">
              {"1:00 PM"}
            </div>
          </div>
        </div>
        <div {...{ "scroll": "up" }} className="progress_card">
          <div className="progress_column-left">
            <div className="text-style-h6">
              {"Finals and awards"}
            </div>
            <div className="text-style-muted">
              {"Last heats and podiums"}
            </div>
          </div>
          <div data-wf--progress-bar--variant="90" className="progress_column-center">
            <div className="text-medium">
              {"Afternoon"}
            </div>
            <div className="progress_bar-wrap">
              <div className="progress_bar w-variant-5639b7fe-5606-5b86-c1a7-3be54008462a"></div>
            </div>
          </div>
          <div className="progress_column-right">
            <div className="text-size-small text-uppercase text-style-muted">
              {"Time"}
            </div>
            <div className="text-medium">
              {"4:00 PM"}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
