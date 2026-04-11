/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Calendar, 
  Check, 
  ChevronRight, 
  Clock, 
  Cloud, 
  Users, 
  Bell, 
  Brain, 
  HeartHandshake,
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Instagram,
  Twitter
} from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur border-b">
      <div className="flex justify-between items-center container mx-auto p-4">
        <a href="/" className="flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl tracking-tighter">Cal AI</span>
        </a>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Benefits</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          <Button size="sm" className="rounded-full px-6">Get Started</Button>
        </nav>

        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background border-b p-4 space-y-4 flex flex-col"
        >
          <a href="#features" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#benefits" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Benefits</a>
          <a href="#pricing" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#faq" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <Button className="w-full rounded-full">Get Started</Button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  const devices = [1, 2, 3, 4, 5];
  const duplicatedDevices = [...devices, ...devices, ...devices];

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center justify-center p-4 bg-primary text-white rounded-3xl shadow-xl"
        >
          <Calendar className="w-10 h-10" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
        >
          Smart scheduling <br /> powered by AI.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl mb-10 text-muted-foreground font-medium"
        >
          Cal AI transforms your speech into text instantly. Perfect for quick note-taking, content creation, and capturing ideas on-the-go.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <img src="https://picsum.photos/seed/appstore/160/48" alt="App Store" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/googleplay/160/48" alt="Google Play" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" referrerPolicy="no-referrer" />
        </motion.div>

        <div className="relative flex justify-center overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-8 w-max"
            animate={{
              x: ["0%", "-33.33%"]
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {duplicatedDevices.map((i, idx) => (
              <div
                key={idx}
                className={cn(
                  "w-40 md:w-64 h-[333px] md:h-[500px] flex-shrink-0 bg-muted rounded-[2.5rem] overflow-hidden border shadow-2xl",
                  i === 3 ? "translate-y-0" : (i === 2 || i === 4 ? "translate-y-12" : "translate-y-24")
                )}
              >
                <img 
                  src={`https://picsum.photos/seed/calai-${i}/400/800`} 
                  alt={`Device ${i}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

const FeatureHighlight = () => {
  const features = [
    {
      title: "AI-Powered Scheduling",
      description: "Intelligent scheduling that learns your preferences and optimizes your time.",
      image: "https://picsum.photos/seed/feature1/600/1200",
      reverse: true
    },
    {
      title: "Smart Time Blocking",
      description: "Automatically block time for focused work and personal activities.",
      image: "https://picsum.photos/seed/feature2/600/1200",
      reverse: false
    },
    {
      title: "Predictive Event Planning",
      description: "AI suggests optimal times for meetings and events based on your habits.",
      image: "https://picsum.photos/seed/feature3/600/1200",
      reverse: true
    }
  ];

  return (
    <section className="py-32 container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Features</h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Powerful features</h3>
      </div>

      <div className="space-y-32">
        {features.map((f, i) => (
          <div key={i} className={cn("flex flex-col lg:flex-row items-center justify-between gap-12", f.reverse && "lg:flex-row-reverse")}>
            <motion.div 
              initial={{ opacity: 0, x: f.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h4 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">{f.title}</h4>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">{f.description}</p>
              <Button size="lg" className="rounded-full px-8">Get Started</Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="max-w-[300px] w-full aspect-[9/19] bg-muted rounded-[3rem] overflow-hidden border-8 border-muted-foreground/10 shadow-2xl">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Benefits</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">It does a lot of things</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="md:col-span-2 rounded-[2rem] overflow-hidden bg-muted border-none">
            <CardContent className="p-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">AI-Powered Scheduling</h4>
                <p className="text-muted-foreground">Our app uses advanced AI to optimize your calendar, suggesting the best times for meetings and tasks based on your preferences and habits.</p>
              </div>
              <div className="flex-1 w-full h-64 bg-background/50 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/bento1/800/400" alt="Scheduling" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] overflow-hidden bg-muted border-none">
            <CardContent className="p-8 flex flex-col h-full">
              <h4 className="text-2xl font-bold mb-4">Smart Time Blocking</h4>
              <p className="text-muted-foreground mb-8">Automatically block out time for focused work, breaks, and personal activities.</p>
              <div className="mt-auto h-48 bg-background/50 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/bento2/400/400" alt="Time Blocking" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] overflow-hidden bg-muted border-none">
            <CardContent className="p-8 flex flex-col h-full">
              <h4 className="text-2xl font-bold mb-4">Intelligent Reminders</h4>
              <p className="text-muted-foreground mb-8">Receive context-aware notifications that adapt to your schedule.</p>
              <div className="mt-auto h-48 bg-background/50 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/bento3/400/400" alt="Reminders" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Alice Johnson", role: "Freelance Designer", text: "Cal AI has revolutionized how I manage my time. It's like having a personal assistant.", avatar: "https://i.pravatar.cc/150?u=alice" },
    { name: "Bob Brown", role: "Project Manager", text: "The AI-powered scheduling has significantly reduced conflicts in our team's calendar.", avatar: "https://i.pravatar.cc/150?u=bob" },
    { name: "Charlie Davis", role: "Entrepreneur", text: "The smart time blocking feature has helped me maintain a better work-life balance.", avatar: "https://i.pravatar.cc/150?u=charlie" },
    { name: "Diana Evans", role: "Marketing Director", text: "Cal AI's predictive planning has made my workweek so much more efficient.", avatar: "https://i.pravatar.cc/150?u=diana" },
    { name: "Ethan Ford", role: "Software Lead", text: "The team collaboration features have streamlined our project management process.", avatar: "https://i.pravatar.cc/150?u=ethan" },
    { name: "Fiona Grant", role: "HR Manager", text: "Cal AI has helped me balance my work and personal commitments effortlessly.", avatar: "https://i.pravatar.cc/150?u=fiona" },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">What our users say</h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid bg-muted/50 p-8 rounded-[2rem] border"
            >
              <div className="flex items-center mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" referrerPolicy="no-referrer" />
                <div>
                  <h5 className="font-bold">{t.name}</h5>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed italic">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Pricing</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Simple pricing</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-10 rounded-[2.5rem] border-none bg-background shadow-xl">
            <h4 className="text-2xl font-bold mb-2">Basic</h4>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-bold text-primary">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">Perfect for individual users</p>
            <ul className="space-y-4 mb-10">
              {["AI-powered scheduling (up to 10 events/month)", "Basic time blocking", "Cloud sync for 1 device", "Email reminders"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full py-6 text-lg" variant="outline">Get Started</Button>
          </Card>

          <Card className="p-10 rounded-[2.5rem] border-none bg-primary text-primary-foreground shadow-2xl scale-105">
            <h4 className="text-2xl font-bold mb-2">Pro</h4>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-bold">$12</span>
              <span className="opacity-70">/month</span>
            </div>
            <p className="opacity-70 mb-8">Ideal for professionals and small teams</p>
            <ul className="space-y-4 mb-10">
              {["Unlimited AI-powered scheduling", "Advanced time blocking and analysis", "Cloud sync for unlimited devices", "Smart notifications", "Team collaboration features"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full py-6 text-lg bg-background text-primary hover:bg-background/90">Get Started</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How does AI improve my scheduling?", a: "Our AI analyzes your scheduling patterns, preferences, and productivity data to suggest optimal times for tasks and meetings. It learns from your behavior to continuously improve its recommendations." },
    { q: "Can I integrate Cal AI with other apps?", a: "Yes, Cal AI integrates with popular productivity tools and calendar apps. You can sync with Google Calendar, Outlook, and more to centralize your scheduling." },
    { q: "How does the team collaboration feature work?", a: "Team collaboration allows you to share availability, schedule group meetings, and coordinate tasks. The AI considers everyone's schedules to find the best times for team activities." },
    { q: "Is my data secure with Cal AI?", a: "We take data security seriously. All your calendar data is encrypted end-to-end and stored securely in the cloud. We never share your personal information or scheduling data with third parties." },
  ];

  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Frequently Asked Questions</h3>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b py-4">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pt-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 container mx-auto px-4">
      <div className="relative bg-muted rounded-[3rem] p-12 md:p-24 overflow-hidden text-center border shadow-2xl">
        {/* Background Marquee Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none rotate-12 scale-150">
          {[1, 2, 3].map((row) => (
            <div key={row} className="flex whitespace-nowrap animate-marquee py-4">
              {Array(10).fill(0).map((_, i) => (
                <span key={i} className="text-6xl font-bold mx-8">CAL AI • SMART SCHEDULING • </span>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 p-6 bg-background rounded-[2rem] shadow-xl">
            <HeartHandshake className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Stop wasting time on design.</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl">Start your 7-day free trial. No credit card required. Experience the future of scheduling today.</p>
          <Button size="lg" className="rounded-full px-10 py-8 text-xl group">
            Get Started
            <ChevronRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl tracking-tighter">Cal AI</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
          <ul className="flex gap-8">
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
          <p>© 2026 Cal AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FeatureScroll = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Experience</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">An app unlike any other</h3>
        </div>
        <div className="flex justify-center gap-8">
          {[6, 7, 8].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: (i - 6) * 50 }}
              viewport={{ once: true }}
              className="w-64 aspect-[9/19] bg-muted rounded-[2.5rem] overflow-hidden border shadow-xl"
            >
              <img 
                src={`https://picsum.photos/seed/calai-${i}/400/800`} 
                alt={`Device ${i}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsScroll = () => {
  const benefits = [
    { title: "Save hours each week with AI-optimized scheduling.", image: "https://picsum.photos/seed/ben1/600/800" },
    { title: "Reduce scheduling conflicts and double-bookings.", image: "https://picsum.photos/seed/ben2/600/800" },
    { title: "Improve work-life balance with smart time allocation.", image: "https://picsum.photos/seed/ben3/600/800" },
    { title: "Increase productivity with AI-driven insights.", image: "https://picsum.photos/seed/ben4/600/800" },
  ];

  return (
    <section id="benefits" className="py-32 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Benefits</h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">What you can do with Cal AI</h3>
      </div>
      
      <div className="flex gap-6 overflow-x-auto pb-12 px-[10vw] no-scrollbar snap-x">
        {benefits.map((b, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[400px] snap-start">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img src={b.image} alt={b.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-xl font-bold leading-tight">{b.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const features = [
    { title: "AI-Powered Scheduling", desc: "Intelligent scheduling that learns your preferences.", icon: Brain },
    { title: "Smart Time Blocking", desc: "Automatically block time for focused work.", icon: Clock },
    { title: "Predictive Planning", desc: "AI suggests optimal times based on habits.", icon: Calendar },
    { title: "Cloud Sync", desc: "Access your schedule across all devices.", icon: Cloud },
    { title: "Team Collaboration", desc: "Easily coordinate with team members.", icon: Users },
    { title: "Smart Reminders", desc: "Contextual notifications that adapt to you.", icon: Bell },
  ];

  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Features</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Powerful features</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="p-8 rounded-3xl border-none bg-muted/30 hover:bg-muted/50 transition-colors group">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">{f.title}</h4>
              <p className="text-muted-foreground mb-4">{f.desc}</p>
              <a href="#" className="text-sm font-bold text-primary flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <FeatureScroll />
        <FeatureHighlight />
        <BentoGrid />
        <BenefitsScroll />
        <FeaturesGrid />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
