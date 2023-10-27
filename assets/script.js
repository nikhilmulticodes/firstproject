// Locomotive js - Smoot scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Gsap to animate
// gsap.from("#headings", {
//     stagger: .1,
//     y: 10,
//     duration: 2,
//     ease: Power2,
//     opacity: 0

// })

Shery.textAnimate("#headings h1", {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2", {
    y: 50,
    stagger: .3,
    opacity: 0,
    duration: 1,
    ease: Expo,
});

Shery.imageEffect("#imgtext img", {
    style: 3,
    config: { "uFrequencyX": { "value": 31.4, "range": [0, 100] }, "uFrequencyY": { "value": 11.57, "range": [0, 100] }, "uFrequencyZ": { "value": 25.62, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.75 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1.33, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },

});

gsap.from("#imgtext img", {
    z: -3,
    opacity: 0,
    duration: 2,
    ease: Expo.easenInOut,
})


Shery.imageEffect("#bimg", {
    style: 5,
    // debug: true,
    gooey: true,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.6943732289839426 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 1, "range": [1, 15] }, "durationOut": { "value": 0.55, "range": [0.1, 5] }, "durationIn": { "value": 0.91, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 2.07, "range": [0, 10] }, "metaball": { "value": 0.1, "range": [0, 2] }, "discard_threshold": { "value": 0.63, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 21.49, "range": [0, 100] } },

});
// Shery ja to animate images accordingly