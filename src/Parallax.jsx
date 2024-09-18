import React, { useEffect, useState } from "react";
import ButtonGroup from "./components/ButtonGroup";

const ParallaxHeroBanner = () => {
  const [offsetX, setOffsetX] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (window.innerWidth >= 1024) {
      // Only apply parallax effect on large screens (1024px and above)
      setOffsetX(scrollPosition * 0.5); // Adjust the speed of the parallax effect
    } else {
      setOffsetX(0); // No offset for small screens
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative lg:h-screen h-[90vh] overflow-hidden">
      <div
        className="absolute top-0 left-0 lg:w-[1550px] w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/c837a6_aa803204cef842e0b9ad7d820e64f77c~mv2.jpg')`,

          transform: `translateX(-${offsetX}px)`,
          backgroundAttachment: window.innerWidth < 1024 ? "fixed" : "scroll",
        }}
      ></div>
      <div className="relative z-10 h-full mt-36 lg:ms-20 ms-5 ">
        <h1 className="text-5xl font-bold text-black lg:text-7xl font-customFont w-60 md:w-full">
          Made to Be played{" "}
        </h1>
        <p className="mt-4 text-xl font-semibold md:text-2xl">
          The Very Best in Mobile Gaming
        </p>
        <div>
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default ParallaxHeroBanner;
