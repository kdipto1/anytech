"use client";
import React, { useState, useEffect, useRef } from "react";

interface CarouselCard {
  /** Title to be shown in the navigation header */
  title: string;
  /** Content (typically your reusable card markup) to be rendered for this slide */
  content: React.ReactNode;
}

interface CardCarouselProps {
  cards: CarouselCard[];
  /** Autoplay interval in milliseconds */
  autoplayInterval?: number;
}

const CustomCarousel: React.FC<CardCarouselProps> = ({
  cards,
  autoplayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start autoplay on mount and reset when currentIndex changes.
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentIndex, autoplayInterval]);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, autoplayInterval);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Navigation Titles */}
      <div className="flex justify-center space-x-4 mb-4 ">
        {cards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`
              rounded-[200px] py-2 px-12 text-lg font-semibold 
              transition-colors duration-300
              ${
                currentIndex === idx
                  ? "text-blue-600  bg-blue-200"
                  : " text-blue-600 hover:bg-blue-50"
              }
            `}
          >
            {card.title}
          </button>
        ))}
      </div>
      {/* Carousel Slides */}
      <div className="relative h-full overflow-hidden">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`
              absolute w-full transition-opacity duration-1000
              ${currentIndex === idx ? "opacity-100 relative" : "opacity-0"}
            `}
          >
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
