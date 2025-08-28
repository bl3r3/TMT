import { Navbar } from "../../components/customs/Navbar";
import { Hero } from "../../components/customs/Hero";
import { SectionAboutTMT } from "../../components/customs/Section-tmt";
import { SectionSteps } from "../../components/customs/Section-steps";
import { SectionApps } from "../../components/customs/Section-apps";
import { SectionServices } from "../../components/customs/Section-services";
import { SectionContact } from "../../components/customs/Section-contact";
import { Footer } from "../../components/customs/Footer";
import { SectionClients } from "../../components/customs/Section-clients";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionAboutTMT />
        <SectionSteps />
        <SectionApps />
        <SectionClients />
        <SectionServices />
        <SectionContact />
        <Footer />
      </main>
    </>
  );
}
