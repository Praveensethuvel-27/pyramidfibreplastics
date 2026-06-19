import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaUpload, FaCheckCircle } from "react-icons/fa";
import SEO from "../components/SEO";

const Careers = () => {
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    position: "",
    experience: "",
    fileName: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const jobOpenings = [
    {
      id: "comp-design",
      title: "Senior Composite Design Engineer",
      dept: "Engineering & Design",
      location: "Guindy, Chennai (On-Site)",
      experience: "5 - 8 Years",
      reqs: "Experience in AutoCAD, FEA calculations, and structural design codes for composite vessels (BS 4994, ASME RTP-1)."
    },
    {
      id: "winding-operator",
      title: "CNC Filament Winding Supervisor",
      dept: "Production & Plant Operations",
      location: "Guindy, Chennai (On-Site)",
      experience: "3 - 6 Years",
      reqs: "Hands-on experience calibrating multi-axis helical wrapping mandrels, roving tensioners, and curing kiln programs."
    },
    {
      id: "qa-metallurgy",
      title: "Quality Assurance Inspector (Materials)",
      dept: "Quality Management",
      location: "Guindy, Chennai (On-Site)",
      experience: "2 - 4 Years",
      reqs: "Familiarity with Barcol hardness scales, hydro pressure testing stations, ultrasonic wall thickness mapping, and ISO audits."
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (applyForm.name && applyForm.email && applyForm.position) {
      console.log("Job Application Submitted:", applyForm);
      setSubmitted(true);
      setApplyForm({ name: "", email: "", position: "", experience: "", fileName: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplyForm((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50">
      <SEO 
        title="Careers & Job Openings" 
        description="Join PYRAMID FIBRE PLASTICS. Explore careers in composite materials design, filament winding machinery operation, and quality assurance." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Careers at PYRAMID
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join a world-class team of design, production, and quality assurance composite engineers.
          </p>
        </div>
      </section>

      {/* 1. Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                Work Culture
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                An Environment Designed for Innovation
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                at Pyramid Fibre Plastics, we believe in continuous skill building and research focus. Our composite materials laboratory runs regular testing research on high-strength resin formulas and fiber tensile loads. 
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We promote a flat organization where manufacturing operators, FEA design draftsmen, and quality managers collaborate to execute high-value municipal pipelines and chemical containment projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-55 border border-gray-100">
                  <FaGraduationCap className="text-primary shrink-0" size={18} />
                  <span className="text-xs font-bold text-gray-800">Skill Development Seminars</span>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-55 border border-gray-100">
                  <FaBriefcase className="text-primary shrink-0" size={16} />
                  <span className="text-xs font-bold text-gray-800">Health & Insurance Accreditations</span>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                alt="Winding Supervisor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Job Listings */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              Now Hiring
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Current Openings
            </h2>
            <p className="text-xs text-gray-500">
              Select an engineering role and submit your details below.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center space-x-3">
                    <span className="bg-primary/10 text-primary text-[9px] font-bold uppercase px-3 py-1 rounded-full">
                      {job.dept}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400 font-semibold">{job.location}</span>
                  </div>
                  <h3 className="text-md font-bold text-gray-950">{job.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{job.reqs}</p>
                </div>
                
                <button
                  onClick={() => {
                    setApplyForm((prev) => ({ ...prev, position: job.title }));
                    document.getElementById("apply-form-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-primary hover:bg-primary-dark text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Apply Form Section */}
      <section id="apply-form-section" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-950 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight">Submit Your Application</h2>
              <p className="text-xs text-gray-400">Complete the recruitment registration profile.</p>
            </div>

            {submitted ? (
              <div className="bg-primary/20 text-primary-light border border-primary/30 p-6 rounded-xl text-center space-y-3">
                <FaCheckCircle className="mx-auto" size={36} />
                <h4 className="text-lg font-bold">Application Received!</h4>
                <p className="text-xs text-gray-300">
                  Our HR coordinator will review your profile credentials and resume details shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:bg-white/15 outline-none focus:ring-1 focus:ring-primary-light"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@gmail.com"
                      value={applyForm.email}
                      onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:bg-white/15 outline-none focus:ring-1 focus:ring-primary-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                      Apply Position *
                    </label>
                    <select
                      required
                      value={applyForm.position}
                      onChange={(e) => setApplyForm({ ...applyForm, position: e.target.value })}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:bg-white/15 outline-none focus:ring-1 focus:ring-primary-light"
                    >
                      <option value="" className="text-gray-900">Select Position</option>
                      {jobOpenings.map(j => (
                        <option key={j.id} value={j.title} className="text-gray-900">{j.title}</option>
                      ))}
                      <option value="General Application" className="text-gray-900">General Application (Other)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 4 Years"
                      value={applyForm.experience}
                      onChange={(e) => setApplyForm({ ...applyForm, experience: e.target.value })}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:bg-white/15 outline-none focus:ring-1 focus:ring-primary-light"
                    />
                  </div>
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                    Upload Resume (PDF / DOCX) *
                  </label>
                  <div className="relative border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:bg-white/5 transition-all">
                    <input
                      type="file"
                      required
                      accept=".pdf,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <FaUpload className="mx-auto text-primary-light mb-2" size={20} />
                    <span className="text-[11px] text-gray-400 block font-bold">
                      {applyForm.fileName ? applyForm.fileName : "Click to select or drag and drop file"}
                    </span>
                    <span className="text-[9px] text-gray-500 mt-1 block">Maximum size: 5MB</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                    Cover Note / Comments
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Brief details about your polymer/civil background..."
                    value={applyForm.message}
                    onChange={(e) => setApplyForm({ ...applyForm, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:bg-white/15 outline-none focus:ring-1 focus:ring-primary-light"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Submit Resume Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
