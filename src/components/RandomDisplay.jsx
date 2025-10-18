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
          className="cinzel text-[356px] font-extrabold text-white transition-all duration-200 ease-in-out"
        >
          {displayNumber}
        </div>
      )}
    </>
  );
}
