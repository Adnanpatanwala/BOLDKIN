// Shows a product photo if one is configured, otherwise a placeholder illustration.

const RED = '#FF3B30';
const BLUE = '#4DA3FF';

function ledDots(sx = 17, sy = 16, max = 70) {
  const dots = [];
  let row = 0;
  for (let y = 132; y <= 252; y += sy, row++) {
    const t = (268 - y) / 150;
    const hw = 108 * Math.sqrt(Math.max(0, 1 - t * t)) - 12;
    const n = Math.max(1, Math.floor((hw * 2) / sx) + 1);
    for (let i = 0; i < n; i++) {
      const x = n === 1 ? 150 : 150 - hw + 2 * hw * (i / (n - 1));
      dots.push({ x: +x.toFixed(1), y, c: (i + row) % 2 });
    }
  }
  return dots.slice(0, max);
}
const DOTS = ledDots();

function CapArt({ label, shadow, thumb }) {
  return (
    <>
      {!thumb && <ellipse cx="150" cy="372" rx="112" ry="12" fill={shadow} />}
      <path d="M42 268C42 60 258 60 258 268Z" fill="#141414" stroke={thumb ? 'none' : '#2c2c2c'} strokeWidth="2" />
      {DOTS.filter((_, i) => !thumb || i % 3 === 0).map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={thumb ? 6 : 4.2} fill={d.c ? BLUE : RED} />
      ))}
      <rect x="34" y="262" width="232" height="46" rx="23" fill="#0A0A0A" stroke={thumb ? 'none' : '#2c2c2c'} strokeWidth="2" />
      <rect x="126" y="98" width="48" height="22" rx="8" fill="#EF5328" />
      {!thumb && (
        <>
          <circle cx="162" cy="109" r="3.5" fill="#0A0A0A" />
          <text x="150" y="291" textAnchor="middle" fontFamily="Archivo, Impact, sans-serif" fontWeight="900" fontSize="17" fill="#fff" letterSpacing="2">
            {label}
          </text>
        </>
      )}
    </>
  );
}

function PackArt({ name, label, shadow, thumb }) {
  return (
    <>
      {!thumb && <ellipse cx="150" cy="378" rx="105" ry="12" fill={shadow} />}
      <rect x="45" y="30" width="210" height="330" rx="34" fill="#141414" stroke={thumb ? 'none' : '#2c2c2c'} strokeWidth="2" />
      <path d="M45 312H255V326a34 34 0 0 1-34 34H79a34 34 0 0 1-34-34Z" fill="#EF5328" />
      {thumb ? (
        <rect x="110" y="110" width="80" height="12" rx="6" fill="#fff" />
      ) : (
        <>
          <image href="/boldkin-mark-dark.svg" x="100" y="86" width="100" height="92" />
          <text x="150" y="228" textAnchor="middle" fontFamily="Archivo, Impact, sans-serif" fontWeight="900" fontSize="30" fill="#fff" letterSpacing="1">
            {label}
          </text>
          <text x="150" y="256" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="#BDBDBD">
            {name.toUpperCase()}
          </text>
        </>
      )}
    </>
  );
}

export default function ProductImage({ product, view = 0, shadow = 'rgba(0,0,0,.18)', thumb = false }) {
  const photo = product.images?.[view];
  // console.log(photo);
  
  if (photo) return <img src={photo} alt={thumb ? '' : `${product.name}, ${product.views?.[view] ?? ''} view`} />;
  const label = product.placeholderLabel || 'BOLDKIN';
  return (
    <svg viewBox="0 0 300 400" role={thumb ? undefined : 'img'} aria-hidden={thumb ? true : undefined} aria-label={thumb ? undefined : `${product.name} image placeholder`}>
      {product.placeholder === 'pack' ? (
        <PackArt name={product.name} label={label} shadow={shadow} thumb={thumb} />
      ) : (
        <CapArt label={label} shadow={shadow} thumb={thumb} />
      )}
    </svg>
  );
}
