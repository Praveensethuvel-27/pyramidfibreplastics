import React from "react";
import { industries } from "../data/industries";
import SEO from "../components/SEO";

const Industries = () => {
  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50">
      <SEO 
        title="Industries We Serve" 
        description="PYRAMID FIBRE PLASTICS manufactures composite pipes, tanks, and cable trays for Water Treatment, Chemical Processing, Oil & Gas, Power Plants, Marine, and Infrastructure." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Industries We Serve
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Custom engineered composite solutions addressing structural corrosion parameters across global industrial sectors.
          </p>
        </div>
      </section>

      {/* Sectors Description Directory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((ind, index) => (
            <div
              key={ind.id}
              className={`flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl overflow-hidden border border-gray-150 p-6 md:p-8 shadow-sm ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo */}
              <div className="w-full lg:w-1/2 h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Contents */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Industry Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  {ind.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {ind.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                    Core Applications:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ind.applications.map((app, appIdx) => (
                      <li key={appIdx} className="flex items-start space-x-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        <span className="leading-tight">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Industries;
