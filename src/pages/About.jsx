import React from "react";
import { FaGraduationCap, FaIndustry, FaHardHat, FaHandshake, FaGlobe, FaCertificate } from "react-icons/fa";
import SEO from "../components/SEO";

const About = () => {
  const coreValues = [
    {
      icon: <FaHardHat size={20} />,
      title: "Uncompromising Safety",
      description: "We enforce rigorous HSE guidelines. Our products operate in hazardous zones carrying high pressure chemicals; there is no room for compromise."
    },
    {
      icon: <FaIndustry size={20} />,
      title: "Technical Excellence",
      description: "We employ automated winding control and pultrusion structures to ensure laminate uniformity and compliance with world specifications."
    },
    {
      icon: <FaHandshake size={20} />,
      title: "Integrity & Trust",
      description: "Transparent chemical compositions, certified test results, and clear pressure capacity reports build lifetime client agreements."
    },
    {
      icon: <FaGlobe size={20} />,
      title: "Sustainability Focus",
      description: "Composites provide a 50+ year service life, reducing manufacturing replacement cycles and the overall industrial carbon footprint."
    }
  ];

  const historyTimeline = [
    { year: "2010", title: "Founding & Winding Line", desc: "Established PYRAMID FIBRE PLASTICS in Chennai, India, with a single automated helical winding line for GRP pipes." },
    { year: "2014", title: "Expansion to Chemical Linings", desc: "Launched dual-laminate PVC-FRP and PP-FRP vessels and storage systems for metallurgy pickling complexes." },
    { year: "2019", title: "International Export Footprint", desc: "Accredited with ISO certification models and began exports of large-diameter seawater transmission pipes to Gulf and ASEAN markets." },
    { year: "2024", title: "Smart Composites R&D", desc: "Patented high-stiffness glass layers capable of resisting deep underground soil pressures without deflection." }
  ];

  return (
    <div className="pt-24 select-none">
      <SEO 
        title="About Us" 
        description="Learn about PYRAMID FIBRE PLASTICS, our history since 2010, our state-of-the-art GRP and FRP manufacturing facility, and our core engineering values." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            About Our Company
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Engineering composite infrastructure systems that stand the test of time, weather, and corrosion.
          </p>
        </div>
      </section>

      {/* 1. Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Global Pioneers in Filament-Wound Composites
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                PYRAMID FIBRE PLASTICS designs, tests, and delivers advanced fiberglass reinforced plastic (FRP), glass reinforced plastic (GRP), and high-density polyethylene (HDPE) products. 
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our manufacturing facilities integrate dual-helical filament winding systems and high-capacity pultrusion lines, fabricating items ranging from custom DN 25 chemical pipes to massive DN 4000 municipal seawater conduits.
              </p>
              <div className="border-l-4 border-primary pl-4 py-1.5 italic text-xs text-gray-500 bg-gray-50 rounded-r-lg">
                "We don't just supply pipes; we design custom composite laminates engineered to resist the specific chemical concentration, temperature, and load of your application."
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Winding Process"
                className="rounded-xl shadow-md object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Pipes Stack"
                className="rounded-xl shadow-md object-cover h-48 w-full mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founder's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 text-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-2 border-primary p-1 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Founder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Dr. A. Sekar</h4>
                <p className="text-[10px] text-primary uppercase font-bold tracking-wider">Managing Director & Founder</p>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase block">
                MD's Message
              </span>
              <h3 className="text-xl font-extrabold text-gray-900">
                “Building the conduits for global industrial growth.”
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our founding objective was to deliver composite components that solve corrosion problems permanently. Industrial pipelines handle reactive and expensive chemical reagents. Any failure is costly and hazardous. By utilizing CNC-filament winding technology and premium grade resins, we supply materials engineered for extreme performance. We are proud of our ISO compliance, engineering integrity, and the trust our clients place in us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Company History & Milestones
            </h2>
          </div>

          <div className="relative border-l border-gray-200 ml-4 md:ml-32 space-y-12">
            {historyTimeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Year tag */}
                <div className="absolute -left-4 md:-left-24 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm text-center w-20">
                  {item.year}
                </div>
                
                {/* Bullet */}
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-primary group-hover:scale-125 transition-transform" />

                <div>
                  <h3 className="text-lg font-bold text-gray-950 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 max-w-3xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              Core Beliefs
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              The Values That Guide Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-md font-bold text-gray-950">{val.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Facility & Quality */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=80"
                alt="Production Plant"
                className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
              />
            </div>
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                Facility & Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                State-of-the-Art Production & Testing Operations
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our plant houses three CNC-controlled filament winding machines capable of winding up to DN 4000 diameter GRP/FRP shells. The pultrusion division manufactures continuous sections of cable trays and custom profiles.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaCertificate className="text-primary shrink-0 mt-0.5" size={14} />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Hydrostatic Testing Station</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Every manufactured batch undergoes pressure testing at 1.5 times the rated class pressure to check for micro-leakages.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCertificate className="text-primary shrink-0 mt-0.5" size={14} />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Helical Fiber Wrapping Chamber</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Ensures uniform fiber distribution and resin absorption, yielding a structural composite layer free of air cavities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCertificate className="text-primary shrink-0 mt-0.5" size={14} />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Quality Inspection Labs</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Includes raw materials curing audits, glass content checks, and barcol hardness tests on finished products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              Management
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Our Professional Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm p-6 text-center space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Team 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-md font-bold text-gray-900">Dr. Rajesh Kumar</h3>
                <p className="text-[10px] text-primary uppercase font-bold mt-0.5">Head of R&D & Materials Science</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  PhD in Polymer Engineering from IIT Madras. 12+ years optimizing composite layouts.
                </p>
              </div>
            </div>
            
            {/* Team 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm p-6 text-center space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Team 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-md font-bold text-gray-900">Er. Vikram Seth</h3>
                <p className="text-[10px] text-primary uppercase font-bold mt-0.5">Chief Operations & Quality Engineer</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  Oversees helical winding automation lines and raw material curing tests.
                </p>
              </div>
            </div>

            {/* Team 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm p-6 text-center space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Team 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-md font-bold text-gray-900">Mrs. Priya Nair</h3>
                <p className="text-[10px] text-primary uppercase font-bold mt-0.5">Director of Exports & Customer Success</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  Manages global project coordination and international shipping logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
