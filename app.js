// // interaction design
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".one", {
//     scrollTrigger: {
//         trigger: ".one",
//         pin: ".about",
//         start: "top center",
//         end: "bottom 0%",
//         markers: true,
//         pinSpacing: true,
//         stagger: 0.5,
//         scrub: 0.2,
//         toggleActions: "restart pause reverse pause",
//     },
//     x: 500,
//     duration: 3,
//     y: 0,
//     rotation: 360,
// });

// gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        // trigger: ".one",
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end: "bottom 10%",
        // markers: true,
        scrub: 1,
        pin: ".speciality",
    },
});
tl.to(".st h3", {
    x: 100,
    duration: 3,
});

tl.to(".text", {
    x: -600,
    duration: 3,
});
tl.to(".one", {
    x: 10,
    y: 100,
    rotation: 360,
    duration: 3,
});
tl.to(".text-one", {
    y: 100,
    x: 100,
    duration: 3,
});

tl.to(".ft h3", {
    scrollTrigger: {
        pin: ".footer",
        pinSpacing: true,
    },
    x: -100,
    duration: 3,
    rotation: 360,
});

// this is proper way to code