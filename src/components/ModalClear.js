import React, { forwardRef } from "react";
import "./ModalClear.css";
const ModalClear = forwardRef(({ children }, ref) => {
  return <dialog ref={ref}>{children}</dialog>;
});

export default ModalClear;
