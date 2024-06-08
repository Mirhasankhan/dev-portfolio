import { useRef } from "react";
import "../App.css";

const FullPageScroll = ({ pageSS }: { pageSS: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="scroll-container rounded-md h-64 overflow-hidden overflow-y-auto"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="rounded-md" src={pageSS} alt="" />
    </div>
  );
};

export default FullPageScroll;
