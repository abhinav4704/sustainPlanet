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
      fill="rgba(85, 110, 90, 0.75)"       // muted dusty green
      stroke="rgba(55, 70, 50, 0.6)"      // darker stroke
      strokeWidth="1"
    />
  </svg>
);

const FloatingLeavesAndRoots = () => {
  const leaves = Array.from({ length: 25 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = 15 + Math.random() * 20; // slower fall
    const size = 20 + Math.random() * 20;     // bigger leaves

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
          background: linear-gradient(180deg, #121a12 0%, #1f2c1f 100%); /* very dark, less green */
          overflow: hidden;
        }

        .roots-container {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          max-width: 1200px;
          height: 200px;
          pointer-events: none;
          filter: drop-shadow(0 0 6px rgba(10, 20, 10, 0.9));
          opacity: 0.85;
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

        <div className="roots-container">
          <svg
            width="100%"
            height="200"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 150 Q200 100 400 150 T800 150 T1200 150"
              stroke="rgba(20, 45, 20, 0.8)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M100 150 Q250 120 350 140 T650 150 T1100 140"
              stroke="rgba(40, 60, 40, 0.7)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M150 160 Q300 130 450 150 T750 160 T1150 150"
              stroke="rgba(65, 85, 65, 0.6)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FloatingLeavesAndRoots;
