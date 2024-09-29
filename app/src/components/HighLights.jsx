import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const HighLights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highLights"
      className=" w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className=" screen-max-width">
        <div className=" mb-12 w-full md:flex items-end justify-between">
          <h1 className="section-heading" id="title">
            Get the highlights.
          </h1>

          <div className=" flex flex-wrap items-end gap-5">
            <p className=" link">
              Watch the film
              <img src={watchImg} alt="play" className=" ml-2" />
            </p>

            <p className=" link">
              Watch the event
              <img src={rightImg} alt="play" className=" ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default HighLights;
