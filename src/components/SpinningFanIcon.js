import React from 'react';

const SpinningFanIcon = ({ size = 22, color = '#34d399', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`spinning-fan-icon ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        animation: 'spinFan 7s linear infinite'
      }}
    >
      <path
        d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SpinningFanIcon;
