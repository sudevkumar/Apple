import gsap from "gsap";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Chips = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },

      opacity: 0,
      scale: 0,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to("#frameVideo", {
      scrollTrigger: {
        trigger: "#frameVideo",
        toggleActions: "play pause reverse restart",
        start: "10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
  }, []);

  return (
    <section className=" common-padding">
      <div className="screen-max-width">
        <div id="chip" className=" flex-center w-full my-20">
          <img src={chipImg} alt="chipImage" width={180} height={180} />
        </div>

        <div className=" flex flex-col items-center">
          <h2 className="hiw-title">
            a17 Pro chip.
            <br />A monster win for gaming
          </h2>
          <p className="hiw-subtitle">
            It’s here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className=" relative h-full flex-center">
            <div className=" overflow-hidden flex-center">
              <img
                src={frameImg}
                alt="frame"
                className=" bg-transparent relative z-10 w-[80%]"
              />
            </div>
            <div className=" hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                muted
                autoPlay
                ref={videoRef}
                id="frameVideo"
              >
                <source src={frameVideo} typeof="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chips;
