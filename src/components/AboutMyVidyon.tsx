import { motion } from "framer-motion";

const AboutMyVidyon = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            MyVidyon – Smart ERP Solution for Modern Educational Institutions
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              <strong>MyVidyon</strong> is an advanced ERP software designed specifically for educational institutions. 
              MyVidyon helps schools and colleges manage attendance, fees, academics, exams, and administration 
              in one unified, powerful system.
            </p>
            
            <p>
              With <strong>MyVidyon</strong>, educational institutions can streamline their operations, improve 
              communication between teachers, students, and parents, and gain valuable insights through 
              comprehensive analytics. MyVidyon is trusted by over 500+ schools worldwide, delivering 
              99.9% uptime and exceptional performance.
            </p>
            
            <p>
              <strong>MyVidyon</strong> is developed and managed by <strong>UNAI TECH</strong>, a leading 
              technology company committed to transforming education through innovative software solutions. 
              MyVidyon continues to evolve with cutting-edge features that meet the changing needs of 
              modern educational institutions.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.a
              href="/myvidyon-erp-software"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore MyVidyon ERP
            </motion.a>
            <motion.a
              href="/about-myvidyon"
              className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About MyVidyon
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMyVidyon;
