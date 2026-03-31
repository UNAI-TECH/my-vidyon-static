import { CinematicHero } from "./ui/cinematic-hero";

export const HeroSection = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <CinematicHero
        brandName="My Vidyon"
        tagline1="India's First"
        tagline2="All in one ERP"
        tagline3=""
        cardHeading={
          <>
            India's First <span className="text-[#f59e0b]">All in one ERP</span>
          </>
        }
        cardDescription={
          <>
            <span className="text-foreground font-semibold">My Vidyon</span> empowering institutions with structured management, precise tracking, and beautiful visual insights.
          </>
        }
        metricValue={100}
        metricLabel="% Efficiency"
        ctaHeading="Scale Your Institution."
        ctaDescription="Join leading educational institutions and take control of your digital transformation today."
      />
    </div>
  );
};

export default HeroSection;

