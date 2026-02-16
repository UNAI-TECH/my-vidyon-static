import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
    Users, Clock, DollarSign, BookOpen, Calendar,
    BarChart3, Bell, Shield, Cloud, Smartphone
} from "lucide-react";

const MyVidyonERPSoftware = () => {
    const modules = [
        {
            icon: Users,
            title: "Student Management",
            description: "Complete student lifecycle management from admission to graduation with detailed profiles and academic records"
        },
        {
            icon: Clock,
            title: "Attendance System",
            description: "Real-time attendance tracking with biometric integration, automated notifications, and comprehensive reporting"
        },
        {
            icon: DollarSign,
            title: "Fee Management",
            description: "Automated fee collection, payment tracking, receipt generation, and financial reporting"
        },
        {
            icon: BookOpen,
            title: "Academic Management",
            description: "Curriculum planning, lesson scheduling, assignment tracking, and grade management"
        },
        {
            icon: Calendar,
            title: "Exam Management",
            description: "Complete exam lifecycle from scheduling to result publication with automated grading"
        },
        {
            icon: BarChart3,
            title: "Analytics & Reports",
            description: "Powerful dashboards with real-time insights, customizable reports, and data visualization"
        },
        {
            icon: Bell,
            title: "Communication Hub",
            description: "Seamless communication between teachers, students, and parents via notifications and messaging"
        },
        {
            icon: Shield,
            title: "Security & Privacy",
            description: "Enterprise-grade security with role-based access control and data encryption"
        },
        {
            icon: Cloud,
            title: "Cloud-Based Platform",
            description: "Access from anywhere, anytime with 99.9% uptime and automatic backups"
        },
        {
            icon: Smartphone,
            title: "Mobile Apps",
            description: "Native mobile applications for iOS and Android for on-the-go access"
        }
    ];

    const useCases = [
        {
            title: "Schools",
            description: "K-12 schools managing hundreds to thousands of students with comprehensive administrative needs"
        },
        {
            title: "Colleges & Universities",
            description: "Higher education institutions requiring advanced academic management and multi-department coordination"
        },
        {
            title: "Training Institutes",
            description: "Professional training centers and coaching institutes managing courses and certifications"
        },
        {
            title: "International Schools",
            description: "Global educational institutions requiring multi-language and multi-currency support"
        }
    ];

    return (
        <main className="min-h-screen">
            <SEO
                title="MyVidyon ERP Software - Complete Educational Management Platform"
                description="MyVidyon ERP Software is a comprehensive platform for educational institutions. Manage students, attendance, fees, academics, exams, and more with MyVidyon's powerful ERP solution. Trusted by 500+ institutions."
                keywords="myvidyon erp software, myvidyon erp, educational erp, school erp software, college management system, myvidyon platform, student management software, attendance management, fee management"
                imageAlt="MyVidyon ERP Software - Educational Management Platform"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                            MyVidyon ERP Software
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed mb-8">
                            The complete educational management platform that empowers institutions to streamline
                            operations, enhance learning outcomes, and drive growth. <strong>MyVidyon ERP</strong> is
                            trusted by 500+ institutions worldwide.
                        </p>
                        <motion.a
                            href="/contact"
                            className="inline-block px-10 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started with MyVidyon
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                            Why MyVidyon ERP?
                        </h2>

                        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                            <p>
                                <strong>MyVidyon ERP Software</strong> is designed to be the single source of truth for
                                your educational institution. MyVidyon eliminates the need for multiple disconnected systems
                                by providing an all-in-one platform that handles every aspect of institutional management.
                            </p>

                            <p>
                                With <strong>MyVidyon ERP</strong>, you can manage student information, track attendance in
                                real-time, automate fee collection, plan academics, conduct exams, generate reports, and
                                communicate with stakeholders—all from one unified dashboard. MyVidyon's intuitive interface
                                ensures that even non-technical users can navigate the system with ease.
                            </p>

                            <p>
                                <strong>MyVidyon</strong> is built on a robust, scalable architecture that grows with your
                                institution. Whether you have 100 students or 10,000, MyVidyon delivers consistent performance
                                with 99.9% uptime. MyVidyon is developed and supported by <strong>UNAI TECH</strong>, ensuring
                                you have access to world-class technology and support.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modules Grid */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                            Comprehensive Modules
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {modules.map((module, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <module.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                        {module.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {module.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                            Perfect for Every Institution
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {useCases.map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-primary/5 to-blue-50 p-8 rounded-xl"
                                >
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-slate-700 text-lg">
                                        {useCase.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-blue-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                            MyVidyon by the Numbers
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                                <div className="text-xl text-slate-700">Institutions Worldwide</div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
                                <div className="text-xl text-slate-700">Uptime Guarantee</div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                                <div className="text-xl text-slate-700">Support Available</div>
                            </div>
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
                            Ready to Experience MyVidyon ERP?
                        </h2>
                        <p className="text-xl text-slate-700 mb-8">
                            Join hundreds of institutions already transforming education with MyVidyon
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="/contact"
                                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Request a Demo
                            </motion.a>
                            <motion.a
                                href="/what-is-myvidyon"
                                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors shadow-lg text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default MyVidyonERPSoftware;
