import Navbar from "@/components/all-components/navbar";
import Hero from "@/components/all-components/hero";
import About from "@/components/all-components/about";
import CompetitionEvents from "@/components/all-components/competition-events";
import Schedule from "@/components/all-components/schedule";
import Divisions from "@/components/all-components/divisions";
import Highlights from "@/components/all-components/highlights";
import Passes from "@/components/all-components/passes";
import AthleteGuide from "@/components/all-components/athlete-guide";
import Faq from "@/components/all-components/faq";
import Venue from "@/components/all-components/venue";
import Footer from "@/components/all-components/footer";
import SiteInteractions from "@/components/all-components/site-interactions";

export default function Page() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-wrapper">
        <Hero />
        <About />
        <CompetitionEvents />
        <Schedule />
        <Divisions />
        <Highlights />
        <Passes />
        <AthleteGuide />
        <Faq />
        <Venue />
        <Footer />
      </main>
      <SiteInteractions />
    </div>
  );
}
