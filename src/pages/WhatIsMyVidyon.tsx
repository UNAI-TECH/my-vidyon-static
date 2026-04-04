import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CheckCircle, Users, BarChart3, Shield, Clock, Zap } from "lucide-react";

const WhatIsMyVidyon = () => {
    const features = [
        {
            icon: Users,
            title: "Student Management",
            description: "Comprehensive student information system with profiles, enrollment, and academic tracking"
        },
        {
            icon: Clock,
            title: "Attendance Tracking",
            description: "Real-time attendance monitoring with biometric integration and automated reporting"
        },
        {
            icon: BarChart3,
            title: "Analytics & Reports",
            description: "Powerful analytics dashboard with customizable reports and data insights"
        },
        {
            icon: Shield,
            title: "Secure & Reliable",
            description: "99.9% uptime with enterprise-grade security and data protection"
        },
        {
            icon: Zap,
            title: "Fee Management",
            description: "Automated fee collection, payment tracking, and financial reporting"
        },
        {
            icon: CheckCircle,
            title: "Exam Management",
            description: "Complete exam scheduling, grading, and result publication system"
        }
    ];

    const benefits = [
        "Streamline administrative tasks and reduce manual work",
        "Improve communication between teachers, students, and parents",
        "Access real-time data and insights for better decision-making",
        "Automate attendance, fees, and academic processes",
        "Enhance student engagement and learning outcomes",
        "Scale effortlessly as your institution grows"
    ];

    return (
        <main className="min-h-screen">
            <SEO
                title="What is MyVidyon? - Complete Guide to MyVidyon ERP Platform"
                description="MyVidyon is a comprehensive ERP software platform designed for educational institutions. Learn how MyVidyon helps schools and colleges manage academics, attendance, fees, and administration efficiently."
                keywords="what is myvidyon, myvidyon erp, myvidyon platform, educational erp software, school management system, myvidyon features, myvidyon benefits"
                imageAlt="What is MyVidyon - Educational ERP Platform"
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
                            What is MyVidyon?
                        </h1>
                        <p className="text-lg md:text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                            <strong>MyVidyon</strong> is a leading ERP (Enterprise Resource Planning) software platform
                            specifically designed for educational institutions. MyVidyon empowers schools, colleges, and
                            universities to manage their entire operations from a single, unified platform.
                        </p>
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
                        <h2 className="text-4xl font-bold text-slate-900 mb-8">
                            Understanding MyVidyon ERP
                        </h2>

                        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                            <p>
                                <strong>MyVidyon</strong> is an all-in-one educational management solution that brings together
                                student information systems, attendance tracking, fee management, academic planning, exam management,
                                and administrative tools into one powerful platform. MyVidyon is trusted by over 500+ educational
                                institutions worldwide.
                            </p>

                            <p>
                                Developed and managed by <strong>UNAI TECH</strong>, MyVidyon combines cutting-edge technology
                                with deep understanding of educational needs. MyVidyon delivers 99.9% uptime, ensuring your
                                institution's operations run smoothly without interruption.
                            </p>

                            <p>
                                Whether you're a small school or a large university, <strong>MyVidyon</strong> scales to meet
                                your needs. MyVidyon's cloud-based architecture ensures you can access your data anytime, anywhere,
                                from any device.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                            Key Features of MyVidyon
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                            Why Choose MyVidyon?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-lg text-slate-700">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-blue-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            Ready to Transform Your Institution?
                        </h2>
                        <p className="text-xl text-slate-700 mb-8">
                            Join 500+ institutions already using MyVidyon to streamline their operations
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
                                Contact Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default WhatIsMyVidyon;
