import Image from "next/image";
import React from "react";

export default function PartnersSection() {
  const partners = [
    { src: "/home_page_images/Banks/1.png", alt: "BANK OF CHENGDE" },
    { src: "/home_page_images/Banks/2.png", alt: "BANK OF BEIJING" },
    { src: "/home_page_images/Banks/3.png", alt: "CHINA CONSTRUCTION BANK" },
    {
      src: "/home_page_images/Banks/4.png",
      alt: "INDUSTRIAL AND COMMERCIAL BANK OF CHINA",
    },
    { src: "/home_page_images/Banks/5.png", alt: "BANK OF CHINA" },
    { src: "/home_page_images/Banks/6.png", alt: "AGRICULTURAL BANK OF CHINA" },
    { src: "/home_page_images/Banks/7.png", alt: "CHINA MERCHANTS BANK" },
    { src: "/home_page_images/Banks/8.png", alt: "BANK OF COMMUNICATIONS" },
    { src: "/home_page_images/Banks/9.png", alt: "CHINA CITIC BANK" },
    { src: "/home_page_images/Banks/10.png", alt: "CHINA MINSHENG BANK" },
    {
      src: "/home_page_images/Banks/11.svg",
      alt: "SHANGHAI PUDONG DEVELOPMENT BANK",
    },
    { src: "/home_page_images/Banks/12.png", alt: "CHINA EVERBRIGHT BANK" },
    { src: "/home_page_images/Banks/13.png", alt: "INDUSTRIAL BANK" },
    { src: "/home_page_images/Banks/14.png", alt: "PING AN BANK" },
    { src: "/home_page_images/Banks/15.png", alt: "HUAXIA BANK" },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5 max-w-6xl mx-auto mt-32">
      {partners.map((partner, index) => (
        <div key={index} className="relative w-full h-24">
          <Image
            src={partner.src}
            alt={partner.alt}
            title={partner.alt}
            width={176}
            height={121}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
