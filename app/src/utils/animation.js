import gsap from "gsap";

export const animationWithGsapTimeline = (
  timeline,
  rotaionRef,
  rotaionState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotaionRef.current.rotaion, {
    y: rotaionState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};

export const animationWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      // start: "top 95%",
      ...scrollProps,
    },
  });
};
