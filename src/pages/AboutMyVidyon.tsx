import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Target, Users, Award, Lightbulb, Heart, Globe } from "lucide-react";

const AboutMyVidyon = () => {
    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower educational institutions with innovative technology that simplifies administration and enhances learning outcomes"
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Continuously evolving with cutting-edge features that meet the changing needs of modern education"
        },
        {
            icon: Heart,
            title: "Commitment",
            description: "Dedicated to providing exceptional support and ensuring the success of every institution we serve"
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Serving 500+ educational institutions worldwide with 99.9% uptime and reliability"
        }
    ];

    const milestones = [
        { year: "2018", event: "MyVidyon founded by UNAI TECH" },
        { year: "2020", event: "Reached 100+ institutions" },
        { year: "2022", event: "Launched advanced analytics platform" },
        { year: "2024", event: "Serving 500+ institutions globally" },
        { year: "2026", event: "Leading ERP platform for education" }
    ];

    return (
        <main className="min-h-screen">
            <SEO
                title="About MyVidyon - Leading Educational ERP Platform by UNAI TECH"
                description="Learn about MyVidyon, the leading ERP software platform for educational institutions. Developed by UNAI TECH, MyVidyon serves 500+ schools and colleges worldwide with innovative management solutions."
                keywords="about myvidyon, myvidyon company, unai tech, myvidyon history, educational erp platform, myvidyon mission, myvidyon values"
                imageAlt="About MyVidyon - Educational ERP Platform"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-primary/5 via-white to-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                            About MyVidyon
                        </h1>
                        <p className="text-lg md:text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                            <strong>MyVidyon</strong> is transforming education through innovative ERP technology.
                            Developed by <strong>UNAI TECH</strong>, MyVidyon is the trusted partner for educational
                            institutions seeking to streamline operations and enhance learning outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-8">
                            The MyVidyon Story
                        </h2>

                        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                            <p>
                                <strong>MyVidyon</strong> was founded in 2018 by <strong>UNAI TECH</strong> with a clear vision:
                                to create the most comprehensive and user-friendly ERP platform for educational institutions.
                                MyVidyon was born from the recognition that schools and colleges needed a unified system to
                                manage their complex operations efficiently.
                            </p>

                            <p>
                                From day one, <strong>MyVidyon</strong> has been committed to understanding the unique challenges
                                faced by educational institutions. MyVidyon's development team works closely with educators,
                                administrators, and students to ensure every feature addresses real-world needs.
                            </p>

                            <p>
                                Today, <strong>MyVidyon</strong> serves over 500 educational institutions worldwide, from small
                                schools to large universities. MyVidyon continues to innovate, adding new features and capabilities
                                that help institutions adapt to the evolving educational landscape.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                            Our Values & Vision
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <value.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                            MyVidyon Journey
                        </h2>

                        <div className="max-w-3xl mx-auto">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex gap-6 mb-8 last:mb-0"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {milestone.year}
                                        </div>
                                    </div>
                                    <div className="flex-grow pt-4">
                                        <p className="text-xl text-slate-700">{milestone.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* UNAI TECH Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-blue-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            Powered by UNAI TECH
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700">
                            <p>
                                <strong>MyVidyon</strong> is developed and managed by <strong>UNAI TECH</strong>, a leading
                                technology company specializing in educational software solutions. UNAI TECH brings decades
                                of combined experience in software development, education technology, and enterprise systems.
                            </p>
                            <p>
                                The partnership between <strong>MyVidyon</strong> and <strong>UNAI TECH</strong> ensures
                                continuous innovation, robust support, and a commitment to excellence that educational
                                institutions can rely on.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            Join the MyVidyon Family
                        </h2>
                        <p className="text-xl text-slate-700 mb-8">
                            Discover how MyVidyon can transform your educational institution
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="/myvidyon-erp-software"
                                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore MyVidyon ERP
                            </motion.a>
                            <motion.a
                                href="/contact"
                                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors shadow-lg text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutMyVidyon;
