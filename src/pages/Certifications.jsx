import React, { useState } from "react";
import { FaAward, FaFileAlt, FaGlobe, FaCertificate } from "react-icons/fa";
import Lightbox from "../components/UI/Lightbox";
import SEO from "../components/SEO";

const Certifications = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: "", title: "" });

  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015 Certificate",
      desc: "Accredited Quality Management System for design, manufacturing, and exports of FRP/GRP composite products.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "ISO 14001:2015 Certificate",
      desc: "Environmental management standards verifying low VOC emissions during raw resin blending and filament wrapping.",
      image: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "ISO 45001:2018 Certificate",
      desc: "Occupational health and safety systems governing clean air containment for winding bay operators.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "WRAS Material Approval",
      desc: "Water Regulations Advisory Scheme approval certifying food-grade resin compounds are safe for human potable water.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const qualityProcedures = [
    {
      title: "Incoming Raw Materials Inspection",
      desc: "All glass roving bundles and polyester/vinyl ester resins are tested for moisture absorption and curing gel times prior to production loading."
    },
    {
      title: "Barcol Hardness Audits",
      desc: "Finished GRP pipes are tested using digital impressors to verify they have fully polymerized and cured in the kiln."
    },
    {
      title: "Ultrasonic Wall Thickness Mapping",
      desc: "Dual-laminate tanks are audited at 20 separate coordinate grid points to verify lining uniformity meets BS 4994."
    },
    {
      title: "Hydraulic Leak Stress Testing",
      desc: "Piping batches are subjected to static pressure testing at 1.5 times the pressure rating to verify zero structural weep."
    }
  ];

  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50">
      <SEO 
        title="ISO Certifications & Quality Reports" 
        description="Verify PYRAMID FIBRE PLASTICS' quality control credentials, including ISO 9001, ISO 14001, ISO 45001 certifications, and WRAS materials approval." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Compliance & Certifications
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Registered and certified by international composite auditing systems.
          </p>
        </div>
      </section>

      {/* 1. Core Licenses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              Standards Compliance
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              International ISO Accreditation
            </h2>
            <p className="text-xs text-gray-500">
              Our engineering processes are audited annually to verify consistency in production safety and design parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard 1 */}
            <div className="border border-gray-150 p-8 rounded-2xl bg-gray-50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaCertificate size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">ISO 9001:2015</h3>
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Quality Management Systems</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Applies to the engineering design calculations, filament winding, pultrusion molding, and global supply of composite piping networks and water panel reservoirs.
              </p>
            </div>
            
            {/* Standard 2 */}
            <div className="border border-gray-150 p-8 rounded-2xl bg-gray-50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaGlobe size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">ISO 14001:2015</h3>
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Environmental Management</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Certifies that our production waste recycling, chemical resin storage, and gas filtration exhaust chambers meet low ecological emission standards.
              </p>
            </div>

            {/* Standard 3 */}
            <div className="border border-gray-150 p-8 rounded-2xl bg-gray-50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaAward size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">ISO 45001:2018</h3>
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Health & Safety Management</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ensures safe conditions for factory personnel handling reactive chemicals, structural winding, and glass pultrusion lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Certificate Gallery */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              Certificates Grid
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Licenses & Approval Documentation
            </h2>
            <p className="text-xs text-gray-500">
              Click any certificate card below to view standard specifications fullscreen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setLightbox({ isOpen: true, image: cert.image, title: cert.title })}
                className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-md transition-shadow cursor-pointer p-4 space-y-4"
              >
                <div className="h-44 overflow-hidden rounded-xl bg-gray-100 relative group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-bold bg-primary px-3 py-1.5 rounded-lg shadow-md">
                      View Certificate
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-950 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-1.5 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Quality commitment details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                QMS Protocols
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Non-Destructive Quality Inspection Protocols
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                To guarantee zero failure rates in high pressure pickling, municipal water distribution, and sewage piping layouts, we enforce strict testing checkpoints.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {qualityProcedures.map((proc, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-2">
                    <h4 className="text-xs font-bold text-gray-900 flex items-center space-x-2">
                      <FaFileAlt className="text-primary shrink-0" size={12} />
                      <span>{proc.title}</span>
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{proc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=800&q=80"
                alt="Quality Audits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Module */}
      <Lightbox
        isOpen={lightbox.isOpen}
        image={lightbox.image}
        title={lightbox.title}
        onClose={() => setLightbox({ isOpen: false, image: "", title: "" })}
      />
    </div>
  );
};

export default Certifications;
