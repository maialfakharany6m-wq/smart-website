import { motion } from "framer-motion";
import Section from "../components/Section";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

/* ================= HERO ================= */

function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="min-h-screen flex items-center bg-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-300px] left-[-200px] w-[650px] h-[650px] bg-gray-100 rounded-full blur-3xl opacity-70" />

        <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-80" />

        <div className="absolute top-40 right-20 text-[180px] font-black text-gray-100 opacity-60">
          SSW
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* Logo */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <img
            src="/logos/logo.png"
            className="w-[420px] md:w-[500px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
        >
          <p className="text-[11px] tracking-[0.4em] text-gray-400 uppercase">
            Educational Investment Group
          </p>

          <h1 className="mt-6 text-[#0B1B3A] text-5xl md:text-7xl font-[Playfair_Display] leading-[1.02]">
            Smart Smile Way

            <span className="block text-[#8c52ff] mt-4 text-3xl md:text-4xl font-light">
             Education for a brighter Future
            </span>
          </h1>

          <div className="w-24 h-[2px] bg-gradient-to-r from-[#8c52ff] to-transparent my-10" />

          <p  className="
    text-gray-600
    leading-[2.1]
    max-w-xl
    text-[17px]
    md:text-[18px]
    font-[300]
    tracking-[0.01em]
  ">
            We build, operate & transform educational institutions into scalable international systems.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section className="py-36 bg-[#f7f8fc] relative overflow-hidden">

      <div className="absolute left-[-100px] top-20 w-[300px] h-[300px] bg-[#8c52ff]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">
          <p className="text-[11px] tracking-[0.35em] text-gray-400 uppercase">
            Vision · Mission
          </p>

          <h2 className="text-5xl md:text-6xl text-[#0B1B3A] font-[Playfair_Display] mt-5">
            About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Vision */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              bg-white
              p-12
              rounded-[32px]
              border border-gray-100
              shadow-sm
              relative
              overflow-hidden
            "
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#8c52ff]" />

            <h3 className="text-[11px] tracking-[0.35em] text-gray-400 uppercase mb-6">
              Vision
            </h3>

            <p className="text-gray-600 leading-[2] text-[15px]">
              To become a leading force in educational investment and management,
              transforming schools and nurseries into globally recognized institutions.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              bg-[#0B1B3A]
              p-12
              rounded-[32px]
              text-white
              relative
              overflow-hidden
            "
          >
            <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-[#8c52ff]/20 rounded-full blur-3xl" />

            <h3 className="text-[11px] tracking-[0.35em] text-blue-300 uppercase mb-6">
              Mission
            </h3>

            <p className="text-white/80 leading-[2] text-[15px]">
              We design, develop, and operate international schools with global standards and scalable systems.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

/* ================= SERVICES ================= */

function Services() {
  const services = [
    {
      title: "Institution Development",
      items: [
        "International school establishment",
        "Operational setup & licensing",
        "Full education system design"
      ]
    },
    {
      title: "Academic Systems",
      items: [
        "British, American & IB frameworks",
        "Curriculum design & alignment",
        "Academic performance systems"
      ]
    },
    {
      title: "Accreditation & Quality",
      items: [
        "International accreditation support",
        "Quality assurance frameworks",
        "Compliance & evaluation systems"
      ]
    },
    {
      title: "Human Capital",
      items: [
        "Teacher training programs",
        "Leadership development",
        "Performance management systems"
      ]
    },
    {
      title: "Strategy & Growth",
      items: [
        "Educational strategy consulting",
        "Institution scaling models",
        "Expansion planning"
      ]
    },
    {
      title: "Innovation & R&D",
      items: [
        "AI in education systems",
        "Digital transformation",
        "Smart learning environments"
      ]
    }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden">

      <div className="absolute right-0 top-0 text-[220px] font-black text-gray-50 leading-none">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-24">
          <p className="text-[11px] tracking-[0.35em] text-gray-400 uppercase">
            Systems · Strategy
          </p>

          <h2 className="text-5xl md:text-6xl text-[#0B1B3A] font-[Playfair_Display] mt-5">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border border-gray-100
                bg-gradient-to-b from-white to-gray-50
                p-8
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all duration-500
              "
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#8c52ff]" />

              <span className="absolute right-6 top-4 text-7xl font-black text-gray-100">
                0{i + 1}
              </span>

              <h3 className="text-[#0B1B3A] font-semibold text-[17px] mb-6 relative z-10">
                {s.title}
              </h3>

              <div className="w-12 h-[2px] bg-[#8c52ff] mb-6" />

              <ul className="space-y-3 relative z-10">
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-gray-600 text-[14px] leading-[1.8] flex gap-3"
                  >
                    <span className="text-[#8c52ff] mt-[2px]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* ================= EXECUTIVE ================= */

function ExecutiveSlider() {
  const leaders = [
    { name: "Eng. Sameer Abdullah", role: "Founder & CEO" },
    { name: "Mr. Ibrahim Eldibany", role: "Co-Founder" },
    { name: "Dr. Heba Sultan", role: "General Manager" },
    { name: "Eng. Mai Ashraf", role: "Tech Director" },
    { name: "Dr. Norhan Khaled", role: "American Education Manager" },
    { name: "Mrs. Samar Mansour", role: "British Education Manager" },
  ];

  return (
    <section className="py-40 bg-[#081120] text-white relative overflow-hidden">

      <div className="absolute left-[-120px] bottom-[-120px] w-[400px] h-[400px] bg-[#8c52ff]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-24">
          <p className="text-[11px] tracking-[0.35em] text-blue-300 uppercase">
            Leadership · Structure
          </p>

          <h2 className="text-5xl md:text-6xl font-[Playfair_Display] mt-5">
            Executive Team
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {leaders.map((l, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-[28px]
                p-8
                hover:bg-white/10
                transition
              "
            >
              <div className="w-12 h-[2px] bg-[#8c52ff] mb-6" />

              <h3 className="text-[18px] font-medium">
                {l.name}
              </h3>

              <p className="text-[11px] tracking-[0.35em] uppercase text-white/50 mt-4">
                {l.role}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* ================= IMPACT ================= */

/* ================= IMPACT ================= */

function Achievements() {

  const data = [
    ["4+", "Schools Managed"],
    ["10+", "Nurseries Managed"],
    ["15+", "Accreditations"]
  ];

  return (
    <section className="
      py-28
      bg-white
      relative
      overflow-hidden
    ">

      <div className="
        absolute
        top-[-180px]
        right-[-120px]
        w-[420px]
        h-[420px]
        bg-[#8c52ff]/5
        rounded-full
        blur-3xl
      " />

      <div className="
        max-w-6xl
        mx-auto
        px-6
        relative
        z-10
      ">

        {/* Heading */}
        <div className="
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-8
          mb-20
        ">

          <div>

            <p className="
              text-[10px]
              tracking-[0.45em]
              uppercase
              text-gray-400
              mb-5
            ">
              Education · Scale
            </p>

            <h2 className="
              text-4xl
              md:text-5xl
              font-[Playfair_Display]
              font-semibold
              tracking-[-0.05em]
              text-[#0B1B3A]
            ">
              Impact
            </h2>

          </div>

          <div className="
            w-24
            h-[1px]
            bg-gradient-to-r
            from-[#8c52ff]
            to-transparent
          " />

        </div>

        {/* Stats */}
        <div className="
          grid
          md:grid-cols-3
          border-y
          border-gray-100
        ">

          {data.map(([num, label], i) => (

            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`
                py-14
                px-6
                relative

                ${i !== 2 ? "md:border-r border-gray-100" : ""}
              `}
            >

              <div className="
                w-8
                h-[2px]
                bg-[#8c52ff]
                mb-8
              " />

              <h2 className="
                text-6xl
                md:text-7xl
                font-[Playfair_Display]
                font-semibold
                tracking-[-0.06em]
                text-[#0B1B3A]
                leading-none
              ">
                {num}
              </h2>

              <p className="
                mt-5
                text-[11px]
                tracking-[0.35em]
                uppercase
                text-gray-400
              ">
                {label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
/* ================= CTA ================= */

{/* ================= CTA ================= */}

function CTA() {
  return (
    <section
      className="
        py-44
        bg-[#060B16]
        relative
        overflow-hidden
      "
    >

      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute
          top-[-250px]
          left-[-150px]
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#8c52ff]/10
          blur-3xl
        " />

        <div className="
          absolute
          bottom-[-220px]
          right-[-120px]
          w-[550px]
          h-[550px]
          rounded-full
          bg-blue-500/10
          blur-3xl
        " />

        {/* Luxury Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

      </div>

      <div className="
        max-w-7xl
        mx-auto
        px-6
        relative
        z-10
      ">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[42px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            px-10
            md:px-20
            py-20
            md:py-28
            shadow-[0_20px_80px_rgba(0,0,0,0.25)]
          "
        >

          {/* Floating Glow */}
          <div className="
            absolute
            top-[-120px]
            right-[-120px]
            w-[320px]
            h-[320px]
            rounded-full
            bg-[#8c52ff]/20
            blur-3xl
          " />

          {/* Top Label */}
          <div className="
            flex
            items-center
            gap-4
            mb-10
            relative
            z-10
          ">

            <div className="
              w-12
              h-[1px]
              bg-gradient-to-r
              from-[#8c52ff]
              to-transparent
            " />

            <p className="
              text-[10px]
              tracking-[0.45em]
              uppercase
              text-white/50
            ">
              Smart Smile Way
            </p>

          </div>

          {/* Content */}
          <div className="
            grid
            md:grid-cols-2
            gap-16
            items-end
            relative
            z-10
          ">

            {/* LEFT SIDE */}
            <div>

              <h2 className="
                text-5xl
                md:text-7xl
                font-[Playfair_Display]
                font-semibold
                tracking-[-0.07em]
                leading-[0.95]
                text-white
              ">

                Education

                <span className="
                  block
                  mt-3
                  text-transparent
                  bg-gradient-to-r
                  from-[#8c52ff]
                  via-[#7f8cff]
                  to-[#38bdf8]
                  bg-clip-text
                ">
                  Beyond Classrooms
                </span>

              </h2>

            </div>

            {/* RIGHT SIDE */}
            <div className="md:pl-10">

              <p className="
                text-white/60
                text-[16px]
                leading-[2]
                font-[300]
              ">
                We don't simply manage institutions —
                we engineer educational ecosystems designed
                for international excellence, long-term growth,
                and transformational impact.
              </p>

              {/* CTA Row */}
              <div className="
                flex
                flex-wrap
                items-center
                gap-6
                mt-12
              ">

                {/* Button */}
                <button
                  onClick={() => {
                    document.getElementById("achievements")?.scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    px-10
                    py-4
                    rounded-full
                    bg-white
                    text-[#081120]
                    text-[12px]
                    tracking-[0.28em]
                    uppercase
                    font-medium
                    hover:scale-[1.03]
                    transition-all
                    duration-500
                  "
                >

                  <span className="relative z-10">
                    Discover More
                  </span>

                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#8c52ff]
                    to-[#38bdf8]
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  " />

                </button>

                {/* Small Text */}
                <p className="
                  text-[11px]
                  tracking-[0.35em]
                  uppercase
                  text-white/35
                ">
                  International Education Systems
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* ================= HOME ================= */

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">

      <Hero />

      <About />

      <Services />

      <ExecutiveSlider />

      <Achievements />

      <CTA />

    </div>
  );
}