import { site } from '../config/site.js';

export default function Marquee() {
  const line = `Bold ● ${site.name} ● ${site.announcement} ● Make it bold ● `.repeat(2);
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee">
        <span className="d">{line}</span>
        <span className="d">{line}</span>
      </div>
    </div>
  );
}
