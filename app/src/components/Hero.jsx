import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { animationWithGsap } from "../utils/animation";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 490 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 490) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    // gsap.to("#hero", {
    //   opacity: 1,
    //   delay: 2,
    // });
    animationWithGsap("#hero", {
      opacity: 1,
      delay: 1,
    });

    animationWithGsap("#cta", {
      opacity: 1,
      y: -50,
      duration: 2,
    });
  }, []);

  return (
    <section className=" w-full nav-height bg-black relative">
      <div className=" h-5/6 w-full flex-center flex-col">
        <p id="hero" className=" hero-title">
          iPhone 15 Pro
        </p>

        <div className=" md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            className=" pointer-events-none"
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className=" flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highLights" className="btn">
          Buy
        </a>
        <p className=" font-semibold text-xl">From ₹1,26,999</p>
      </div>
    </section>
  );
};

export default Hero;
