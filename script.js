// main.js

window.addEventListener('load', () => {
    const visionContent = document.querySelector(".vision_content");
    const lines = gsap.utils.toArray(".vision_title");
  
    // Clone first line for seamless loop
    const clone = lines[0].cloneNode(true);
    visionContent.appendChild(clone);
  
    // Recalculate line list after clone
    const updatedLines = gsap.utils.toArray(".vision_title");
    const lineHeight = 64; // 👈 4rem = 64px (assuming default root font-size is 16px)
  
    let index = 0;
  
    function scrollNext() {
      index++;
      gsap.to(visionContent, {
        y: -lineHeight * index,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          if (index >= updatedLines.length - 1) {
            gsap.set(visionContent, { y: 0 });
            index = 0;
          }
        }
      });
    }
  
    setInterval(scrollNext, 2000);
  });
  