import React, { forwardRef } from "react";

const BorderEffect = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="absolute inset-0 pointer-events-none border-12 border-transparent z-[999]"
    style={{ boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
  ></div>
));

export default BorderEffect;
