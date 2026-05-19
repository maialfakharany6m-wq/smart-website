import { memo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App() {

  const ceo = {
    name: "Eng. Sameer Abdullah",
    role: "Founder & CEO",
    img: "/exec/exec1.jpg",
    desc:
      "CEO of Smart Smile Way and Education Consultant specialized in both the British and American education systems, focused on innovation, academic excellence, and future-ready learning."
  };

  const generalManager = {
    name: "Dr. Heba Sultan",
    role: "General Manager",
    img: "/exec/exec3.jpg",
    desc:
      "She Leads institutional operations and drives performance excellence by strengthening educational quality, systems, and organizational efficiency."
  };

  const executiveManager = {
    name: "Mr. Ibrahim Elbiblany",
    role: "Executive Manager",
    img: "/exec/2.jpg",
    desc:
      "He is the Co-Founder of Smart Smile Way who is responsible of overseeing organizational growth, operational alignment, and strategic execution while ensuring smooth coordination across all departments."
  };

  const techDirector = {
    name: "Eng. Mai Ashraf",
    role: "Head of R&D",
    img: "/team/Mai-Ashraf.png",
    desc:
      " An Expert in AI and other technologies with a master’s degree and experience in teaching and she leads the technology integration, digital transformation, and all research & development initiatives across the organization."
  };

  const educationTeam = [
    {
      name: "Dr. Norhan Khaled",
      role: "American Education Manager",
      img: "/exec/exec6.png",
      desc:
        "Educational leader of the American Division with expertise in curriculum development, teacher mentoring, and academic leadership. She holds a Professional Educator Diploma (PED) from the American University in Cairo, a Postgraduate Certificate in Education (PGCE), and a Master of Arts in Education from the University of Liverpool."
    },
    {
      name: "Mrs. Samar Mansour",
      role: "British Education Manager",
      img: "/exec/exec5.png",
      desc:
        "Educational leader of the British Division with extensive experience in building inclusive learning environments and supporting academic growth.She holds a Professional Educator Diploma (PED), a Postgraduate Certificate in Education (PGCE), and a Master of Arts in Education from the American University in Cairo."
    }
  ];

  const rdTeam = [
    {
      name: "Eng.Habiba ElGohary",
      role: "R&D Specialist",
      img: "/team/Habiba-ElGohary.jpg",
      desc:
        "She leads the AI team within the Research & Development department, working alongside experienced engineers specialized in the field. With a background in teaching Computer Science at the university level, she is also pursuing a master’s degree in Artificial Intelligence with a focus on medical applications and healthcare technologies."
    },
    {
      name: "Eng.Abdelrahman Hesham",
      role: "R&D Specialist",
      img: "/team/abdelrahman-hesham.jpg",
      desc:
        "He leads the advanced Engineering divisions within the Research & Development department, working alongside experienced industry professionals and engineers. In addition to his role, he works as an engineer at Valeo, contributing to major industry projects. He is a Mechatronics Engineering graduate from Ain Shams University"
    }
  ];

  // CONNECTOR
  const Connector = () => (
    <div className="flex justify-center py-12">

      <div className="
        relative
        w-px
        h-24
        bg-gradient-to-b
        from-transparent
        via-[#7c6cf6]/30
        to-transparent
      ">

        <div className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-2
          h-2
          rounded-full
          bg-[#7c6cf6]
        " />

      </div>

    </div>
  );

  // PORTRAIT
  const Portrait = memo(({ src, featured = false }) => (
    <div className="relative flex justify-center">

      <div
        className={`
          relative
          rounded-full
          p-[3px]
          bg-gradient-to-br
          from-[#7c6cf6]/60
          via-white
          to-[#7c6cf6]/20
          transition-all
          duration-700
          ${featured
            ? "w-52 h-52 md:w-64 md:h-64"
            : "w-32 h-32 md:w-36 md:h-36"
          }
        `}
      >

        <div className="
          w-full
          h-full
          rounded-full
          overflow-hidden
          bg-white
        ">

          <img
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width="500"
            height="500"
            draggable={false}
            className="
              w-full
              h-full
              object-cover
              object-top
              transition
              duration-700
              group-hover:scale-[1.03]
            "
          />

        </div>

      </div>

    </div>
  ));

  // CARD
  const TeamCard = memo(({ member, featured = false }) => (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[38px]
        border
        border-black/[0.04]
        bg-white/55
        backdrop-blur-2xl
        transition-all
        duration-700
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.04)]
        ${featured ? "p-12 md:p-16" : "p-8 md:p-10"}
      `}
    >

      {/* glow */}
      <div className="
        absolute
        top-[-120px]
        right-[-120px]
        w-[280px]
        h-[280px]
        rounded-full
        bg-[#7c6cf6]/6
        blur-[100px]
      " />

      {/* top line */}
      <div className="
        absolute
        top-0
        left-0
        w-full
        h-px
        bg-gradient-to-r
        from-transparent
        via-black/5
        to-transparent
      " />

      <div className="relative z-10">

        {/* portrait */}
        <Portrait src={member.img} featured={featured} />

        {/* name */}
        <h3
          className={`
            text-center
            mt-8
            font-light
            tracking-[-0.04em]
            leading-[1]
            text-black/85
            ${featured
              ? "text-[38px] md:text-[54px]"
              : "text-[24px] md:text-[30px]"
            }
          `}
        >
          {member.name}
        </h3>

        {/* role */}
        <div className="flex justify-center mt-5">

          <div className="
            px-5
            py-2.5
            rounded-full
            bg-black/[0.03]
            border
            border-black/[0.04]
          ">

            <p className="
              text-[10px]
              uppercase
              tracking-[0.32em]
              text-black/45
              font-medium
            ">
              {member.role}
            </p>

          </div>

        </div>

        {/* divider */}
        <div className="flex justify-center mt-7 mb-7">

          <div className="
            w-20
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#7c6cf6]/30
            to-transparent
          " />

        </div>

        {/* desc */}
        <div className="max-w-lg mx-auto">

          <p className="
            text-center
            text-[15px]
            leading-[1.9]
            text-black/55
            font-normal
          ">
            {member.desc}
          </p>

        </div>

      </div>

    </div>
  ));

  return (
    <div className="min-h-screen bg-[#f8f8f7] text-black overflow-hidden">

      {/* REMOVED CURSOR FOR PERFORMANCE */}
      {/* <Cursor /> */}

      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {/* subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            bg-[size:90px_90px]
          "
        />

        {/* glow top */}
        <div
          className="
            absolute
            top-[-250px]
            right-[-150px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-[#7c6cf6]/8
            blur-[150px]
          "
        />

        {/* glow bottom */}
        <div
          className="
            absolute
            bottom-[-250px]
            left-[-150px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#94a3b8]/8
            blur-[150px]
          "
        />

      </div>

      <section className="relative z-10 pt-32 px-6 md:px-16 lg:px-24 pb-32">

        {/* HERO */}
        <div className="text-center max-w-5xl mx-auto mb-32 relative">

          {/* label */}
          <div className="
            inline-flex
            items-center
            gap-3
            px-5
            py-2.5
            rounded-full
            border
            border-black/[0.05]
            bg-white/60
            backdrop-blur-xl
          ">

            <div className="w-1.5 h-1.5 rounded-full bg-[#7c6cf6]" />

            <span className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-black/45
              font-medium
            ">
              Leadership Team
            </span>

          </div>

          {/* title */}
          <div className="mt-10">

            <h1 className="
              text-[42px]
              md:text-[72px]
              font-light
              tracking-[-0.05em]
              leading-[0.95]
              text-black/85
            ">

              The Team

              <span className="
                block
                bg-gradient-to-r
                from-black/85
                via-black/60
                to-[#7c6cf6]
                bg-clip-text
                text-transparent
              ">
                Behind The Vision
              </span>

            </h1>

          </div>

        </div>

        {/* CEO */}
        <div className="max-w-5xl mx-auto">
          <TeamCard member={ceo} featured />
        </div>

        <Connector />

        {/* GENERAL MANAGER */}
        <div className="max-w-3xl mx-auto">
          <TeamCard member={generalManager} />
        </div>

        <Connector />

        {/* LEVEL 2 */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24">

          <TeamCard member={executiveManager} />

          <TeamCard member={techDirector} />

        </div>

        <Connector />

        {/* DIVISIONS */}
        <div className="grid xl:grid-cols-2 gap-12">

          {/* EXECUTIVE */}
          <div className="
            relative
            rounded-[38px]
            border
            border-black/[0.04]
            bg-white/45
            backdrop-blur-2xl
            p-8
            md:p-12
          ">

            <div className="mb-14">

              <p className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-black/40
                font-medium
                mb-5
              ">
                Division
              </p>

              <h2 className="
                text-[34px]
                md:text-[46px]
                font-light
                tracking-[-0.05em]
                leading-[1]
                text-black/85
              ">
                Executive
                <br />
                Management
              </h2>

              <div className="w-14 h-px bg-black/10 mt-7" />

            </div>

            <div className="grid gap-8">

              {educationTeam.map((member, i) => (
                <TeamCard key={i} member={member} />
              ))}

            </div>

          </div>

          {/* R&D */}
          <div className="
            relative
            rounded-[38px]
            border
            border-black/[0.04]
            bg-white/45
            backdrop-blur-2xl
            p-8
            md:p-12
          ">

            <div className="mb-14">

              <p className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-black/40
                font-medium
                mb-5
              ">
                Division
              </p>

              <h2 className="
                text-[34px]
                md:text-[46px]
                font-light
                tracking-[-0.05em]
                leading-[1]
                text-black/85
              ">
                Research &
                <br />
                Development
              </h2>

              <div className="w-14 h-px bg-black/10 mt-7" />

            </div>

            <div className="grid gap-8">

              {rdTeam.map((member, i) => (
                <TeamCard key={i} member={member} />
              ))}

            </div>

          </div>

        </div>

      </section>

         </div>
  );
}
