import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sortie1 from "@/assets/rides/sortie-1.png";
import sortie2 from "@/assets/rides/sortie-2.png";

const images = [sortie1, sortie2];

const RidesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const getIndex = (offset: number) => (current + offset + total) % total;

  return (
    <div className="mt-16">
      <h3 className="font-barlow-condensed text-sm font-semibold uppercase tracking-[3px] text-sps-pink mb-8 text-center">
        Galerie
      </h3>
      <div className="relative flex items-center justify-center gap-4 md:gap-6">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: "hsl(264 70% 38% / 0.6)",
            border: "1px solid hsl(330 85% 49% / 0.4)",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Image précédente"
        >
          <ChevronLeft size={22} className="text-sps-pink" />
        </button>

        {/* Carousel track */}
        <div className="flex items-center justify-center gap-3 md:gap-5 overflow-hidden w-full max-w-[900px] mx-auto px-12 md:px-16">
          {/* Left peek image */}
          <div
            className="hidden sm:block flex-shrink-0 w-[140px] md:w-[180px] aspect-[4/5] rounded-lg overflow-hidden opacity-40 transition-all duration-500 scale-90"
            style={{
              boxShadow: "0 0 20px hsl(264 70% 20% / 0.5)",
            }}
          >
            <img
              src={images[getIndex(-1)]}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Center image */}
          <div
            className="flex-shrink-0 w-[240px] md:w-[320px] aspect-[4/5] rounded-xl overflow-hidden transition-all duration-500 scale-100"
            style={{
              boxShadow:
                "0 0 0 1px hsl(330 85% 49% / 0.3), 0 0 40px hsl(330 85% 49% / 0.15), 0 8px 32px hsl(264 80% 5% / 0.6)",
            }}
          >
            <img
              src={images[current]}
              alt={`Photo de sortie ${current + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right peek image */}
          <div
            className="hidden sm:block flex-shrink-0 w-[140px] md:w-[180px] aspect-[4/5] rounded-lg overflow-hidden opacity-40 transition-all duration-500 scale-90"
            style={{
              boxShadow: "0 0 20px hsl(264 70% 20% / 0.5)",
            }}
          >
            <img
              src={images[getIndex(1)]}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: "hsl(264 70% 38% / 0.6)",
            border: "1px solid hsl(330 85% 49% / 0.4)",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Image suivante"
        >
          <ChevronRight size={22} className="text-sps-pink" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background:
                i === current
                  ? "hsl(330 85% 49%)"
                  : "hsl(264 70% 38% / 0.4)",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={`Aller à l'image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RidesCarousel;
