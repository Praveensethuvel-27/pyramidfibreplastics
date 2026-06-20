import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaFileDownload, FaCheckCircle, FaQuoteRight, FaArrowLeft, FaCheck } from "react-icons/fa";
import { products } from "../data/products";
import SEO from "../components/SEO";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    quantity: "500",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-950">Product Profile Not Found</h2>
        <p className="text-xs text-gray-500">The requested composite specification file could not be located.</p>
        <Link to="/products" className="bg-primary text-white text-xs font-bold px-6 py-3 rounded-xl inline-block">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      console.log(`Product Details Quote Submission for ${product.name}:`, form);
      
      const existing = JSON.parse(localStorage.getItem("PYRAMID_enquiries") || "[]");
      existing.push({
        timestamp: new Date().toLocaleString(),
        name: form.name,
        email: form.email,
        company: "Direct Details Form",
        mobile: "N/A",
        product: product.name,
        quantity: form.quantity,
        city: "N/A",
        state: "N/A",
        message: form.message
      });
      localStorage.setItem("PYRAMID_enquiries", JSON.stringify(existing));

      setSubmitted(true);
      setForm({ name: "", email: "", quantity: "500", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleDownloadBrochure = () => {
    // Generate a mock text file representing the engineering specifications brochure and download it!
    const content = `
PYRAMID FIBRE PLASTICS
--------------------------------------------------------
TECHNICAL SPECIFICATIONS BROCHURE - ${product.name.toUpperCase()}

PRODUCT NAME: ${product.name}
CATEGORY: ${product.category}
DESCRIPTION: ${product.description}

TECHNICAL DATA:
${Object.entries(product.specs).map(([key, val]) => `- ${key}: ${val}`).join("\n")}

FEATURES:
${product.features.map(f => `- ${f}`).join("\n")}

BENEFITS:
${product.benefits.map(b => `- ${b}`).join("\n")}

APPLICATIONS:
${product.applications.map(a => `- ${a}`).join("\n")}

--------------------------------------------------------
For custom diameter winding layers, pressure calculations, or installation blueprints,
contact our technical engineering cell: engineering@pyramidfibreplastics.com
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${product.id}-technical-brochure.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-24 select-none min-h-screen bg-white">
      <SEO 
        title={product.name} 
        description={product.shortDescription} 
        ogImage={product.image}
      />

      {/* Nav breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/products" className="inline-flex items-center space-x-2 text-xs font-bold text-gray-500 hover:text-primary transition-colors">
            <FaArrowLeft size={10} />
            <span>Back to Products</span>
          </Link>
          <div className="text-xs text-gray-400">
            Products / <span className="text-gray-600 font-bold">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Media & Specs */}
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-96 bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-l-3 border-primary pl-2 uppercase tracking-wide">
                  Technical Parameters
                </h3>
                <div className="overflow-hidden border border-gray-150 rounded-2xl">
                  <table className="min-w-full divide-y divide-gray-150 text-xs">
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left font-bold uppercase tracking-wider">Parameter</th>
                        <th className="px-6 py-3 text-left font-bold uppercase tracking-wider">Specifications</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 text-gray-600">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50/50">
                          <td className="px-6 py-4 font-bold text-gray-800 bg-gray-50/40 w-1/3">{key}</td>
                          <td className="px-6 py-4 font-medium">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Download Brochure CTA */}
              <div className="bg-accent/40 border border-primary/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-gray-900">Get Technical Catalogue</h4>
                  <p className="text-[11px] text-gray-500">Download complete pressure rating tables and structural diameters.</p>
                </div>
                <button
                  onClick={handleDownloadBrochure}
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
                >
                  <FaFileDownload />
                  <span>Download Spec Sheet</span>
                </button>
              </div>
            </div>

            {/* Right Column: Descriptions & Enquiries */}
            <div className="space-y-8">
              {/* Product Info */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Product Details
                </span>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-none">
                  {product.name}
                </h1>
                <p className="text-sm text-gray-600 leading-relaxed pt-2">
                  {product.description}
                </p>
              </div>

              {/* Features and Benefits Tabs/Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Core Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-[11px] text-gray-600">
                        <FaCheckCircle className="text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">Engineering Benefits</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-[11px] text-gray-600">
                        <FaCheck className="text-secondary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Applications Block */}
              <div className="bg-white border border-gray-150 p-6 rounded-2xl space-y-3 shadow-sm">
                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Primary Applications</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.applications.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 text-[11px] text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Direct Request Form */}
              <div className="bg-gray-950 text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                
                <div className="space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wide text-primary-light">
                    Direct Quote Request
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    Submit chemical parameters or dimensions for an engineering quotation.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-primary/20 text-primary-light border border-primary/30 p-6 rounded-xl text-center space-y-2">
                    <h5 className="font-bold text-sm">Quote Request Registered!</h5>
                    <p className="text-[11px] text-gray-300">
                      We have recorded your interest in {product.name}. Our technical sales team will draft a detailed layout calculation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDetailsSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                          placeholder="email@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:bg-white/15 outline-none focus:ring-1 focus:ring-primary-light"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                        Estimated Quantity (Meters / Units)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500 meters"
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:bg-white/15 outline-none focus:ring-1 focus:ring-primary-light"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-400 uppercase mb-1 font-bold">
                        Medium Chemical, Temperature, Pressure Requirements
                      </label>
                      <textarea
                        rows="3"
                        placeholder="e.g. Seawater outfall lines, 45°C, PN 16 pressure. Provide standard size preferences."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:bg-white/15 outline-none focus:ring-1 focus:ring-primary-light"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md"
                    >
                      Submit Spec Quote Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
