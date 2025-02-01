import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="max-w-6xl md:mb-[128px] mx-auto">
      <div className="md:space-y-6 space-y-8 text-center">
        <h6 className="  uppercase text-blue-500 leading-[1.5] font-bold  tracking-[2.56px]  ">
          OUR PHILOSOPHY
        </h6>
        <h2 className="lg:text-[56px] lg:leading-[110%] lg:font-semibold text-[#0b305b] text-[32px] leading-[120%] font-semibold whitespace-pre-line">
          Human-centred innovation
        </h2>
      </div>
      <Image
        src="/home_page_images/PhilosophySection/1.png"
        width="2206"
        height="727"
        style={{}}
        sizes="95vw"
        className="h-full w-full hidden md:block py-8"
        alt="Image"
        loading="lazy"
      />

      {/*  */}
      {/* <ul id="home-philosophies__card__container" className="grid lg:grid-cols-3 grid-cols-2 gap-[30px]"><li className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm " style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1;"><figure className="w-fit rounded-full"><img srcset="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&amp;auto=format 50w" src="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?auto=format" width="50" height="50" style="" sizes="50px" alt="Full suite solutions" className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" loading="lazy"></figure> <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">Full-suite solutions</h4> <p className="text-body-1">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p></li><li className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm " style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1;"><figure className="w-fit rounded-full"><img srcset="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&amp;auto=format 50w" src="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?auto=format" width="50" height="51" style="" sizes="50px" alt="Simplify the complex" className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" loading="lazy"></figure> <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">Simplify the complex</h4> <p className="text-body-1">Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.</p></li><li className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm " style="transform: translateY(var(--motion-translateY)); --motion-translateY: 0px; opacity: 1;"><figure className="w-fit rounded-full"><img srcset="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&amp;auto=format 50w" src="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?auto=format" width="50" height="50" style="" sizes="50px" alt="Cutting-edge tech" className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" loading="lazy"></figure> <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">Cutting-edge tech</h4> <p className="text-body-1">We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.</p></li></ul> */}
      <ul
        id="home-philosophies__card__container"
        className="grid lg:grid-cols-3 grid-cols-2 gap-[30px]"
      >
        <li
          className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-6 space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-6"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <figure className="w-fit rounded-full">
            <Image
              src="/home_page_images/PhilosophySection/share.svg"
              width="50"
              height="50"
              alt="Full suite solutions"
              className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
              loading="lazy"
            />
          </figure>
          <h4 className="pace-y-[8px] md:space-y-sm lg:text-[24px] lg:leading-[130%] lg:font-semibold text-[#0b305b]">
            Full-suite solutions
          </h4>
          <p className="text-body-1">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </li>

        <li
          className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-6 space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-6"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <figure className="w-fit rounded-full">
            <Image
              src="/home_page_images/PhilosophySection/idea.png"
              width="50"
              height="51"
              alt="Simplify the complex"
              className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
              loading="lazy"
            />
          </figure>
          <h4 className="pace-y-[8px] md:space-y-sm lg:text-[24px] lg:leading-[130%] lg:font-semibold text-[#0b305b]">
            Simplify the complex
          </h4>
          <p className="text-body-1">
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </li>

        <li
          className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-6 space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-6"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <figure className="w-fit rounded-full">
            <Image
              src="/home_page_images/PhilosophySection/cpu.svg"
              width="50"
              height="50"
              alt="Cutting-edge tech"
              className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
              loading="lazy"
            />
          </figure>
          <h4 className="pace-y-[8px] md:space-y-sm lg:text-[24px] lg:leading-[130%] lg:font-semibold text-[#0b305b]">
            Cutting-edge tech
          </h4>
          <p className="text-body-1">
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </li>
      </ul>
    </section>
  );
}
