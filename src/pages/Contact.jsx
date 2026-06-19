import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import SEO from "../components/SEO";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.subject) {
      console.log("Contact Form Submission:", form);
      
      const existing = JSON.parse(localStorage.getItem("PYRAMID_enquiries") || "[]");
      existing.push({
        timestamp: new Date().toLocaleString(),
        name: form.name,
        email: form.email,
        company: "Contact Feedback Form",
        mobile: "N/A",
        product: form.subject,
        quantity: "N/A",
        city: "N/A",
        state: "N/A",
        message: form.message
      });
      localStorage.setItem("PYRAMID_enquiries", JSON.stringify(existing));

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50 pb-16">
      <SEO 
        title="Contact Us" 
        description="Get in touch with PYRAMID FIBRE PLASTICS. Find our Chennai office address, telephone numbers, emails, and operating hours." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Contact Our Team
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Reach out to our customer service desk, quality team, or regional export division.
          </p>
        </div>
      </section>

      {/* Corporate Details & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Corporate Plant Address</h4>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                      Plot 12-A, Industrial Growth Centre, Phase-II, Guindy, Chennai, Tamil Nadu - 600032
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0">
                    <FaPhoneAlt size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Technical Sales Hotline</h4>
                    <p className="text-xs text-gray-500 mt-1.5">+91 44 2456 7890</p>
                    <p className="text-xs text-gray-400">Monday - Saturday (9:00 AM - 6:00 PM)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0">
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Email Channels</h4>
                    <p className="text-xs text-gray-500 mt-1.5">Corporate: info@PYRAMID.com</p>
                    <p className="text-xs text-gray-500">Engineering: design@PYRAMID.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0">
                    <FaClock size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Operating Hours</h4>
                    <p className="text-xs text-gray-500 mt-1.5">Mon - Sat: 09:00 - 18:00 (IST)</p>
                    <p className="text-xs text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Feedback Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-155 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-3">
                <h3 className="text-lg font-bold text-gray-950">Send Us A Message</h3>
                <p className="text-xs text-gray-500 mt-1">Submit feedback, general queries, or scheduling requests.</p>
              </div>

              {submitted ? (
                <div className="bg-primary/10 text-primary border border-primary/20 p-6 rounded-xl text-center space-y-2">
                  <h4 className="text-lg font-bold">Feedback Registered!</h4>
                  <p className="text-xs">
                    Thank you for writing. Our desk team will reply to your inbox shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-gray-55 border border-gray-200 rounded-xl p-3 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-55 border border-gray-200 rounded-xl p-3 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Schedule Factory Visit, Career Query"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-gray-55 border border-gray-200 rounded-xl p-3 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Message Details
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Type details of your message..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-gray-55 border border-gray-200 rounded-xl p-3 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Iframe integration */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="h-96 rounded-3xl overflow-hidden shadow-md border border-gray-150">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8378877134375!2d80.21852077598818!3d13.014169513941446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a233b8782f%3A0xb3de3be79dbd63ad!2sGuindy%20Industrial%20Estate%2C%20Guindy%2C%20Chennai%2C%2520Tamil%2520Nadu!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PYRAMID Plant Coordinates"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
