import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaShieldAlt, FaAward, FaTruck, FaHeadset, FaTags, FaUsers, FaArrowRight, FaClock } from "react-icons/fa";
import { products } from "../data/products";
import { industries } from "../data/industries";
import { blogs } from "../data/blogs";
import Counter from "../components/UI/Counter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const navigate = useNavigate();
  const [quickForm, setQuickForm] = useState({
    name: "",
    email: "",
    product: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (quickForm.name && quickForm.email) {
      console.log("Quick Enquiry Submitted:", quickForm);
      // Store in localStorage as fallback
      const existing = JSON.parse(localStorage.getItem("PYRAMID_enquiries") || "[]");
      existing.push({
        timestamp: new Date().toLocaleString(),
        ...quickForm,
        company: "Quick Enquiry",
        mobile: "N/A",
        quantity: "1",
        city: "N/A",
        state: "N/A"
      });
      localStorage.setItem("PYRAMID_enquiries", JSON.stringify(existing));
      
      setSubmitted(true);
      setQuickForm({ name: "", email: "", product: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  // Animation variants for reveal effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-24 select-none">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gray-950 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent" />
        
        {/* Floating background shapes */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
              <span>Next-Gen Piping Composites</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight uppercase"
            >
              Industrial Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">
                Fiber Piping
              </span> Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-300 mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              PYRAMID FIBRE PLASTICS designs, tests, and manufactures corrosion-proof GRP, FRP, and HDPE piping networks, chemical containment tanks, and cable trays for severe global applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5"
            >
              <Link
                to="/enquiry"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-102 text-center"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/products"
                className="border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all text-center"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating statistics widgets inside Hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 py-6 px-4 hidden md:block z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-center">
            <div className="border-r border-white/10">
              <h3 className="text-3xl font-extrabold text-white">
                <Counter endValue="15" suffix="+" />
              </h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="border-r border-white/10">
              <h3 className="text-3xl font-extrabold text-white">
                <Counter endValue="450" suffix="+" />
              </h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Completed Projects</p>
            </div>
            <div className="border-r border-white/10">
              <h3 className="text-3xl font-extrabold text-white">
                <Counter endValue="25" suffix="+" />
              </h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Countries Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-white">
                <Counter endValue="99" suffix="%" />
              </h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Factory Equipment"
                className="rounded-2xl shadow-xl object-cover w-full h-[450px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl hidden sm:block">
                <h4 className="text-xl font-bold">Quality Assured</h4>
                <p className="text-xs text-blue-100 mt-1">All pipes hydro-tested at 1.5x rating</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
                Company Overview
              </h3>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Pioneering Composite Engineering for Critical Pipelines
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Since our inception, PYRAMID FIBRE PLASTICS has set standard benchmarks in manufacturing heavy industrial composite products. We utilize CNC-controlled helical winding units to wrap high-grade roving and special chemical-barrier resins, producing robust piping systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="text-md font-bold text-primary">Our Mission</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    To deliver structural, maintenance-free fluid conduits that completely eliminate corrosion risks in toxic process plants and city pipelines.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="text-md font-bold text-secondary">Our Vision</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    To expand globally as the primary benchmark manufacturer for custom pultruded systems and large-diameter FRP water grids.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-bold text-sm"
                >
                  <span>Learn More About Us</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
              Engineering Advantages
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Engineers Choose PYRAMID Solutions
            </h2>
            <p className="text-gray-500 text-sm">
              We focus on precise composition configurations to ensure long service lifespans and complete compatibility with hazardous chemicals.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-premium hover:-translate-y-1 transition-all text-left space-y-4 bg-gray-50/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaShieldAlt size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">High Quality Materials</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We use premium Grade glass fibers (E-CR glass) and vinyl ester resins to guarantee resistance against structural and chemical corrosion.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-premium hover:-translate-y-1 transition-all text-left space-y-4 bg-gray-50/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaUsers size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Industry Expertise</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our in-house composite engineers design laminate structures matching temperature, vacuum, pressure, and chemical requirements.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-premium hover:-translate-y-1 transition-all text-left space-y-4 bg-gray-50/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaAward size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Certified Products</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Manufactured to international specifications (AWWA C950, ASTM D3299, BS 4994) and approved by global quality testing centers.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-premium hover:-translate-y-1 transition-all text-left space-y-4 bg-gray-50/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaTruck size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Timely Delivery</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dual filament-winding plants and automated curing chambers ensure high output capacity and deliveries completed on-schedule.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-premium hover:-translate-y-1 transition-all text-left space-y-4 bg-gray-50/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaHeadset size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Technical Support</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We provide complete on-site deployment consultation, laying alignment bedding reviews, and commissioning pressure test supervision.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-premium hover:-translate-y-1 transition-all text-left space-y-4 bg-gray-50/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaTags size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Competitive Pricing</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Optimized materials usage and advanced pultrusion manufacturing allow delivering premium components at cost-efficient rates.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
                Product Showcase
              </h3>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
                Certified Composite Range
              </h2>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 bg-primary hover:bg-primary-dark text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md shadow-primary/20"
            >
              View Full Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-premium group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary font-bold text-[10px] uppercase px-3 py-1 rounded-full border border-white/20">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {p.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex space-x-3">
                  <button
                    onClick={() => navigate(`/product/${p.id}`)}
                    className="flex-1 text-center bg-gray-100 hover:bg-primary hover:text-white text-gray-700 font-bold text-xs py-2.5 rounded-xl transition-colors"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => navigate("/enquiry", { state: { selectedProduct: p.name } })}
                    className="flex-1 text-center bg-primary-light hover:bg-primary text-primary hover:text-white font-bold text-xs py-2.5 rounded-xl transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
              Global Applications
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Sectors relying on PYRAMID Engineering
            </h2>
            <p className="text-gray-500 text-sm">
              Our products are engineered to comply with high industrial sector criteria globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.slice(0, 6).map((ind) => (
              <div
                key={ind.id}
                className="relative h-80 rounded-2xl overflow-hidden group shadow-md"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {ind.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/industries"
                      className="text-xs font-bold text-primary-light flex items-center space-x-1.5 hover:text-white transition-colors"
                    >
                      <span>View Applications</span>
                      <FaArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MANUFACTURING PROCESS OVERVIEW */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
              How We Create Quality
            </h3>
            <h2 className="text-3xl font-extrabold tracking-tight">
              5-Step Manufacturing Workflow
            </h2>
            <p className="text-gray-400 text-sm">
              From chemical selection and automated winding to quality stress inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Step 1 */}
            <div className="glass-card-dark p-6 rounded-2xl relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-white/10">01</span>
              <h4 className="text-md font-bold text-primary-light mt-4">Design</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Engineers specify fiber thickness and resins matching chemical mediums.
              </p>
            </div>
            {/* Step 2 */}
            <div className="glass-card-dark p-6 rounded-2xl relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-white/10">02</span>
              <h4 className="text-md font-bold text-primary-light mt-4">Production</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Helical winding systems lay glass filaments under precise electronic tension.
              </p>
            </div>
            {/* Step 3 */}
            <div className="glass-card-dark p-6 rounded-2xl relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-white/10">03</span>
              <h4 className="text-md font-bold text-primary-light mt-4">Quality Testing</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Hydraulic pressure testing verifies strength barriers against crack leaks.
              </p>
            </div>
            {/* Step 4 */}
            <div className="glass-card-dark p-6 rounded-2xl relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-white/10">04</span>
              <h4 className="text-md font-bold text-primary-light mt-4">Packaging</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Pipes are buffered with foam collars to prevent transit scratches.
              </p>
            </div>
            {/* Step 5 */}
            <div className="glass-card-dark p-6 rounded-2xl relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-white/10">05</span>
              <h4 className="text-md font-bold text-primary-light mt-4">Delivery</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                On-time fleet delivery complete with handling safety documentation.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/process"
              className="inline-flex items-center space-x-2 text-primary-light hover:text-white font-bold text-sm"
            >
              <span>View Interactive Timeline</span>
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS (using Swiper.js) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
              Endorsements
            </h3>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
              Trusted by Top Procurement Directors
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            <SwiperSlide>
              <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 max-w-3xl mx-auto space-y-4">
                <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                  "We installed PYRAMID's GRP pipes for our seawater desalination outfall lines in 2018. To date, we have recorded zero structural cracks, pressure drops, or chemical erosion. Their composite quality is state-of-the-art."
                </p>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">K. Balachandran</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Project Director, South Coast Water Solutions</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 max-w-3xl mx-auto space-y-4">
                <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                  "PYRAMID's chemical storage tanks solved our sulfuric acid corrosion issues. Their engineers designed the dual-laminated PVDF-FRP tanks specifically for our concentration parameters. Highly recommended engineering partner."
                </p>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Dr. Melissa Vance</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">QA Director, Horizon Petrochemicals</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 max-w-3xl mx-auto space-y-4">
                <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                  "Excellent customer service and prompt delivery. Their pultruded cable trays and floor gratings were delivered directly on-site with all loading charts and standard approvals. Saved us massive rigging hours."
                </p>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">S. Ramakrishnan</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Chief Construction Manager, Mega Power Grid</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* 8. CERTIFICATIONS PREVIEW */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h4 className="text-xs font-bold text-gray-400 tracking-widest uppercase">
            Compliance and Certification Licenses
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm w-36 text-center">
              <span className="font-extrabold text-sm text-gray-800">ISO 9001:2015</span>
              <p className="text-[9px] text-gray-500 uppercase mt-1">Quality Management</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm w-36 text-center">
              <span className="font-extrabold text-sm text-gray-800">ISO 14001:2015</span>
              <p className="text-[9px] text-gray-500 uppercase mt-1">Environmental Standards</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm w-36 text-center">
              <span className="font-extrabold text-sm text-gray-800">ISO 45001:2018</span>
              <p className="text-[9px] text-gray-500 uppercase mt-1">Health & Safety</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm w-36 text-center">
              <span className="font-extrabold text-sm text-gray-800">WRAS Certified</span>
              <p className="text-[9px] text-gray-500 uppercase mt-1">Water Regulations</p>
            </div>
          </div>
          <div className="pt-2">
            <Link to="/certifications" className="text-xs font-bold text-primary hover:underline">
              View All Certificates & Test Reports
            </Link>
          </div>
        </div>
      </section>

      {/* 9. LATEST BLOG PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
                Publications
              </h3>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
                Latest from Engineering Journal
              </h2>
            </div>
            <Link to="/blog" className="text-xs font-bold text-primary hover:underline flex items-center space-x-1">
              <span>View All Articles</span>
              <FaArrowRight size={10} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-[10px] text-gray-400">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <FaClock size={8} />
                        <span>{article.readTime}</span>
                      </span>
                    </div>
                    <h3 className="text-md font-bold text-gray-900 line-clamp-2 hover:text-primary transition-colors">
                      <Link to={`/blog`}>{article.title}</Link>
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-gray-50 mt-4">
                  <Link
                    to={`/blog`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-primary hover:text-primary-dark mt-4"
                  >
                    <span>Read Article</span>
                    <FaArrowRight size={8} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. QUICK ENQUIRY FORM */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
                Quick Callback
              </h3>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Submit an Instant Enquiry
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Enter your details here for a quick product request callback. For complete multi-step quotation details, please visit our dedicated Enquiry Page.
              </p>
              <div className="pt-2">
                <Link
                  to="/enquiry"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-bold text-xs"
                >
                  <span>Go to Full Multi-Step Quote Request</span>
                  <FaArrowRight size={10} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="bg-primary/10 text-primary border border-primary/20 p-6 rounded-xl text-center space-y-2">
                  <h4 className="text-lg font-bold">Enquiry Registered!</h4>
                  <p className="text-xs">
                    Our sales engineers will contact you shortly with catalog specifications.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={quickForm.email}
                      onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Select Product *
                    </label>
                    <select
                      required
                      value={quickForm.product}
                      onChange={(e) => setQuickForm({ ...quickForm, product: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    >
                      <option value="">Select a Product Category</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Message / Custom Dimensions
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Specify your parameters (pressure class, medium temperature, quantities)..."
                      value={quickForm.message}
                      onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-md"
                    >
                      Submit Instant Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
