export default function RandomDisplay({
  displayNumber,
  finalNumber,
  isRunning,
  numberRef,
}) {
  return (
    <>
      {displayNumber && (
        <div
          ref={numberRef}
          className="text-[156px] font-extrabold text-white transition-all duration-200 ease-in-out"
        >
          {displayNumber}
        </div>
      )}
    </>
  );
}
