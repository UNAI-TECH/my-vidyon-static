import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
    Users,
    GraduationCap,
    TrendingUp,
    Calendar,
    CheckCircle2,
    ShieldCheck,
    BookOpen,
    Clock
} from "lucide-react";
import "./AboutHero3D.css";

const AboutHero3D = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mainCardRef = useRef<HTMLDivElement>(null);
    const floatingElementsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial reveal
            gsap.from(".hero-3d-layer", {
                opacity: 0,
                y: 50,
                z: -100,
                stagger: 0.2,
                duration: 1.5,
                ease: "expo.out"
            });

            // Continuous floating animation
            gsap.to(".floating-card", {
                y: "-=15",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                stagger: {
                    each: 0.5,
                    from: "random"
                }
            });

            // Subtle rotation / Parallax on mouse move
            const handleMouseMove = (e: MouseEvent) => {
                if (!containerRef.current) return;
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                const xPos = (clientX / innerWidth - 0.5) * 20;
                const yPos = (clientY / innerHeight - 0.5) * 20;

                gsap.to(floatingElementsRef.current, {
                    rotationY: xPos,
                    rotationX: -yPos,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="about-hero-3d-container">
            <div ref={floatingElementsRef} className="about-hero-3d-inner">
                {/* Back Layer: Decorative Glow */}
                <div className="hero-3d-layer glow-layer" />

                {/* Main Card: Core Platform */}
                <div ref={mainCardRef} className="hero-3d-layer main-card-3d floating-card">
                    <div className="card-glass-content">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                                <ShieldCheck className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-foreground">Secure Core</h4>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Platform Stability</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-primary rounded-full" />
                            </div>
                            <div className="flex justify-between text-[10px] font-bold">
                                <span>Efficiency Rate</span>
                                <span className="text-primary">85%</span>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-background/50 border border-primary/10">
                                <Users className="w-4 h-4 text-primary mb-2" />
                                <div className="text-lg font-black text-foreground line-clamp-1">50K+</div>
                                <div className="text-[8px] text-muted-foreground uppercase font-bold">Students</div>
                            </div>
                            <div className="p-3 rounded-xl bg-background/50 border border-primary/10">
                                <GraduationCap className="w-4 h-4 text-primary mb-2" />
                                <div className="text-lg font-black text-foreground line-clamp-1">500+</div>
                                <div className="text-[8px] text-muted-foreground uppercase font-bold">Schools</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Module: Attendance */}
                <div className="hero-3d-layer floating-card module-attendance">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                            <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-foreground">Attendance</div>
                            <div className="text-[8px] text-muted-foreground">98.2% Present Today</div>
                        </div>
                    </div>
                </div>

                {/* Floating Module: Schedule */}
                <div className="hero-3d-layer floating-card module-schedule">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                            <Calendar className="text-amber-500 w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-foreground">Live Sessions</div>
                            <div className="text-[8px] text-muted-foreground">12 Active Now</div>
                        </div>
                    </div>
                </div>

                {/* Orbiting Icons */}
                <div className="hero-3d-layer orbit-icon icon-1">
                    <TrendingUp className="text-primary w-6 h-6" />
                </div>
                <div className="hero-3d-layer orbit-icon icon-2">
                    <BookOpen className="text-orange-400 w-6 h-6" />
                </div>
                <div className="hero-3d-layer orbit-icon icon-3">
                    <Clock className="text-amber-600 w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default AboutHero3D;
