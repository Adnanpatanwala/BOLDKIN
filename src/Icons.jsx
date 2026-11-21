import { useId } from 'react';

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const ArrowIcon = ({ size = 20 }) => (
  <svg {...base} width={size} height={size} strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const PlusIcon = () => (
  <svg {...base} width="22" height="22" strokeWidth="2.6">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const CheckIcon = () => (
  <svg {...base} width="16" height="16" strokeWidth="3">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const STAR = 'M12 1l3.1 6.6 7 .9-5.2 4.9 1.3 7L12 16.9 5.8 20.4l1.3-7L1.9 8.5l7-.9z';

export const Stars = ({ rating = 5, size = 22, color = 'currentColor', emptyColor = 'rgba(128,128,128,.35)' }) => {
  const uid = useId().replace(/:/g, '');
  const value = Math.max(0, Math.min(5, Number(rating) || 0));

  return (
    <svg viewBox="0 0 120 24" width={size * 5} height={size} role="img" aria-label={`Rated ${value} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <g key={i} transform={`translate(${i * 24} 0)`}>
            <path d={STAR} fill={emptyColor} />
            <clipPath id={`${uid}-${i}`}>
              <rect x="0" y="0" width={24 * fill} height="24" />
            </clipPath>
            <path d={STAR} fill={color} clipPath={`url(#${uid}-${i})`} />
          </g>
        );
      })}
    </svg>
  );
};