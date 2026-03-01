const tl = gsap.timeline();

// tl.from(".headline", { 
//     opacity: 0, 
//     y: 50, 
//     duration: 1.2, 
//     letterSpacing: "2em", // Dramatic reveal
//     ease: "power4.out" 
// })
// .from(".stat-item", { 
//     opacity: 0, 
//     y: 20, 
//     stagger: 0.2, // Animate one by one
//     duration: 0.8 
// }, "-=0.5"); // Start slightly before headline finishes
gsap.to("#car", {
  scrollTrigger: {
    trigger: ".scroll-section",
    start: "top top", // Animation starts when section hits top
    end: "bottom bottom", // Ends when we reach the end of 300vh
    scrub: 1, // Smooth "catch-up" delay for premium feel
  },
  x: "200vh", // Move the car up across the screen
  scale: 1,   // Zoom in slightly as it "approaches"
  ease: "none"  // Linear ease is best for scrubbed animations
});
gsap.to(".headline", {
  scrollTrigger: {
    trigger: ".scroll-section",
    start: "top top", // Animation starts when section hits top
    end: "bottom bottom", // Ends when we reach the end of 300vh
    scrub: 1, // Smooth "catch-up" delay for premium feel
    toggleActions: "play none none reverse",
  },
    opacity: 1,
    y: 0,                  // Move back to original position
    duration: 1,
    ease: "power2.out"
});
gsap.to(".stat-item", {
  scrollTrigger: {
    trigger: ".scroll-section",
    start: "top top", // Animation starts when section hits top
    end: "bottom bottom", // Ends when we reach the end of 300vh
    scrub: 1, // Smooth "catch-up" delay for premium feel
    toggleActions: "play none none reverse",
  },
    opacity: 1,
    y: 0,                  // Move back to original position
    duration: 1,
    ease: "power2.out"
});