import React, { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "about", "projects", "skills", "experience", "contact"];

      // If at (or near) the bottom of the page → Contact is active
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      // Trigger line: 55% down the viewport
      const trigger = window.innerHeight * 0.55;

      // Walk in reverse — first section whose top is at/above the trigger wins
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= trigger) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full">

      {/* NAV CONTAINER */}
      <div className="px-4 pt-4">

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <ul className="
            flex justify-center items-center gap-1.5 lg:gap-3
            text-white py-2 px-3 lg:px-4
            rounded-full border border-white/20
            max-w-3xl mx-auto
            backdrop-blur-xl bg-black/50 shadow-2xl shadow-black/40
          ">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`
                      px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 block
                      ${
                        isActive
                          ? "whatsapp-glass-pill text-white font-bold"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* MOBILE BAR */}
        <div className="
          md:hidden flex justify-between items-center
          text-white py-3 px-5 rounded-full border border-white/20
          backdrop-blur-xl bg-black/50 shadow-lg
        ">
          <span className="whatsapp-glass-pill px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
            {activeSection}
          </span>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl hover:text-violet-400 transition-colors cursor-pointer"
          >
            ☰
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden absolute left-0 top-full w-full px-4 pt-2">
          <div className="
            rounded-2xl border border-white/20
            backdrop-blur-xl bg-black/80 shadow-2xl p-3
          ">
            <ul className="flex flex-col gap-2 text-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => {
                        setActiveSection(item.id);
                        setOpen(false);
                      }}
                      className={`
                        block py-2.5 px-4 rounded-xl text-base transition-all duration-200
                        ${
                          isActive
                            ? "whatsapp-glass-pill text-white font-bold"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
