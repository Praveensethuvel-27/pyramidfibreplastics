import React, { useState } from "react";
import { FaSearch, FaClock, FaUser, FaArrowRight, FaTimes } from "react-icons/fa";
import { blogs } from "../data/blogs";
import SEO from "../components/SEO";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ["All", "Pipes & Materials", "Tank Maintenance", "Water Treatment", "Installation & Engineering", "Safety & Compliance"];

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50">
      <SEO 
        title="Industrial Engineering Blog" 
        description="Read research papers and guidelines on FRP piping, GRP panel tanks, chemical vessel testing, and safety compliance from PYRAMID FIBRE PLASTICS." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Engineering Journal
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Technical papers, maintenance guidelines, and composite installation resources.
          </p>
        </div>
      </section>

      {/* Filter and Search controls */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[88px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search engineering papers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:bg-white focus:ring-1 focus:ring-primary outline-none"
            />
            <FaSearch className="absolute left-3.5 top-3.5 text-gray-400" size={12} />
          </div>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-150 p-8">
              <p className="text-gray-500 font-medium text-sm">No articles found matching your query.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                className="mt-4 bg-primary text-white font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-premium group transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase px-3 py-1 rounded-full">
                        {article.category}
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-3">
                      <div className="flex items-center space-x-3 text-[10px] text-gray-400">
                        <span className="flex items-center space-x-1">
                          <FaUser size={8} />
                          <span>{article.author}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <FaClock size={8} />
                          <span>{article.readTime}</span>
                        </span>
                      </div>
                      
                      <h3 className="text-md font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-4 border-t border-gray-50">
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-primary hover:text-primary-dark mt-4 cursor-pointer"
                    >
                      <span>Read Technical Paper</span>
                      <FaArrowRight size={8} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Full Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-150 animate-scale-up">
            {/* Header bar */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center z-10">
              <span className="bg-primary/10 text-primary font-bold text-[9px] uppercase px-3 py-1 rounded-full">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full cursor-pointer focus:outline-none"
                aria-label="Close Article"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 leading-tight">
                  {activeArticle.title}
                </h2>
              </div>

              {/* Formatted Content */}
              <div className="text-xs text-gray-600 leading-relaxed whitespace-pre-line border-t border-gray-100 pt-6 space-y-4 font-normal">
                {activeArticle.content.split("\n\n").map((para, idx) => {
                  if (para.trim().startsWith("###")) {
                    return (
                      <h4 key={idx} className="text-sm font-bold text-gray-950 pt-2 uppercase tracking-wide">
                        {para.replace("###", "").trim()}
                      </h4>
                    );
                  }
                  return <p key={idx}>{para.trim()}</p>;
                })}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="border-t border-gray-100 p-6 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-primary hover:bg-primary-dark text-white font-bold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
