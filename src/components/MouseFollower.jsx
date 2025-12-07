import React, { useEffect, useState } from "react";

const MouseFollower = () => {
   const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);
``
  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 bg-pink-500 rounded-full pointer-events-none z-[9999] transition-all linear duration-200"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    ></div>
  );
};
  
export default MouseFollower