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
  Twitter,
  GraduationCap,
  BookOpen,
  PieChart,
  ShieldCheck,
  CreditCard,
  Building
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

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
  const devices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const wave = ["translate-y-24", "translate-y-12", "translate-y-0", "translate-y-12"];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center pb-20 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 md:gap-8 px-4 w-max pr-[50vw]">
          {devices.map((i, idx) => (
            <div
              key={idx}
              className={cn(
                "w-40 md:w-64 h-[333px] md:h-[500px] flex-shrink-0 bg-muted rounded-[2.5rem] overflow-hidden border shadow-2xl transition-transform duration-300",
                wave[idx % wave.length]
              )}
            >
              <img 
                src={`/assets/images/mockups/marquee-${((i - 1) % 5) + 1}.png`} 
                alt={`My Vidyon App ${i}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

const FeatureHighlight = () => {
  const features = [
    {
      title: "Comprehensive Institutional Control",
      description: "Manage admissions, academics, and administration from a single, unified, and intuitive dashboard.",
      image: "/assets/images/mockups/feature-1.png",
      reverse: true
    },
    {
      title: "Seamless Communication",
      description: "Bridge the gap between educators, students, and parents with real-time updates and notifications.",
      image: "/assets/images/mockups/feature-2.png",
      reverse: false
    },
    {
      title: "Advanced Analytics & Reporting",
      description: "Utilize data-driven insights to monitor institutional performance and ensure student success.",
      image: "/assets/images/mockups/feature-3.png",
      reverse: true
    }
  ];

  return (
    <section className="py-32 container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Features</h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Everything you need on mobile</h3>
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
              <Button size="lg" className="rounded-full px-8">Discover Module</Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="max-w-[300px] w-full aspect-[9/19] bg-muted rounded-[3rem] overflow-hidden border-8 border-muted-foreground/10 shadow-2xl">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
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
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Your Campus, Digitized</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="md:col-span-2 rounded-[2rem] overflow-hidden bg-muted border-none">
            <CardContent className="p-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">Centralized Data Management</h4>
                <p className="text-muted-foreground">My Vidyon unifies all campus operations into one cohesive ecosystem, eliminating scattered spreadsheets securely and reducing administrative overhead by 40%.</p>
              </div>
              <div className="flex-1 w-full h-64 bg-background/50 rounded-2xl overflow-hidden">
                <img src="/assets/images/mockups/bento-1.png" alt="Centralized Data" className="w-full h-full object-cover" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] overflow-hidden bg-muted border-none">
            <CardContent className="p-8 flex flex-col h-full">
              <h4 className="text-2xl font-bold mb-4">Financial Automation</h4>
              <p className="text-muted-foreground mb-8">Automate fee collections, send custom reminders, and handle complex accounting without manual intervention.</p>
              <div className="mt-auto h-48 bg-background/50 rounded-2xl overflow-hidden">
                <img src="/assets/images/mockups/bento-2.png" alt="Financial Management" className="w-full h-full object-cover" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] overflow-hidden bg-muted border-none">
            <CardContent className="p-8 flex flex-col h-full">
              <h4 className="text-2xl font-bold mb-4">Smart Timetabling</h4>
              <p className="text-muted-foreground mb-8">Eliminate scheduling conflicts effortlessly with our AI-assisted routine and calendar generation for staff and students.</p>
              <div className="mt-auto h-48 bg-background/50 rounded-2xl overflow-hidden">
                <img src="/assets/images/mockups/bento-3.png" alt="Smart Timetabling" className="w-full h-full object-cover" />
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
    { name: "Dr. Ananya Sharma", role: "School Principal", text: "My Vidyon has transformed how our school operates. The administrative burden is gone, and teachers can finally focus completely on teaching.", avatar: "/assets/images/avatars/user-1.jpg" },
    { name: "Rahul Verma", role: "IT Administrator", text: "The migration process was frictionless. Having all our databases strictly unified in one digital infrastructure has cut our IT tickets down by 70%.", avatar: "/assets/images/avatars/user-2.jpg" },
    { name: "Sneha Patel", role: "Parent", text: "I love having the mobile app. I instantly receive notifications about my child's attendance and fee deadlines without checking my emails.", avatar: "/assets/images/avatars/user-3.jpg" },
    { name: "Vikram Singh", role: "Finance Director", text: "Fee collection used to be a nightmare of physical ledgers. My Vidyon automated everything and the reports are flawless.", avatar: "/assets/images/avatars/user-4.jpg" },
    { name: "Meera Reddy", role: "Head of Academics", text: "Tracking student progress across multiple departments has never been this simple. The analytics dashboard is phenomenal.", avatar: "/assets/images/avatars/user-5.jpg" },
    { name: "Sunil Kumar", role: "University Trustee", text: "My Vidyon scales incredibly well. Bringing 5,000+ students and staff into the digital ecosystem was extremely smooth.", avatar: "/assets/images/avatars/user-6.jpg" },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Trusted by Educators</h3>
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
                {/* Fallback to initials if image path is broken/missing initially */}
                <div className="w-12 h-12 rounded-full mr-4 bg-primary text-primary-foreground flex items-center justify-center font-bold relative overflow-hidden">
                  <span className="absolute z-0">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover relative z-10" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
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
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Choose your campus plan</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-10 rounded-[2.5rem] border-none bg-background shadow-xl">
            <h4 className="text-2xl font-bold mb-2">Standard</h4>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-bold text-primary">Core</span>
            </div>
            <p className="text-muted-foreground mb-8">Perfect for small to medium schools</p>
            <ul className="space-y-4 mb-10">
              {["Admissions Management", "Basic Timetabling & Attendance", "Student & Teacher Portal", "Standard Email Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full py-6 text-lg" variant="outline">Consult Sales</Button>
          </Card>

          <Card className="p-10 rounded-[2.5rem] border-none bg-primary text-primary-foreground shadow-2xl scale-105">
            <h4 className="text-2xl font-bold mb-2">Enterprise</h4>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-bold">Pro</span>
            </div>
            <p className="opacity-70 mb-8">Ideal for universities and large tech-driven institutions</p>
            <ul className="space-y-4 mb-10">
              {["Full Custom ERP Modules", "Advanced Transport & Hostel tracking", "API Access & Integrations", "Dedicated Account Manager", "Priority 24/7 Telephone Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full py-6 text-lg bg-background text-primary hover:bg-background/90">Request Demo</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How secure is the My Vidyon platform?", a: "Extremely secure. We use bank-grade AES-256 encryption for your institutional data, ensuring that sensitive information like student records and financial data is strictly protected and fully compliant with privacy regulations." },
    { q: "Can we integrate My Vidyon with our existing tools?", a: "Yes. My Vidyon offers extensive API access and native integrations with popular learning management systems (LMS), accounting software, and modern communication gateways." },
    { q: "Do parents also get access to the system?", a: "Absolutely. The My Vidyon mobile app provides dedicated portal views tailored for parents, students, teachers, and admins—so parents can track attendance, grades, and fees seamlessly." },
    { q: "How long does the implementation take?", a: "Implementation typically ranges from 1 to 4 weeks depending on the size of your institution and the complexity of your existing data, with full onboarding support from our expert team." },
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
                <span key={i} className="text-6xl font-bold mx-8">MY VIDYON • SMART CAMPUS • </span>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 p-6 bg-background rounded-[2rem] shadow-xl">
            <Building className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Ready to upgrade your institution?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl">Book a personalized demo and experience the future of educational management today. Join the digital revolution.</p>
          <Button size="lg" className="rounded-full px-10 py-8 text-xl group">
            Schedule a Demo
            <ChevronRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const FeatureScroll = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Mobile Experience</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Your Campus in your pocket</h3>
        </div>
        <div className="flex justify-center gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: (i - 1) * 50 }}
              viewport={{ once: true }}
              className="w-64 aspect-[9/19] bg-muted rounded-[2.5rem] overflow-hidden border shadow-xl"
            >
              <img 
                src={`/assets/images/mockups/parallax-${i}.png`} 
                alt={`App Screen ${i}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsScroll = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const benefits = [
    { title: "Empower teachers with digital grading and instant attendance.", image: "/assets/images/mockups/benefit-1.png" },
    { title: "Give parents unprecedented visibility into student success.", image: "/assets/images/mockups/benefit-2.png" },
    { title: "Optimize transport routes and hostel allocations.", image: "/assets/images/mockups/benefit-3.png" },
    { title: "Keep administrators continuously informed with live dashboards.", image: "/assets/images/mockups/benefit-4.png" },
  ];

  return (
    <section ref={targetRef} id="benefits" className="relative h-[200vh] bg-muted/50">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-10">
        <div className="container mx-auto px-4 mb-16 shrink-0">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Benefits</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">What you can do with My Vidyon</h3>
        </div>
        
        <motion.div style={{ x }} className="flex gap-6 pl-[10vw] pr-[50vw] w-max items-start">
          {benefits.map((b, i) => (
            <div key={i} className="w-[300px] md:w-[400px]">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg bg-background">
                <img src={b.image} alt={b.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold leading-tight whitespace-normal">{b.title}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const features = [
    { title: "Admissions Management", desc: "End-to-end digital paperless enrollment process.", icon: GraduationCap },
    { title: "Academics & Timetabling", desc: "Automated routing and class schedule management.", icon: Clock },
    { title: "Library Integration", desc: "Digital catalogue and book issuance tracking.", icon: BookOpen },
    { title: "Exams & Results", desc: "Generate secure report cards with advanced metrics.", icon: PieChart },
    { title: "Secure Payroll", desc: "Streamlined salary handling and staff attendance.", icon: ShieldCheck },
    { title: "Fee Collection", desc: "Automated payment gateways and due reminders.", icon: CreditCard },
  ];

  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-4">Modules</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">All-in-one ERP Platform</h3>
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
                Explore Module <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MobileMockupSection = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
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
