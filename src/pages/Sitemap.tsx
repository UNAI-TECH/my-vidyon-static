import Navbar from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { FileText, Users, Building2, Briefcase, MessageSquare, HelpCircle, Zap } from "lucide-react";

const sitemapSections = [
    {
        title: "Company",
        icon: Building2,
        links: [
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about" },
            { label: "Contact Us", path: "/contact" },
        ],
    },
    {
        title: "Solutions",
        icon: Zap,
        links: [
            { label: "ERP Solutions", path: "/erp-solutions" },
            { label: "Attendance System", path: "/attendance-system" },
            { label: "Features", path: "/features" },
        ],
    },
    {
        title: "Support",
        icon: HelpCircle,
        links: [
            { label: "FAQ", path: "/faq" },
        ],
    },
    {
        title: "Careers",
        icon: Briefcase,
        links: [
            { label: "Careers Home", path: "/careers" },
            { label: "Job Search", path: "/careers/job-search" },
            { label: "Saved Jobs", path: "/careers/saved-jobs" },
            { label: "Access Application", path: "/careers/access-application" },
            { label: "Who We Are", path: "/careers/who-we-are" },
            { label: "Life at My Vidyon", path: "/careers/life-at-my-vidyon" },
            { label: "How We Hire", path: "/careers/how-we-hire" },
        ],
    },
];

const Sitemap = () => {
    return (
        <main className="min-h-screen">
            <SEO
                title="Sitemap - Navigate My Vidyon"
                description="Complete sitemap of My Vidyon website. Find all pages including ERP solutions, attendance system, features, careers, support, and contact information."
                keywords="sitemap, site navigation, My Vidyon pages, website map, school ERP sitemap"
                imageAlt="My Vidyon Sitemap - Complete Website Navigation"
            />
            <Navbar />
            <Breadcrumb />

            {/* Hero */}
            <section className="pt-28 pb-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero" />

                <div className="container-custom relative text-center">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        Site Navigation
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Sitemap</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Find all pages and resources on My Vidyon website
                    </p>
                </div>
            </section>

            {/* Sitemap Grid */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sitemapSections.map((section, index) => (
                            <div key={index} className="card-elevated p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <section.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="font-heading font-bold text-lg">{section.title}</h2>
                                </div>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                to={link.path}
                                                className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground text-sm">
                            Can't find what you're looking for?{" "}
                            <Link to="/contact" className="text-primary hover:underline font-medium">
                                Contact us
                            </Link>
                            {" "}for assistance.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Sitemap;
