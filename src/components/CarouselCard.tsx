"use client";
import React from "react";

interface ReusableCardProps {
  /** Optional tagline above the main title */
  tagline?: string;
  /** Main title or headline */
  title: string;
  /** Array of description paragraphs */
  descriptions: string[];
  /** Source URL for the foreground image */
  foregroundImage: string;
  /** Alt text for the foreground image */
  foregroundAlt?: string;
}

const CarouselCard: React.FC<ReusableCardProps> = ({
  tagline = "POWERING THE FUTURE OF FINANCE",
  title,
  descriptions,
  foregroundImage,
  foregroundAlt = "foreground frame",
}) => {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative p-16 bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.1)] m-8">
      {/* Left Column: Text Content */}
      <div className="md:space-y-6 space-y-xs">
        <h6 className="font-sans text-[#1f80f0] uppercase text-xs leading-6 tracking-[1.44px] font-bold lg:text-base lg:leading-6 lg:tracking-[2.56px] lg:font-bold">
          {tagline}
        </h6>
        <h2 className="font-sans text-[#0b305b] whitespace-pre-line text-[32px] leading-[120%] font-semibold lg:text-[56px] lg:leading-[110%]">
          {title}
        </h2>
        <div className="lg:pt-2">
          <div>
            {descriptions.map((desc, idx) => (
              <div
                key={idx}
                className="text-[14px] md:text-base leading-[160%] font-normal text-[#164377] mb-4 last:mb-0"
              >
                <p>{idx === 0 ? <strong>{desc}</strong> : desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Image (only visible on md and up) */}
      <div className=" ">
        <div className="hidden md:block h-[425px]">
          <div className="">
            <img
              className="h-full w-full object-cover rounded-[16px]"
              src={foregroundImage}
              alt={foregroundAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
