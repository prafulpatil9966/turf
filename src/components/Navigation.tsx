import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "booking", "gallery", "events", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "booking", label: "Book Now" },
    { id: "gallery", label: "Gallery" },
    { id: "events", label: "Events" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-green-600">NexusArena</div>
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
