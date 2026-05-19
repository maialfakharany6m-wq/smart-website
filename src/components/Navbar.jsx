import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Achievements", path: "/achievements" },
    { name: "Meet Our Team", path: "/executive" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1B3A]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <div className="text-white tracking-[0.2em] text-xs md:text-sm">
          SMART SMILE WAY
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-xs">
          {links.map((l) => {
            const active = location.pathname === l.path;

            return (
              <Link
                key={l.path}
                to={l.path}
                className={`transition ${
                  active
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {l.name.toUpperCase()}
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-[#0B1B3A]/95">
          {links.map((l) => {
            const active = location.pathname === l.path;

            return (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={`text-sm transition ${
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
