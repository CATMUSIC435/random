export default function SpinButton({ handleStart, isRunning }) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4">
      <div className="w-full text-center">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className={`cursor-pointer relative px-8 py-4 text-2xl font-bold rounded-full transition-all duration-300 ease-out ${
            isRunning
              ? "bg-gray-400 cursor-not-allowed text-gray-100 shadow-inner"
              : "bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 hover:from-indigo-700 hover:to-indigo-500 text-white shadow-lg shadow-indigo-400/30 hover:shadow-pink-400/40"
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {isRunning ? "🎰 Đang quay..." : "🎰 Quay số"}
          </span>
          {!isRunning && (
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-40 blur-xl animate-pulse"></span>
          )}
        </button>
      </div>
    </div>
  );
}
