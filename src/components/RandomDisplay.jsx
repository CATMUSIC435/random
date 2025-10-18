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
          className="text-9xl font-extrabold text-orange-500 transition-all duration-200 ease-in-out"
        >
          {displayNumber}
        </div>
      )}
    </>
  );
}
