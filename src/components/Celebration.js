import { gsap } from "gsap";

const emojis = ["🎉", "🎊", "✨", "💎", "💥", "🔥"];

export const triggerCelebration = (numberRef, sectionRef) => {
  gsap.fromTo(
    numberRef.current,
    { scale: 0, rotation: 0 },
    {
      scale: 1.5,
      rotation: 360,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    }
  );

  const container = sectionRef.current || document.body;

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "absolute w-2 h-2 rounded-full";
    confetti.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.left = "50%";
    confetti.style.top = "50%";
    confetti.style.transform = "translate(-50%, -50%)";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = 9999;

    container.appendChild(confetti);

    gsap.fromTo(
      confetti,
      { x: 0, y: 0, opacity: 1 },
      {
        x: (Math.random() - 0.5) * 1920,
        y: (Math.random() - 0.5) * 1080,
        opacity: 0,
        duration: 1.5 + Math.random(),
        ease: "power2.out",
        onComplete: () => confetti.remove(),
      }
    );
  }
};
