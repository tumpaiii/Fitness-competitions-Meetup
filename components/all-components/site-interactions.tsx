"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import trainingFloor from "@/assets/images/training-floor.jpg";
import boxingDrills from "@/assets/images/boxing-drills.jpg";
import trackRunner from "@/assets/images/track-runner.jpg";
import barbellFloor from "@/assets/images/barbell-floor.jpg";

interface SiteInteractionsProps {
  className?: string;
}

const frames = [
  { image: trainingFloor, alt: "Athlete doing a push-up on the training floor" },
  { image: boxingDrills, alt: "Athletes practicing boxing drills" },
  { image: trackRunner, alt: "Runner training outdoors" },
  { image: barbellFloor, alt: "Barbells arranged on a gym floor" },
];

let runtime: Promise<void> | undefined;

function loadRuntime() {
  runtime ??= ["jquery", "gsap", "split-text", "scroll-trigger", "webflow-chunk", "webflow"].reduce(
    (previous, name) => previous.then(() => new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "/runtime/" + name + ".js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Could not load " + name));
      document.body.append(script);
    })),
    Promise.resolve(),
  );
  return runtime;
}

export default function SiteInteractions({ className }: SiteInteractionsProps) {
  const [frame, setFrame] = useState(0);
  const [pass, setPass] = useState("Athlete pass");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    void loadRuntime().catch(console.error);

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest<HTMLElement>("[data-highlight], [data-pass]");
      if (!trigger) return;
      event.preventDefault();

      if (trigger.hasAttribute("data-highlight")) {
        setFrame(0);
        setPlaying(true);
        document.querySelector<HTMLDialogElement>("#highlight-dialog")?.showModal();
      } else {
        setPass(trigger.dataset.pass === "spectator" ? "Spectator pass" : "Athlete pass");
        document.querySelector<HTMLDialogElement>("#pass-dialog")?.showModal();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setFrame((current) => (current + 1) % frames.length), 1900);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div className={cn("site-interactions", className)}>
      <dialog id="highlight-dialog" aria-label="Competition highlights" onClose={() => setPlaying(false)}>
        <form method="dialog"><Button type="submit">Close</Button></form>
        <img src={frames[frame].image.src} alt={frames[frame].alt} />
      </dialog>
      <dialog id="pass-dialog" aria-labelledby="pass-title">
        <form method="dialog"><Button type="submit">Close</Button></form>
        <h2 id="pass-title">{pass}</h2>
        <p>Registration opens once the date and venue are confirmed.</p>
        <a href="#divisions" onClick={(event) => event.currentTarget.closest("dialog")?.close()}>Explore divisions</a>
      </dialog>
    </div>
  );
}
