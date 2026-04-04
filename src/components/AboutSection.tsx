import { Link } from "react-router-dom";
import { ChevronRight, ScanFace, LayoutGrid, Wallet, TrendingUp, MessagesSquare, GraduationCap } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { MagicBento, MagicBentoItem } from "./ui/MagicBento";

const features: MagicBentoItem[] = [
  {
    icon: ScanFace,
    title: "Smart Attendance Monitoring",
    description: "AI-powered, camera-based attendance that captures accurate, real-time student presence and keeps parents informed instantly.",
    label: "Security",
    color: "hsl(var(--card))"
  },
  {
    icon: LayoutGrid,
    title: "Comprehensive Dashboards",
    description: "Role-based school dashboards designed for administrators, teachers, parents, and students—clear data, zero confusion.",
    label: "Overview",
    color: "hsl(var(--card))"
  },
  {
    icon: Wallet,
    title: "Secure Fee Management",
    description: "End-to-end school fee management with safe online payments, automated tracking, and complete financial transparency.",
    label: "Finance",
    color: "hsl(var(--card))"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Data-driven academic analytics that turn student performance into clear, actionable insights for better outcomes.",
    label: "Insights",
    color: "hsl(var(--card))"
  },
  {
    icon: MessagesSquare,
    title: "Parent Communication",
    description: "Multi-channel messaging system for circulars, events, and performance updates keeping parents always in the loop.",
    label: "Collaboration",
    color: "hsl(var(--card))"
  },
  {
    icon: GraduationCap,
    title: "Exam & Result Management",
    description: "Fully automated grading, result processing, and report card generation with customizable marking schemes.",
    label: "Academics",
    color: "hsl(var(--card))"
  }
];

export const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About My Vidyon
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Smart ERP Software for <span className="text-gradient">Modern Schools</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              My Vidyon is a powerful, all in one school ERP platform built to simplify academic and
              administrative management. Designed for modern schools, it brings students, teachers, parents,
              and administrators onto one secure digital system.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="text-muted-foreground leading-relaxed">
              From AI powered attendance and online fee management to student performance analytics, My
              Vidyon helps schools operate efficiently, communicate better, and make data driven decisions with
              confidence.
            </p>
          </ScrollAnimation>
        </div>

        {/* Key Features Label */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="text-center mb-8">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
              Key Features
            </span>
          </div>
        </ScrollAnimation>

        {/* Features Grid - Bento Style */}
        <div className="mt-10">
          <ScrollAnimation animation="fade-up" delay={450}>
            <MagicBento
              items={features}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              glowColor="250, 177, 47"
            />
          </ScrollAnimation>
        </div>

        {/* CTA */}
        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="text-center mt-10">
            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;