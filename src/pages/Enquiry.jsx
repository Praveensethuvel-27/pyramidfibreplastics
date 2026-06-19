import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaBuilding, FaPhone, FaEnvelope, FaCartPlus, FaMapMarkedAlt, FaChevronRight, FaChevronLeft, FaCheckCircle } from "react-icons/fa";
import { products } from "../data/products";
import SEO from "../components/SEO";

const Enquiry = () => {
  const routerLocation = useLocation();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    product: "",
    quantity: "",
    city: "",
    state: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, error: false, message: "" });

  // Pre-fill product if passed from routes/details
  useEffect(() => {
    if (routerLocation.state?.selectedProduct) {
      setForm((prev) => ({ ...prev, product: routerLocation.state.selectedProduct }));
    }
  }, [routerLocation]);

  const handleNext = () => {
    // Basic validations per step
    if (step === 1) {
      if (!form.name || !form.email || !form.mobile) {
        alert("Please complete all required contact fields.");
        return;
      }
    } else if (step === 2) {
      if (!form.product || !form.quantity) {
        alert("Please specify product type and quantity scope.");
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: false, error: false, message: "" });

    const sheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";
    
    // Save to local storage as fallback/audit log
    try {
      const existing = JSON.parse(localStorage.getItem("PYRAMID_enquiries") || "[]");
      existing.push({
        timestamp: new Date().toLocaleString(),
        ...form
      });
      localStorage.setItem("PYRAMID_enquiries", JSON.stringify(existing));
    } catch (err) {
      console.error("Local storage write failed:", err);
    }

    if (sheetsUrl) {
      // Direct Web App fetch request
      try {
        const response = await fetch(sheetsUrl, {
          method: "POST",
          mode: "no-cors", // Google App Script redirects can trigger CORS issues in browser, no-cors handles the POST safely.
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });

        // Since no-cors returns an opaque response, we assume success if no error was thrown
        setStatus({
          success: true,
          error: false,
          message: "Your quote request has been transmitted and logged in Google Sheets!"
        });
        setForm({
          name: "", company: "", mobile: "", email: "", product: "", quantity: "", city: "", state: "", message: ""
        });
        setStep(1);
      } catch (err) {
        console.error("Google Sheets submit error:", err);
        setStatus({
          success: false,
          error: true,
          message: "Failed to connect to Google Sheets. Submission saved locally instead."
        });
      }
    } else {
      // Simulate submission when no URL exists
      console.log("No VITE_GOOGLE_SHEETS_URL configured. Submission payload logged locally:", form);
      setTimeout(() => {
        setStatus({
          success: true,
          error: false,
          message: "Enquiry logged successfully! (Local fall-back simulated: saved to browser localStorage)"
        });
        setForm({
          name: "", company: "", mobile: "", email: "", product: "", quantity: "", city: "", state: "", message: ""
        });
        setStep(1);
      }, 1000);
    }
    setLoading(false);
  };

  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50 pb-16">
      <SEO 
        title="Request a Quote" 
        description="Submit your product requirements, diameter specifications, and delivery location to get an engineering quotation from PYRAMID FIBRE PLASTICS." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Request A Quote
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Submit your parameters to receive a technical blueprint proposal and cost assessment.
          </p>
        </div>
      </section>

      {/* Form Wizard Container */}
      <div className="max-w-3xl mx-auto mt-12 px-4">
        
        {/* Step progress indicators */}
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-xs">
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
              step >= 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
            }`}>1</span>
            <span className={`font-bold ${step >= 1 ? "text-primary" : "text-gray-400"}`}>Contact Details</span>
          </div>
          <div className="h-0.5 w-12 bg-gray-200" />
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
              step >= 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
            }`}>2</span>
            <span className={`font-bold ${step >= 2 ? "text-primary" : "text-gray-400"}`}>Product Scope</span>
          </div>
          <div className="h-0.5 w-12 bg-gray-200" />
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
              step >= 3 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
            }`}>3</span>
            <span className={`font-bold ${step >= 3 ? "text-primary" : "text-gray-400"}`}>Location & Specs</span>
          </div>
        </div>

        {/* Status Responses */}
        {status.success && (
          <div className="mb-6 bg-green-50 text-green-700 border border-green-200 p-5 rounded-2xl flex items-start space-x-3 text-xs">
            <FaCheckCircle className="shrink-0 mt-0.5 text-green-500" size={16} />
            <div>
              <h4 className="font-bold">Submission Confirmed</h4>
              <p className="mt-1">{status.message}</p>
            </div>
          </div>
        )}

        {status.error && (
          <div className="mb-6 bg-red-50 text-red-700 border border-red-200 p-5 rounded-2xl text-xs">
            <h4 className="font-bold">Network Alert</h4>
            <p className="mt-1">{status.message}</p>
          </div>
        )}

        {/* Wizard Card */}
        <div className="bg-white rounded-3xl border border-gray-150 p-8 sm:p-10 shadow-sm">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Contact Information */}
            {step === 1 && (
              <div className="space-y-5">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="text-md font-bold text-gray-900 flex items-center space-x-2">
                    <FaUser className="text-primary" size={14} />
                    <span>Step 1: Corporate Details</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-250 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Company Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Horizon Ltd"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-255 rounded-xl p-3.5 pl-10 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                      />
                      <FaBuilding className="absolute left-3.5 top-4 text-gray-400" size={12} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-255 rounded-xl p-3.5 pl-10 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                      />
                      <FaPhone className="absolute left-3.5 top-4 text-gray-400" size={12} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="email@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-255 rounded-xl p-3.5 pl-10 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                      />
                      <FaEnvelope className="absolute left-3.5 top-4 text-gray-400" size={12} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Product & Scope */}
            {step === 2 && (
              <div className="space-y-5">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="text-md font-bold text-gray-900 flex items-center space-x-2">
                    <FaCartPlus className="text-primary" size={14} />
                    <span>Step 2: Product & Quantities</span>
                  </h3>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                    Select Product Category *
                  </label>
                  <select
                    required
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-250 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                  >
                    <option value="">Select a Product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                    Estimated Quantity Scope *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 500 Meters, 5 Units, 2 KL Capacity"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-250 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Location & Details */}
            {step === 3 && (
              <div className="space-y-5">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="text-md font-bold text-gray-900 flex items-center space-x-2">
                    <FaMapMarkedAlt className="text-primary" size={14} />
                    <span>Step 3: Location & Winding Specifications</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chennai"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-250 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tamil Nadu"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-250 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                    Special Parameters & Chemical Concentration Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Specify chemical parameters, temperature, soil loads, or delivery dates..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-250 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-xl transition-all cursor-pointer"
                >
                  <FaChevronLeft size={10} />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <span>Continue</span>
                  <FaChevronRight size={10} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-bold text-xs px-8 py-3.5 rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  {loading ? "Transmitting..." : "Submit Quote Request"}
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
