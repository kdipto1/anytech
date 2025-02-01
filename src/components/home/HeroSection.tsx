import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home-hero__content__container"
      className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] svelte-n9olsd "
    >
      <div className="max-w-screen-xl mx-auto relative z-10 w-full h-full md:flex md:items-center md:justify-center">
        <div className="h-fit lg:flex-[65] xl:flex-[75]">
          <div className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <h1 className="text-7xl font-semibold leading-[115%]">
              Embrace the future of finance
            </h1>
            <p className="leading-[160%] font-semibold mt-6">
              Reimagine financial services with AnyTech’s open platform,
              distributed <br />
              banking solution that powers transformation
            </p>
          </div>
          <button className="md:py-[15.5px] py-[14px] px-[42px] rounded-sm text-link text-white flex items-center justify-center space-x-[8px] bg-orange-500 shadow-[0px_3px_3px_rgba(16,62,117,0.37)]">
            {" "}
            <span className="font-semibold">Reach Out to Us</span>{" "}
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform:
                  "translateX(var(--motion-translateX)); --motion-translateX: 0px",
              }}
            >
              <path
                d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full  pointer-events-none">
          <Image
            style={{
              clipPath:
                "polygon(67% 0,100% 0,100% 68%,80% 100%,0 100%,32% 51%)",
            }}
            src={"/home_page_images/hero_image.jpg"}
            fill
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] translate-x-[-12%] translate-y-[0.206%]
                clip-path-[polygon(50%_0,100%_50%,50%_100%,0_50%)]"
          />
          <div className="bg-[linear-gradient(190deg,#1f80f0_15.05%,rgba(31,128,240,0)_30.39%)]"></div>
        </div>
      </div>
    </section>
  );
}
