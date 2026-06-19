import React from "react";
import { motion } from "framer-motion";
import { FaBoxes, FaDraftingCompass, FaCogs, FaSearch, FaVial, FaFileContract, FaTruckMoving } from "react-icons/fa";
import SEO from "../components/SEO";

const Process = () => {
  const steps = [
    {
      step: "01",
      icon: <FaBoxes size={20} />,
      title: "Raw Material Selection",
      subtitle: "Chemical-grade Resins & Continuous Glass Fibers",
      desc: "Our quality assurance begins at procurement. We inspect and select premium chemical-resistant Vinylester and Isophthalic resins, and E-CR glass fiber rovings. Initiators, promoters, and UV stabilizers are calibrated according to local environmental settings."
    },
    {
      step: "02",
      icon: <FaDraftingCompass size={20} />,
      title: "Structural Product Design",
      subtitle: "Finite Element Analysis & Layer Calculations",
      desc: "Before production, design engineers calculate the exact wall thickness, glass-to-resin ratio, and helical winding angles. Calculations are performed to ensure compliance with AWWA C950 and BS 4994, factoring in internal fluid pressure, external soil load, vacuum parameters, and chemical parameters."
    },
    {
      step: "03",
      icon: <FaCogs size={20} />,
      title: "Helical Filament Winding",
      subtitle: "CNC-Controlled Automated Fabrication",
      desc: "The pipe body is fabricated on CNC helical wrapping machines. The mandrels are wrapped with glass filaments soaked in resin under electronic tension. Specialized glass veil liners are applied internally to form the mirror-smooth corrosion barrier."
    },
    {
      step: "04",
      icon: <FaSearch size={20} />,
      title: "Curing & Dimensional Inspection",
      subtitle: "Oven Polymerization & Standard Tolerances",
      desc: "Once wound, the pipes are transported to automated heating kilns for complete polymerization (curing). After de-mandreling, technicians check wall thickness, outer diameters, flange perpendicularity, and barcol hardness ratings."
    },
    {
      step: "05",
      icon: <FaVial size={20} />,
      title: "Hydrostatic Pressure Testing",
      subtitle: "Fail-Safe Structural Stress Audits",
      desc: "Every piping segment undergoes hydrostatic pressure tests in our testing bay. The pipes are sealed, filled with water, and pressurized at 1.5 times the design working pressure. Ultrasonic thickness checks are conducted to verify zero structural leakage."
    },
    {
      step: "06",
      icon: <FaFileContract size={20} />,
      title: "Protective Packaging",
      subtitle: "Transit Safeguards & Collars",
      desc: "To prevent transit scratches or impact damage to composite joints, pipe ends are fitted with protective polyethylene cap covers. High-contact zones are lined with thick rubber-foam buffer rings and strapped onto secure wooden cradles."
    },
    {
      step: "07",
      icon: <FaTruckMoving size={20} />,
      title: "Fleet Logistics & Dispatch",
      subtitle: "On-Site Delivery with Quality Reports",
      desc: "Pipes are dispatched on specialized flatbed trailers alongside their corresponding Hydro-Test Reports, Raw Materials Mill Sheets, and standard handling guidelines. Our installation cell supports local engineering alignment on-site."
    }
  ];

  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50">
      <SEO 
        title="Manufacturing Process" 
        description="Follow our 7-step industrial manufacturing process: from raw material selection and FEA design, to CNC filament winding and hydrostatic testing." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Manufacturing Process
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A look into our automated manufacturing facility and strict quality testing protocols.
          </p>
        </div>
      </section>

      {/* Process timeline section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-1/2 space-y-16 py-8">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Timeline circular node marker */}
                  <div className="absolute left-[-9px] md:left-[calc(50%-17px)] top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-md z-10 border-4 border-white">
                    {item.step}
                  </div>

                  {/* Card Container */}
                  <div
                    className={`w-full md:w-[45%] pl-8 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow relative">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center mb-4 ${
                        isEven ? "md:ml-auto" : "md:mr-auto"
                      }`}>
                        {item.icon}
                      </div>

                      <span className="text-[10px] text-primary font-bold tracking-wider uppercase">
                        {item.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-gray-950 mt-1">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Process;
