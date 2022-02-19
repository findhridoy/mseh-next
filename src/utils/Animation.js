// Menu Animation
export const menuAnimation = (tl) => {
  tl.to(".bar1", 1, {
    y: 5,
    rotation: 45,
    ease: "Expo.easeInOut",
    backgroundColor: "black",
  })
    .to(".bar2", 1, {
      y: -5,
      rotation: -45,
      ease: "Expo.easeInOut",
      delay: -1,
      backgroundColor: "black",
    })
    .to(".menu__open", 1.5, {
      borderColor: "black",
      delay: -1.5,
    })
    .to(".menu__container", 2, {
      right: 0,
      ease: "Expo.easeInOut",
      delay: -2,
    })
    .to(".nav__overlay", 2, {
      left: "100%",
      ease: "power4.easeInOut",
    });
};
