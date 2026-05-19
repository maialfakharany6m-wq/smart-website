import { useRef } from "react";
import Navbar from "../components/Navbar";

export default function Achievements() {
  const accreditationsRef = useRef(null);

  const scroll = (dir) => {
    const el = accreditationsRef.current;
    if (!el) return;

    const amount = el.offsetWidth * 0.82;

    el.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const accreditations = [
    "/accreditations/pearson.jpg",
    "/accreditations/british-council.jpg",
    "/accreditations/cognia.png",
    "/accreditations/cambridge.png",
    "/accreditations/stem.png",
  ];

  const schools = [
    {
      name: "Oakland College School",
      img: "/schools/oakland.jpg",
      desc: "A modern educational institution focused on academic excellence, innovation, and international standards.",
    },
    {
      name: "West Cliff School",
      img: "/schools/west_cliff.jfif",
      desc: "Delivering structured international education systems with a strong academic foundation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f7] text-black overflow-hidden">
      <Navbar />

      {/* background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-250px] right-[-150px] w-[600px] h-[600px] rounded-full bg-[#7c6cf6]/8 blur-[150px]" />
        <div className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full bg-slate-300/20 blur-[150px]" />
      </div>

      <section className="relative z-10 pt-32 pb-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">

        {/* hero */}
        <div className="max-w-4xl mb-28">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/[0.05] bg-white/60 backdrop-blur-xl">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7c6cf6]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-black/45 font-medium">
              Excellence
            </span>
          </div>

          <h1 className="mt-8 text-[42px] md:text-[72px] font-light tracking-[-0.05em] leading-[0.95] text-black/85">
            Global Recognition
            <span className="block bg-gradient-to-r from-black/85 via-black/60 to-[#7c6cf6] bg-clip-text text-transparent">
              & Partnerships
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-[15px] md:text-[17px] leading-[1.95] tracking-[0.01em] text-black/65 font-light">
            Our partnerships, accreditations, and institutions reflect our
            commitment to delivering globally aligned educational excellence.
          </p>
        </div>

        {/* accreditations */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[10px] uppercase tracking-[0.35em] text-black/45 font-medium">
              Accreditations
            </h2>

            <div className="flex gap-3">
              <button
                onClick={() => scroll("prev")}
                className="w-11 h-11 rounded-full border border-black/[0.05] bg-white/70 backdrop-blur-xl hover:shadow-md transition"
              >
                ←
              </button>

              <button
                onClick={() => scroll("next")}
                className="w-11 h-11 rounded-full border border-black/[0.05] bg-white/70 backdrop-blur-xl hover:shadow-md transition"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={accreditationsRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-3 no-scrollbar"
          >
            {accreditations.map((img, i) => (
              <div
                key={i}
                className="min-w-[320px] md:min-w-[430px] h-[280px] md:h-[320px]
                rounded-[36px] border border-black/[0.04] bg-white/55
                backdrop-blur-2xl flex items-center justify-center
                transition-all duration-700 hover:-translate-y-1
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.04)]"
              >
                <img
                  src={img}
                  alt=""
                  className="h-[140px] md:h-[190px] object-contain transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* schools */}
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.35em] text-black/45 font-medium mb-12">
            Institutions
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {schools.map((school, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[38px]
                border border-black/[0.04] bg-white/55 backdrop-blur-2xl
                p-10 md:p-14 transition-all duration-700 hover:-translate-y-1
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.05)]"
              >
                <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-[#7c6cf6]/6 blur-[90px]" />

                <div className="relative z-10">
                  <div className="h-[220px] flex items-center justify-center mb-10">
                    <img
                      src={school.img}
                      alt=""
                      className="max-h-[220px] object-contain transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-[28px] md:text-[36px] font-light tracking-[-0.04em] text-black/85 leading-[1.05]">
                    {school.name}
                  </h3>

                  <div className="w-14 h-px bg-black/10 mt-6 mb-6" />

                  <p className="text-[15px] md:text-[17px] leading-[1.95] tracking-[0.01em] text-black/65 font-light">
                    {school.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
