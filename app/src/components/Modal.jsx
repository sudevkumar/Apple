import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ModalView from "./ModalView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants/index";
import { animationWithGsapTimeline } from "../utils/animation";

const Modal = () => {
  const [size, setsize] = useState("small");
  const [model, setmodel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // Camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Model

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // Rotaion

  const [smallRotation, setSmallRotaion] = useState(0);
  const [largeRotation, setLargeRotaion] = useState(0);

  // Time Line
  const tl = gsap.timeline();
  useEffect(() => {
    if (size === "large") {
      animationWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }
    if (size === "small") {
      animationWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <section className=" common-padding">
      <div className=" screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className=" w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModalView
              index={1}
              groupRef={small}
              gsapType={"view1"}
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotaion}
              item={model}
              size={size}
            />

            <ModalView
              index={2}
              groupRef={large}
              gsapType={"view2"}
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotaion}
              item={model}
              size={size}
            />

            <Canvas
              className=" w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                overflow: "hidden",
                right: 0,
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className=" mx-auto w-full">
            <p className=" text-sm font-light text-center mb-5">
              {model.title}
            </p>

            <div className=" flex-center">
              <ul className=" color-container">
                {models.map((item, ind) => (
                  <li
                    key={ind}
                    className=" w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setmodel(item)}
                  />
                ))}
              </ul>

              <button className=" size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setsize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
