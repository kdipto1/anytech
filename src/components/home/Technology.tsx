import React from "react";

import CarouselCard from "../CarouselCard";
import CustomCarousel from "../Carousel";

export default function Technology() {
  const cards = [
    {
      title: "Customer focused",
      content: (
        <CarouselCard
          tagline="Customer focused"
          title="Purpose-built financial services"
          descriptions={[
            "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
            "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
          ]}
          foregroundImage="/home_page_images/Technology/1.jpg"
        />
      ),
    },
    {
      title: "Agile and adaptable",
      content: (
        <CarouselCard
          tagline="Agile and adaptable"
          title="Agile and adaptable for growth"
          descriptions={[
            "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
            "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
          ]}
          foregroundImage="/home_page_images/Technology/2.jpg"
        />
      ),
    },
    {
      title: "Compliance ready",
      content: (
        <CarouselCard
          tagline="Compliance ready"
          title="Manage compliance with ease"
          descriptions={[
            "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
            "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
          ]}
          foregroundImage="/home_page_images/Technology/3.png"
        />
      ),
    },
    {
      title: "Secure and safe",
      content: (
        <CarouselCard
          tagline="Secure and safe"
          title="Highly secure and safe"
          descriptions={[
            "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
            "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
          ]}
          foregroundImage="/home_page_images/Technology/4.jpg"
        />
      ),
    },
  ];
  return (
    <>
      <section className="max-w-6xl mx-auto mb-8">
        <header className=" md:space-y-6 space-y-8 text-center mb-8">
          <h6 className=" font-bold leading-[1.5] tracking-[2.5px]  uppercase text-blue-main">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h2 className="whitespace-pre-line  font-semibold leading-[120%] text-[#0b305b] text-[32px] lg:text-[56px] lg:leading-[110%] lg:font-semibold">
            The future of finance
          </h2>
        </header>

        <CustomCarousel cards={cards} autoplayInterval={5000} />
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
