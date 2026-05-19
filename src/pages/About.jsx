import Section from "../components/Section";

export default function About() {
  return (
    <Section title="About Us" subtitle="OUR IDENTITY">
      <div className="relative">

        {/* background glow */}
        <div className="absolute -top-24 right-0 w-[300px] h-[300px] bg-[#7c6cf6]/10 blur-[100px] rounded-full pointer-events-none" />

        {/* intro */}
        <div className="max-w-4xl mb-20">

          <h2
            className="
              text-[38px]
              md:text-[64px]
              font-light
              tracking-[-0.05em]
              leading-[0.95]
              text-black/85
            "
          >
            Education For
            <span
              className="
                block
                bg-gradient-to-r
                from-black/90
                via-black/60
                to-[#7c6cf6]
                bg-clip-text
                text-transparent
              "
            >
              A Brighter Future
            </span>
          </h2>

          <p
            className="
              mt-8
              text-[15px]
              md:text-[17px]
              leading-[1.95]
              tracking-[0.01em]
              text-black/65
              font-light
              max-w-3xl
            "
          >
            Smart Smile Way is dedicated to transforming educational
            institutions into globally competitive environments through
            innovation, operational excellence, and internationally aligned
            learning models.
          </p>

        </div>

        {/* cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* vision */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-black/[0.05]
              bg-white/60
              backdrop-blur-xl
              p-10
              md:p-14
              transition-all
              duration-700
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.05)]
            "
          >

            {/* glow */}
            <div
              className="
                absolute
                top-[-120px]
                right-[-120px]
                w-[260px]
                h-[260px]
                rounded-full
                bg-[#7c6cf6]/10
                blur-[90px]
              "
            />

            <div className="relative z-10">

              {/* label */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-4
                  py-2
                  rounded-full
                  bg-[#7c6cf6]/10
                  border
                  border-[#7c6cf6]/10
                "
              >
                <div className="w-2 h-2 rounded-full bg-[#7c6cf6]" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#7c6cf6]
                    font-medium
                  "
                >
                  Vision
                </span>
              </div>

              {/* title */}
              <h3
                className="
                  mt-10
                  text-[34px]
                  md:text-[48px]
                  font-light
                  tracking-[-0.05em]
                  leading-[0.95]
                  text-black/85
                "
              >
                Inspiring
                <br />
                Educational Growth
              </h3>

              {/* divider */}
              <div className="w-16 h-px bg-black/10 mt-8 mb-8" />

              {/* content */}
              <p
                className="
                  text-[15px]
                  md:text-[17px]
                  leading-[1.95]
                  tracking-[0.01em]
                  text-black/65
                  font-light
                "
              >
                To become a leading force in educational investment and
                management, transforming schools and nurseries into globally
                recognized, high-performance institutions through innovation
                and international standards.
              </p>

            </div>
          </div>

          {/* mission */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[36px]
              bg-[#0d1730]
              p-10
              md:p-14
              transition-all
              duration-700
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
            "
          >

            {/* gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#7c6cf6]/20
                via-transparent
                to-transparent
              "
            />

            <div className="relative z-10">

              {/* label */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                "
              >
                <div className="w-2 h-2 rounded-full bg-white" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/80
                    font-medium
                  "
                >
                  Mission
                </span>
              </div>

              {/* title */}
              <h3
                className="
                  mt-10
                  text-[34px]
                  md:text-[48px]
                  font-light
                  tracking-[-0.05em]
                  leading-[0.95]
                  text-white
                "
              >
                Delivering
                <br />
                Global Standards
              </h3>

              {/* divider */}
              <div className="w-16 h-px bg-white/10 mt-8 mb-8" />

              {/* content */}
              <p
                className="
                  text-[15px]
                  md:text-[17px]
                  leading-[1.95]
                  tracking-[0.01em]
                  text-white/75
                  font-light
                "
              >
                We design, develop, and operate international schools by
                integrating academic excellence, institutional governance, and
                financial efficiency, delivering scalable education models that
                meet global accreditation standards and workforce demands.
              </p>

            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
