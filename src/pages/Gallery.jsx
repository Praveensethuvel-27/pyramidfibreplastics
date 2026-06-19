import React, { useState } from "react";
import { FaEye, FaPlay, FaImage, FaVideo } from "react-icons/fa";
import Lightbox from "../components/UI/Lightbox";
import SEO from "../components/SEO";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState({ isOpen: false, image: "", title: "" });

  const filterCategories = ["All", "Projects", "Factory", "Products", "Videos"];

  const items = [
    {
      id: 1,
      type: "Projects",
      title: "Desalination Plant Seawater Intake Pipeline",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      desc: "Buried DN 2400 GRP pipeline installation."
    },
    {
      id: 2,
      type: "Factory",
      title: "Automated Winding Line #3",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      desc: "Filament wrapping on DN 3000 mandrel."
    },
    {
      id: 3,
      type: "Products",
      title: "Concentrated Acid Storage Tanks",
      image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=800&q=80",
      desc: "Dual laminate PP-FRP vessels completed."
    },
    {
      id: 4,
      type: "Projects",
      title: "Sulfur Extraction Stack Ducting",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
      desc: "FRP ventilation ducts mounted on structural rack."
    },
    {
      id: 5,
      type: "Products",
      title: "Heavy Duty Pultruded Cable Trays",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      desc: "Corrosion proof ladder cable trays ready for dispatch."
    },
    {
      id: 6,
      type: "Factory",
      title: "Hydrostatic Testing Bay",
      image: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=800&q=80",
      desc: "Pipes undergoing pressure integrity checks."
    },
    {
      id: 7,
      type: "Videos",
      title: "Drone View of Composite Production Plant",
      image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80",
      desc: "Walkthrough of CNC filament winding operations."
    },
    {
      id: 8,
      type: "Videos",
      title: "GRP Pipe Double Bell Joint Assembly",
      image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80",
      desc: "Engineering instruction video for coupling joint assembly."
    }
  ];

  const filteredItems = items.filter(
    (item) => activeFilter === "All" || item.type === activeFilter
  );

  const handleOpenLightbox = (image, title, isVideo) => {
    if (isVideo) {
      // In case of video, we can display the cover image or a simulated player, let's show the cover in lightbox
      setLightbox({
        isOpen: true,
        image: image,
        title: `${title} (Video Demonstration - Play simulated in browser)`
      });
    } else {
      setLightbox({
        isOpen: true,
        image: image,
        title: title
      });
    }
  };

  return (
    <div className="pt-24 select-none min-h-screen bg-gray-50">
      <SEO 
        title="Gallery & Completed Projects" 
        description="Browse through photographs and video walkthroughs of our manufacturing facility, GRP pipes pultrusion lines, and completed chemical and municipal piping projects." 
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Project & Factory Gallery
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A visual overview of completed installations, winding chambers, and certified composite ranges.
          </p>
        </div>
      </section>

      {/* Filter Menu Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-2 md:space-x-4">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-100 hover:bg-gray-250 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => {
              const isVideo = item.type === "Videos";
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-premium group transition-all duration-300 relative flex flex-col justify-between"
                >
                  <div className="relative overflow-hidden h-52 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      <button
                        onClick={() => handleOpenLightbox(item.image, item.title, isVideo)}
                        className="bg-white hover:bg-primary text-gray-950 hover:text-white p-3 rounded-full shadow-lg transition-colors cursor-pointer"
                        aria-label={isVideo ? "Play Video" : "View Image"}
                      >
                        {isVideo ? <FaPlay size={14} /> : <FaEye size={14} />}
                      </button>
                    </div>

                    {/* Media Type Icon indicator */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1.5 border border-white/20">
                      {isVideo ? (
                        <>
                          <FaVideo className="text-red-500" size={10} />
                          <span className="text-[10px] text-gray-700">Video</span>
                        </>
                      ) : (
                        <>
                          <FaImage className="text-primary" size={10} />
                          <span className="text-[10px] text-gray-700">{item.type}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="p-5 space-y-1 bg-white">
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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

export default Gallery;
