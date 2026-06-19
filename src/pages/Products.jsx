import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaFilter } from "react-icons/fa";
import { products } from "../data/products";
import SEO from "../components/SEO";

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Pipes & Fittings",
    "Tanks & Vessels",
    "Scrubbers & Towers",
    "Ducting Systems",
    "Gratings",
    "Specialty FRP Products",
    "Pultruded Profiles",
    "Guards & Enclosures",
    "Lining & Erection",
    "Flow Equipment"
  ];

  // Filter products based on search term and category selection
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50">
      <SEO 
        title="Products Catalog" 
        description="Explore PYRAMID FIBRE PLASTICS' premium industrial product range: FRP, GRP, and HDPE pipes, modular water tanks, chemical storage vessels, cable trays, and fittings." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Our Products
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            High-strength, corrosion-proof piping, containment, and cable management composite systems.
          </p>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="bg-white border-b border-gray-100 sticky top-[56px] sm:top-[88px] z-30 shadow-sm">
        {/* Category Filters — horizontal scroll, no wrap */}
        <div className="relative">
          <div
            className="flex items-center gap-2 overflow-x-auto px-4 sm:px-6 lg:px-8 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-gray-100 hover:bg-primary/10 hover:text-primary text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="px-4 sm:px-6 lg:px-8 pb-4">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:bg-white focus:ring-2 focus:ring-primary/40 outline-none transition-all"
            />
            <FaSearch className="absolute left-3.5 top-3.5 text-gray-400" size={12} />
          </div>
        </div>
      </section>

      {/* Products Listing Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-150 p-8">
              <p className="text-gray-500 font-medium text-sm">No products found matching your search parameters.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                className="mt-4 bg-primary text-white font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-premium group transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-primary font-bold text-[10px] uppercase px-3 py-1 rounded-full border border-gray-100">
                        {p.category}
                      </div>
                    </div>
                    
                    <div className="p-5 space-y-2">
                      <h3 className="text-md font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {p.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex space-x-3">
                    <button
                      onClick={() => navigate(`/product/${p.id}`)}
                      className="flex-1 text-center bg-gray-150 hover:bg-primary hover:text-white text-gray-700 font-bold text-xs py-2.5 rounded-xl transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => navigate("/enquiry", { state: { selectedProduct: p.name } })}
                      className="flex-1 text-center bg-primary hover:bg-primary-dark text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-sm"
                    >
                      Quote Link
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
