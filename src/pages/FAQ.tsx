import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
    {
        category: "General",
        questions: [
            {
                question: "How long does implementation take?",
                answer: "Typical implementation takes 2-4 weeks depending on the size of your institution and the modules selected. We work closely with your team to ensure a smooth transition with minimal disruption to daily operations.",
            },
            {
                question: "Do you offer training?",
                answer: "Yes! We provide comprehensive on-site and online training for administrators, teachers, and staff at no extra cost. Our training includes hands-on sessions, video tutorials, and ongoing support to ensure everyone is comfortable using the system.",
            },
            {
                question: "Can I try before I buy?",
                answer: "Absolutely. We offer a 30-day free trial with full access to all features. No credit card required. This gives you ample time to explore the platform and see how it fits your institution's needs.",
            },
            {
                question: "What makes My Vidyon different from other school ERP systems?",
                answer: "My Vidyon stands out with its AI-powered attendance system, intuitive user interface, mobile-first design, and exceptional customer support. We focus on reducing administrative workload while improving parent engagement and student outcomes.",
            },
            {
                question: "Which types of educational institutions can use My Vidyon?",
                answer: "My Vidyon is designed for K-12 schools, colleges, universities, coaching centers, and training institutes of all sizes - from small schools with 100 students to large institutions with 10,000+ students.",
            },
        ],
    },
    {
        category: "Technical",
        questions: [
            {
                question: "What about data migration?",
                answer: "Our team handles complete data migration from your existing systems. We support imports from Excel, CSV, and most major ERP platforms. We ensure data integrity and accuracy throughout the migration process.",
            },
            {
                question: "Is my data secure?",
                answer: "Yes, security is our top priority. We use bank-level encryption (AES-256), regular security audits, automated backups, and comply with international data protection standards including GDPR and ISO 27001.",
            },
            {
                question: "What are the system requirements?",
                answer: "My Vidyon is cloud-based and works on any modern web browser (Chrome, Firefox, Safari, Edge). We also offer native mobile apps for iOS and Android. No special hardware or software installation is required.",
            },
            {
                question: "What is your uptime guarantee?",
                answer: "We guarantee 99.9% uptime with our cloud infrastructure hosted on enterprise-grade servers. We have redundant systems, automatic failover, and 24/7 monitoring to ensure your data is always accessible.",
            },
            {
                question: "Do you provide API access?",
                answer: "Yes, we provide a comprehensive REST API with detailed documentation for custom integrations. This allows you to connect My Vidyon with your existing tools and build custom applications.",
            },
        ],
    },
    {
        category: "Pricing & Support",
        questions: [
            {
                question: "How does pricing work?",
                answer: "We offer transparent SaaS pricing based on the number of students and modules selected. There are no hidden fees, setup charges, or long-term contracts. You can upgrade, downgrade, or cancel anytime.",
            },
            {
                question: "What kind of support do you provide?",
                answer: "We provide 24/7 email and chat support, with phone support available during business hours. Premium plans include dedicated account managers and priority support with guaranteed response times.",
            },
            {
                question: "Can I customize the platform?",
                answer: "Yes! My Vidyon is highly customizable. You can configure workflows, create custom fields, design reports, and even white-label the platform with your institution's branding, logo, and colors.",
            },
            {
                question: "Are there any additional costs?",
                answer: "Our pricing is all-inclusive with no hidden fees. The only additional costs might be for SMS credits (if you choose to send SMS notifications) or advanced customization requests beyond standard configuration.",
            },
            {
                question: "Do you offer discounts for multiple years?",
                answer: "Yes, we offer attractive discounts for annual subscriptions and multi-year commitments. Contact our sales team for custom pricing based on your institution's needs.",
            },
        ],
    },
    {
        category: "Features",
        questions: [
            {
                question: "Does it work offline?",
                answer: "Yes, our mobile apps support offline mode for attendance marking and basic data viewing. Changes sync automatically when you're back online, ensuring uninterrupted operation even in areas with poor connectivity.",
            },
            {
                question: "Can parents access the system?",
                answer: "Absolutely! Parents get their own portal and mobile app where they can view attendance, grades, assignments, fee status, and communicate with teachers. They receive real-time notifications about their child's activities.",
            },
            {
                question: "Do you integrate with other tools?",
                answer: "Yes, we offer integrations with popular tools like Google Workspace, Microsoft 365, Zoom, payment gateways, SMS providers, and more. We also provide a REST API for custom integrations.",
            },
            {
                question: "Can I generate custom reports?",
                answer: "Yes, My Vidyon includes a powerful report builder that lets you create custom reports with drag-and-drop simplicity. Export reports in PDF, Excel, or CSV formats with one click.",
            },
            {
                question: "Does the system support multiple languages?",
                answer: "Yes, My Vidyon supports multiple languages including English, Hindi, Tamil, and more. You can switch languages based on user preference, making it accessible to diverse communities.",
            },
        ],
    },
    {
        category: "Implementation & Training",
        questions: [
            {
                question: "What is included in the implementation process?",
                answer: "Our implementation includes system setup, data migration, customization, staff training, testing, and go-live support. We assign a dedicated implementation manager to guide you through every step.",
            },
            {
                question: "How much training is provided?",
                answer: "We provide unlimited training during the first 3 months, including live sessions, recorded videos, user manuals, and ongoing support. We train administrators, teachers, staff, and even parents on how to use the system effectively.",
            },
            {
                question: "Can you help with change management?",
                answer: "Yes, we understand that adopting new technology can be challenging. Our team provides change management support, communication templates, and best practices to help your institution transition smoothly.",
            },
            {
                question: "What happens after go-live?",
                answer: "After go-live, you get continuous support, regular product updates, access to new features, and ongoing training resources. We're committed to your long-term success.",
            },
        ],
    },
    {
        category: "Data & Privacy",
        questions: [
            {
                question: "Where is my data stored?",
                answer: "Your data is stored in secure, enterprise-grade data centers with multiple redundancies. You can choose your preferred data center location based on your country's data residency requirements.",
            },
            {
                question: "Can I export my data?",
                answer: "Yes, you own your data and can export it anytime in standard formats (CSV, Excel, JSON). There are no lock-in restrictions - you have complete control over your information.",
            },
            {
                question: "How often is data backed up?",
                answer: "We perform automated backups every 6 hours with 30-day retention. You can also request manual backups anytime. All backups are encrypted and stored in geographically distributed locations.",
            },
            {
                question: "Are you GDPR compliant?",
                answer: "Yes, My Vidyon is fully GDPR compliant. We have data processing agreements, privacy controls, consent management, and the right to be forgotten built into the platform.",
            },
        ],
    },
];


