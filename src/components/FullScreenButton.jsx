import { Maximize2, Minimize2 } from "lucide-react";

export default function FullScreenButton({ toggleFullScreen, isFull }) {
  return (
    <button
      onClick={toggleFullScreen}
      className="absolute top-2 right-2 text-xl flex items-center gap-2 px-3 py-3 text-white focus:border-none font-semibold rounded-md shadow-md hover:bg-blue-100/20 transition-all duration-300"
    >
      {isFull ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
    </button>
  );
}
