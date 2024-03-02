import React, { useState } from "react";
import OutsideClickHandler from "./OutsideClickHandler";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle {isOpen ? "Close" : "Open"}
      </button>
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        {isOpen && <div>Content to close when clicking outside</div>}
      </OutsideClickHandler>
    </div>
  );
}

export default MyComponent;
