import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./fonts.css";
import "./layout.css";
import "./rep.css";

export const metadata: Metadata = {
  title: "REP CLUB | Fitness Competitions Meetup",
  description: "A one-day fitness meetup for competitors, teams and their supporters.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-wf-page="6ac680a3d55e3f819a541ce9" data-wf-site="6ac680a2d55e3f819a541ce2">
      <body>{children}</body>
    </html>
  );
}
