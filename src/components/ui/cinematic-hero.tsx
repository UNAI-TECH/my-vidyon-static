"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
    Zap,
    Target,
    Users,
    Smartphone,
    Handshake,
    ArrowRight,
    CheckCircle2,
    Book,
    ClipboardList,
    FileEdit,
    Calendar,
    FileText,
    TrendingUp,
    Award,
    Clock,
    Flame,
    Apple,
    Play
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, var(--primary) 10%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--primary) 10%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS
  ---------------------------------------------------------------------- */
  
  .text-3d-matte {
      color: var(--foreground);
      line-height: 1.3;
      padding-bottom: 0.2em;
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--primary) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--primary) 10%, transparent);
  }
  
  .text-primary-matte {
      color: hsl(var(--primary));
      line-height: 1.3;
      padding-bottom: 0.2em;
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--primary) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--primary) 10%, transparent);
  }

  .text-amber-matte {
      color: #f59e0b;
      line-height: 1.3;
      padding-bottom: 0.2em;
      background: linear-gradient(180deg, #FDE68A 0%, #D97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 10px 20px rgba(245, 158, 11, 0.25)) 
          drop-shadow(0px 2px 4px rgba(245, 158, 11, 0.1));
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in srgb, var(--foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--primary) 15%, transparent)) 
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--primary) 10%, transparent));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #FAB12F 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .premium-depth-card {
      background: linear-gradient(145deg, #FEF3E2 0%, #FFD8A8 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.2),
          0 20px 40px -20px rgba(0, 0, 0, 0.15),
          inset 0 1px 2px rgba(255, 255, 255, 0.8),
          inset 0 -2px 4px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(251, 177, 47, 0.3);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(250, 177, 47, 0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .iphone-bezel {
      background-color: #111;
      box-shadow: 
          inset 0 0 0 2px #444, 
          inset 0 0 0 7px #000, 
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow: 
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow: 
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(8px); 
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #FEF3E2 100%);
      color: #261A14;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-dark {
      background: #111111;
      color: #FFFFFF;
      box-shadow: 0 4px 20px -4px rgba(0,0,0,0.4);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: #222222;
  }
  .btn-modern-light {
      background: #FFFFFF;
      color: #111111;
      box-shadow: 0 4px 20px -4px rgba(0,0,0,0.1);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      background: #F8F8F8;
  }

  .text-primary-matte {
      color: hsl(var(--primary));
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--primary) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--primary) 10%, transparent);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }

  .launching-badge-premium {
      background: linear-gradient(135deg, rgba(251, 177, 47, 0.15) 0%, rgba(251, 177, 47, 0.05) 100%);
      border: 2px solid rgba(251, 177, 47, 0.4);
      box-shadow: 
          0 0 20px rgba(251, 177, 47, 0.15),
          inset 0 1px 1px rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      animation: badge-glow 3s infinite alternate;
  }

  @keyframes badge-glow {
      0% { box-shadow: 0 0 15px rgba(251, 177, 47, 0.1); border-color: rgba(251, 177, 47, 0.3); }
      100% { box-shadow: 0 0 30px rgba(251, 177, 47, 0.25); border-color: rgba(251, 177, 47, 0.6); }
  }

  .text-shimmer {
      background: linear-gradient(90deg, #d97706 0%, #f59e0b 25%, #fff 50%, #f59e0b 75%, #d97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 200% auto;
      animation: shimmer 4s linear infinite;
  }

  @keyframes shimmer {
      to { background-position: 200% center; }
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
    brandName?: string;
    tagline1?: React.ReactNode;
    tagline2?: React.ReactNode;
    tagline3?: React.ReactNode;
    cardHeading?: React.ReactNode;
    cardDescription?: React.ReactNode;
    metricValue?: number;
    metricLabel?: string;
    ctaHeading?: string;
    ctaDescription?: string;
    logoSrc?: string;
}

export function CinematicHero({
    brandName = "My Vidyon",
    tagline1 = "Transforming Education,",
    tagline2 = "Management Through",
    tagline3 = "Intelligent Digital Solutions",
    cardHeading = "Intelligent Digital Solutions",
    cardDescription = <><span className="text-foreground font-semibold">My Vidyon</span> empowering institutions with structured management, precise tracking, and beautiful visual insights.</>,
    metricValue = 100,
    metricLabel = "% Efficiency",
    ctaHeading = "Scale Your Institution.",
    ctaDescription = "Join leading educational institutions and take control of your digital transformation today.",
    logoSrc = "/logo.png",
    className,
    ...props
}: CinematicHeroProps) {

    const containerRef = useRef<HTMLDivElement>(null);
    const mainCardRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (window.scrollY > window.innerHeight * 2) return;

            cancelAnimationFrame(requestRef.current);

            requestRef.current = requestAnimationFrame(() => {
                if (mainCardRef.current && mockupRef.current) {
                    const rect = mainCardRef.current.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;

                    mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
                    mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

                    const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
                    const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

                    gsap.to(mockupRef.current, {
                        rotationY: xVal * 12,
                        rotationX: -yVal * 12,
                        ease: "power3.out",
                        duration: 1.2,
                    });
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        const ctx = gsap.context(() => {
            gsap.set(".hero-logo", { autoAlpha: 0, x: -60, scale: 0.85, filter: isMobile ? "none" : "blur(8px)" });
            gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: isMobile ? "none" : "blur(8px)", rotationX: -20 });
            gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
            gsap.set(".text-solutions", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
            gsap.set(".counter-val", { innerText: 0 });
            gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
            gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
            gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: isMobile ? "none" : "blur(8px)" });

            const introTl = gsap.timeline({ delay: 0.3 });
            introTl
                .to(".hero-logo", { duration: 1.8, autoAlpha: 1, x: 0, scale: 1, filter: "none", ease: "expo.out" })
                .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "none", rotationX: 0, ease: "expo.out" }, "<")
                .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.2")
                .to(".text-solutions", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

            let deltaX = 0;
            let deltaY = 0;
            let targetScale = 1;

            const calculateOffsets = () => {
                const nav = document.getElementById("nav-logo");
                const hero = document.querySelector(".hero-logo");
                if (nav && hero) {
                    const navRect = nav.getBoundingClientRect();

                    const beforeTransform = (hero as HTMLElement).style.transform;
                    (hero as HTMLElement).style.transform = "none";
                    const hNatural = hero.getBoundingClientRect();
                    (hero as HTMLElement).style.transform = beforeTransform;

                    deltaX = (navRect.left + navRect.width / 2) - (hNatural.left + hNatural.width / 2);
                    deltaY = (navRect.top + navRect.height / 2) - (hNatural.top + hNatural.height / 2);
                    targetScale = navRect.width / hNatural.width;
                }
            };
            calculateOffsets();

            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: isMobile ? "+=600" : "+=1800",
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onRefresh: calculateOffsets
                },
            });

            scrollTl
                .to(".bg-grid-theme", { scale: 1.15, filter: isMobile ? "none" : "blur(8px)", opacity: 0.2, ease: "power2.inOut", duration: isMobile ? 2.5 : 2 }, 0)
                .to([".text-track", ".text-days", ".text-solutions"], { scale: 1.5, filter: isMobile ? "none" : "blur(8px)", autoAlpha: 0, ease: "power2.inOut", duration: isMobile ? 2.5 : 2 }, 0)
                .to(".hero-logo", {
                    x: () => deltaX,
                    y: () => deltaY,
                    scale: () => targetScale,
                    ease: "power2.inOut",
                    duration: isMobile ? 3 : 3
                }, 0)
                .to(document.getElementById("nav-logo"), { opacity: 1, duration: 0.1 }, isMobile ? 3 : 3)
                .to(".hero-logo", { autoAlpha: 0, duration: 0.1 }, isMobile ? 2.5 : 3)
                .to(".main-card", { autoAlpha: 1, y: isMobile ? 0 : 0, ease: "power3.inOut", duration: isMobile ? 1.5 : 2 }, isMobile ? 0.5 : 0)
                .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: isMobile ? 2 : 1.5 })
                .fromTo(".mockup-scroll-wrapper",
                    { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
                    { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: isMobile ? 3 : 2.5 }, isMobile ? "-=0.5" : "-=0.8"
                )
                .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: isMobile ? 2 : 1.5 }, "-=1.5")
                .to(".progress-ring", { strokeDashoffset: 60, duration: isMobile ? 2.5 : 2, ease: "power3.inOut" }, "-=1.2")
                .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: isMobile ? 2.5 : 2, ease: "expo.out" }, "-=2.0")
                .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: isMobile ? 2 : 1.5, stagger: 0.2 }, "-=2.0")
                .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: isMobile ? 2 : 1.5 }, "-=1.5")
                .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: isMobile ? 2 : 1.5 }, "<")
                .to({}, { duration: 0.4 })
                .set(".hero-text-wrapper", { autoAlpha: 0 })
                .set(".cta-wrapper", { autoAlpha: 1 })
                .to({}, { duration: 0.3 })
                .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
                    scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
                })
                .to(".main-card", {
                    width: isMobile ? "92vw" : "85vw",
                    height: isMobile ? "92vh" : "85vh",
                    borderRadius: isMobile ? "32px" : "40px",
                    ease: "expo.inOut",
                    duration: 1.2
                }, "pullback")
                .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.2 }, "pullback")
                .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.0 });

        }, containerRef);

        return () => ctx.revert();
    }, [metricValue]);

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full h-screen overflow-hidden flex items-center justify-center bg-background text-foreground font-sans antialiased", className)}
            style={{ perspective: "1500px" }}
            {...props}
        >
            <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
            <div className="film-grain" aria-hidden="true" />
            <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true" />

            {/* BACKGROUND LAYER: Hero Texts */}
            <div className="hero-text-wrapper absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-start md:justify-center pt-52 md:pt-0 space-y-12 md:space-y-0 md:justify-between max-w-7xl mx-auto px-4 lg:px-12 w-full will-change-transform transform-style-3d -translate-y-8 md:-translate-y-20">
                {/* LEFT: Logo */}
                <div className="hero-logo-wrapper w-full md:w-1/2 flex justify-center md:justify-start -mt-4 md:mt-0">
                    <img
                        src={logoSrc || "/logo.png"}
                        alt="Hero Logo"
                        className="hero-logo gsap-reveal w-[150px] sm:w-[280px] md:w-[350px] lg:w-[450px] xl:w-[500px] object-contain drop-shadow-2xl"
                    />
                </div>

                {/* RIGHT: Texts */}
                <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2">
                    <h1 className="text-track gsap-reveal text-3d-matte text-[1.75rem] sm:text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight mb-2">
                        {tagline1}
                    </h1>
                    <h1 className="text-days gsap-reveal text-amber-matte text-[1.75rem] sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight mb-1">
                        {tagline2}
                    </h1>
                    {tagline3 && (
                        <h1 className="text-solutions gsap-reveal text-primary-matte text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter">
                            {tagline3}
                        </h1>
                    )}
                </div>
            </div>

            {/* BACKGROUND LAYER 2: Tactile CTA Buttons */}
            <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 gsap-reveal pointer-events-auto will-change-transform">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-3d-matte">
                    {ctaHeading}
                </h2>
                <p className="text-muted-foreground text-base md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
                    {ctaDescription}
                </p>
                <div className="mt-4 inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 rounded-full launching-badge-premium">
                    <span className="text-shimmer font-black tracking-widest text-lg md:text-3xl uppercase">
                        Launching soon...
                    </span>
                </div>
            </div>

            {/* FOREGROUND LAYER: The Physical Dark Card */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
                <div
                    ref={mainCardRef}
                    className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
                >
                    <div className="card-sheen" aria-hidden="true" />

                    {/* DYNAMIC RESPONSIVE GRID */}
                    <div className="relative w-full h-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-12 flex flex-col justify-center sm:justify-evenly gap-3 sm:gap-6 lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 pt-20 pb-8 lg:py-0 overflow-y-auto lg:overflow-visible">

                        {/* Mobile Only Heading */}
                        <div className="card-left-text lg:hidden w-full flex justify-center text-center z-20 px-2 shrink-0 order-1">
                            <h3 className="text-foreground text-[1.15rem] sm:text-2xl font-extrabold tracking-tight leading-loose px-4">
                                {cardHeading}
                            </h3>
                        </div>

                        <div className="card-right-text gsap-reveal hidden lg:flex order-1 lg:order-3 justify-center lg:justify-end z-20 w-full shrink-0">
                            {logoSrc ? (
                                <img
                                    src={logoSrc}
                                    alt={brandName}
                                    className="h-10 sm:h-16 md:h-24 lg:h-32 w-auto object-contain drop-shadow-2xl"
                                />
                            ) : (
                                <h2 className="text-4xl md:text-[4rem] lg:text-[5rem] font-black uppercase tracking-tighter text-card-silver-matte lg:mt-0 text-center lg:text-right">
                                    {brandName}
                                </h2>
                            )}
                        </div>

                        {/* IPHONE MOCKUP CONTENT */}
                        <div
                            className="mockup-scroll-wrapper order-2 lg:order-2 relative z-20 flex items-center justify-center w-full h-full max-w-[300px] sm:max-w-md mx-auto lg:pt-20"
                            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                        >
                            <div className="relative w-full h-full flex items-center justify-center transform scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-[0.82]">

                                <div
                                    ref={mockupRef}
                                    className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform transform-style-3d"
                                >
                                    {/* Physical Hardware Buttons */}
                                    <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                                    <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                                    <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                                    <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                                    <div className="iphone-mockup relative w-[280px] h-[560px] bg-neutral-900 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_20px_40px_-20px_rgba(0,0,0,0.6)] transform-style-3d border-[6px] border-neutral-800">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-neutral-900 rounded-b-2xl z-30" />
                                        <div className="absolute inset-0 bg-[#FEF3E2] rounded-[2.5rem] overflow-hidden p-4 font-sans text-xs flex flex-col">
                                            {/* Header */}
                                            <div className="flex justify-between items-center mb-6 pt-2">
                                                <div className="w-16 h-6 flex items-center">
                                                    <img src="/logo.png" alt="Vidyon" className="h-4 w-auto" />
                                                </div>
                                                <div className="w-5 h-5 bg-neutral-200 rounded flex items-center justify-center">
                                                    <div className="w-3 h-[2px] bg-neutral-600 relative">
                                                        <div className="absolute -top-1 w-3 h-[2px] bg-neutral-600" />
                                                        <div className="absolute -bottom-1 w-3 h-[2px] bg-neutral-600" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Student Card */}
                                            <div className="bg-white rounded-xl p-3 shadow-sm border border-neutral-100 mb-6 flex items-center">
                                                <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mr-3">
                                                    <div className="text-[10px] font-bold text-[#FAB12F]">S</div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-bold text-[10px]">Story seed Studio</div>
                                                    <div className="text-[8px] text-neutral-400">Student Portal</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-[8px] font-bold text-primary">STUDENT</div>
                                                    <div className="text-[6px] text-neutral-400">Class 3rd - A</div>
                                                </div>
                                            </div>
                                            {/* Welcome */}
                                            <div className="flex justify-between items-center mb-4">
                                                <div>
                                                    <div className="font-bold text-sm">Welcome, User!</div>
                                                    <div className="text-[8px] text-neutral-400">Unified Education Platform Overview</div>
                                                </div>
                                                <div className="relative">
                                                    <div className="w-4 h-4 bg-neutral-100 rounded-full" />
                                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full text-[6px] text-white flex items-center justify-center">6</div>
                                                </div>
                                            </div>
                                            {/* Tiles / Progress Component */}
                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                <div className="bg-white rounded-xl h-24 relative overflow-hidden border border-neutral-100 shadow-sm flex items-center justify-center">
                                                    <div className="relative w-16 h-16">
                                                        <svg className="w-full h-full transform -rotate-90">
                                                            <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--primary)/0.1)" strokeWidth="4" />
                                                            <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--primary))" strokeWidth="4" strokeDasharray="176" strokeDashoffset="0" className="progress-ring" />
                                                        </svg>
                                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                            <span className="counter-val text-xs font-black">{metricValue}</span>
                                                            <span className="text-[5px] font-bold text-neutral-400 uppercase tracking-tighter">Efficiency</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-[#FAB12F]/20 rounded-xl h-24 p-3 flex flex-col justify-between">
                                                    <div>
                                                        <div className="font-bold text-[10px] text-primary">Pushhh</div>
                                                        <div className="text-[8px] text-primary/70">Notification</div>
                                                    </div>
                                                    <div className="text-[6px] text-primary/60">1/4/2026</div>
                                                </div>
                                            </div>
                                            {/* Quick Services */}
                                            <div className="font-bold text-[10px] mb-3 uppercase tracking-wider text-neutral-500">Quick Services</div>
                                            <div className="grid grid-cols-3 gap-3">
                                                {[
                                                    { name: 'Attendance', icon: CheckCircle2, color: 'text-blue-500' },
                                                    { name: 'Courses', icon: Book, color: 'text-orange-500' },
                                                    { name: 'Assignments', icon: ClipboardList, color: 'text-teal-500' },
                                                    { name: 'Exams', icon: FileEdit, color: 'text-red-500' },
                                                    { name: 'Events', icon: Calendar, color: 'text-purple-500' },
                                                    { name: 'Leave', icon: FileText, color: 'text-rose-500' }
                                                ].map((item) => (
                                                    <div key={item.name} className="flex flex-col items-center gap-1">
                                                        <div className="w-10 h-10 bg-white rounded-lg border border-neutral-100 shadow-sm flex items-center justify-center">
                                                            <item.icon className={`w-5 h-5 ${item.color}`} />
                                                        </div>
                                                        <div className="text-[6px] text-center font-medium">{item.name}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div>
                        </div>

                        <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0 shrink-0 -mt-6 lg:mt-0">
                            <h3 className="hidden lg:block text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 lg:mb-5 tracking-tight leading-tight">
                                {cardHeading}
                            </h3>
                            <p className="text-foreground/80 text-xs sm:text-sm lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none px-2 lg:px-0">
                                {cardDescription}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
