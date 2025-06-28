import React from "react";

const Leaf = ({ style }) => (
  <svg
    style={style}
    className="leaf"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C14.5 6 20 11 12 22C4 11 9.5 6 12 2Z"
      fill="rgba(72, 160, 92, 0.8)"
      stroke="rgba(36, 95, 48, 0.7)"
      strokeWidth="1"
    />
  </svg>
);

const FloatingLeavesAndRoots = () => {
  const leaves = Array.from({ length: 15 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = 10 + Math.random() * 15;
    const size = 12 + Math.random() * 18;

    return {
      id: i,
      style: {
        left: `${left}vw`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size}px`,
      },
    };
  });

  return (
    <>
      <style>{`
        .background-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          background: linear-gradient(180deg, #e0f2f1 0%, #a5d6a7 100%);
          overflow: hidden;
        }

        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        .leaf {
          position: fixed;
          top: -50px;
          will-change: transform;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="background-container" aria-hidden="true">
        {leaves.map(({ id, style }) => (
          <Leaf key={id} style={style} />
        ))}
      </div>
    </>
  );
};

export default FloatingLeavesAndRoots;
