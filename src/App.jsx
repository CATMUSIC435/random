import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import BorderEffect from "./components/BorderEffect";
import ControlPanel from "./components/ControlPanel";
// import SpinButton from "./components/SpinButton";
import RandomDisplay from "./components/RandomDisplay";
import FullScreenButton from "./components/FullScreenButton";
import { triggerCelebration } from "./components/Celebration";

export default function App() {
  const [maxNumber, setMaxNumber] = useState("");
  const [displayNumber, setDisplayNumber] = useState(null);
  const [finalNumber, setFinalNumber] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isFull, setIsFull] = useState(false);

  const numberRef = useRef(null);
  const sectionRef = useRef(null);
  const borderRef = useRef(null);
  const spinSound = useRef(null);
  const winSound = useRef(null);

  useEffect(() => {
    spinSound.current = new Audio("/sounds/spin.mp3");
    spinSound.current.loop = true;
    winSound.current = new Audio("/sounds/win.mp3");
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      sectionRef.current.requestFullscreen().then(() => setIsFull(true));
    } else {
      document.exitFullscreen().then(() => setIsFull(false));
    }
  };

  const handleStart = () => {
    if (!maxNumber || isRunning) return;
    const max = parseInt(maxNumber, 10);
    if (isNaN(max) || max <= 0) {
      alert("⚠️ Vui lòng nhập số hợp lệ!");
      return;
    }

    setFinalNumber(null);
    setDisplayNumber(null);
    setIsRunning(true);

    spinSound.current.currentTime = 0;
    spinSound.current.play();

    gsap.to(borderRef.current, {
      borderImage:
        "linear-gradient(90deg, #ff4d4d, #ffa64d, #4dff88, #4ddfff, #ff4df2) 1",
      borderWidth: 12,
      duration: 3,
      repeat: -1,
      ease: "none",
      borderStyle: "solid",
      onUpdate: () => {
        borderRef.current.style.borderImageSlice = 1;
      },
    });

    let interval = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * max) + 1);
    }, 60);

    setTimeout(() => {
      clearInterval(interval);
      const result = Math.floor(Math.random() * max) + 1;
      setDisplayNumber(result);
      setFinalNumber(result);
      setIsRunning(false);
      spinSound.current.pause();
      winSound.current.currentTime = 0;
      winSound.current.play();

      gsap.killTweensOf(borderRef.current);
      gsap.to(borderRef.current, { borderWidth: 0, duration: 0.5 });
      setTimeout(() => triggerCelebration(numberRef, sectionRef), 300);
    }, 2000);
  };

  return (
    <div
      ref={sectionRef}
      onClick={handleStart}
      className="cursor-pointer flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden relative bg-center bg-cover"
      style={{ backgroundImage: `url(/atsaigonriverside-all.png)` }}
    >
      <BorderEffect ref={borderRef} />

      <FullScreenButton toggleFullScreen={toggleFullScreen} isFull={isFull} />

      <ControlPanel maxNumber={maxNumber} setMaxNumber={setMaxNumber} />

      <RandomDisplay
        displayNumber={displayNumber}
        finalNumber={finalNumber}
        isRunning={isRunning}
        numberRef={numberRef}
      />
    </div>
  );
}
