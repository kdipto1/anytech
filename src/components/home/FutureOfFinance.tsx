/* eslint-disable @next/next/no-img-element */
export default function FutureOfFinance() {
  return (
    <>
      <section className="max-w-7xl mt-[62px] mx-auto">
        <div className=" grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
          <div className="md:space-y-6 space-y-xs">
            <h6 className=" font-sans text-[#1f80f0] uppercase text-xs leading-6 tracking-[1.44px] font-bold lg:text-base lg:leading-6 lg:tracking-[2.56px] lg:font-bold">
              POWERING THE FUTURE OF FINANCE
            </h6>
            <h2 className=" font-sans text-[#0b305b] whitespace-pre-line text-[32px] leading-[120%] font-semibold lg:text-[56px] lg:leading-[110%]">
              Uncovering new ways to delight customers
            </h2>
            <div className="lg:pt-2">
              <div>
                <div className="text-[14px] md:text-base leading-[160%] font-normal text-[#164377]">
                  <p>
                    <strong>
                      AnyTech is revolutionising financial technology by
                      introducing innovative and real-time transaction account
                      processing capabilities, specifically designed for retail
                      financial services.
                    </strong>
                  </p>
                </div>
                <div className="text-[14px] md:text-base leading-[160%] font-normal text-[#164377]">
                  <p>
                    {" "}
                    <br /> Our modern approach surpasses traditional banking and
                    card processing systems, empowering you with the most
                    advanced technology for lasting success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div className="hidden md:block relative h-fit lg:text-clip">
            {/* Foreground Image */}
            <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]">
              <div className="transform translate-y-[2%] transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <img
                  className="object-cover w-full h-full overflow-visible"
                  src="/home_page_images/futureOfFinance/foreground.png"
                  alt="foreground frame"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>
      <svg
        className=" max-h-[240px] w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