import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
    const siteUrl = 'https://www.myvidyon.com';

    // Generate FAQ schema from the faqs array
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.flatMap(category =>
            category.questions.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        )
    };

    return (
        <main className="min-h-screen">
            <SEO
                title="Frequently Asked Questions"
                description="Find answers to common questions about My Vidyon ERP, implementation, pricing, and support. We are transparent about our services."
                keywords="school ERP FAQ, educational software questions, ERP implementation, school management pricing, ERP support"
                imageAlt="My Vidyon FAQ - Common Questions Answered"
            />

            {/* FAQ Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero" />

                <div className="container-custom relative text-center">
                    <ScrollAnimation animation="fade-up">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <HelpCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Help Center
                            </span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={100}>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={200}>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Find answers to common questions about My Vidyon. Can't find what you're looking for?
                            Feel free to <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {faqs.map((category, categoryIndex) => (
                            <ScrollAnimation key={categoryIndex} animation="fade-up" delay={categoryIndex * 100}>
                                <div>
                                    {/* Category Header */}
                                    <div className="mb-6">
                                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                                            {category.category}
                                        </h2>
                                        <div className="h-1 w-20 bg-gradient-primary rounded-full mt-3" />
                                    </div>

                                    {/* Questions */}
                                    <div className="space-y-4">
                                        {category.questions.map((faq, index) => (
                                            <ScrollAnimation
                                                key={index}
                                                animation="fade-up"
                                                delay={categoryIndex * 100 + index * 50}
                                            >
                                                <div className="card-elevated p-6 hover:shadow-lg transition-shadow duration-300">
                                                    <h3 className="font-heading font-semibold text-lg mb-3 flex items-start gap-3">
                                                        <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                        <span>{faq.question}</span>
                                                    </h3>
                                                    <p className="text-muted-foreground leading-relaxed ml-8">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </ScrollAnimation>
                                        ))}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container-custom">
                    <ScrollAnimation animation="fade-up">
                        <div className="max-w-3xl mx-auto text-center card-elevated p-8 md:p-12">
                            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                                Still Have Questions?
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Our team is here to help! Reach out to us and we'll get back to you within 24 hours.
                            </p>
                            <Link to="/contact" className="btn-cta inline-flex">
                                Contact Support
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FAQ;
