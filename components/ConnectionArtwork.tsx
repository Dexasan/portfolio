export default function ConnectionArtwork() {
  return (
    <svg
      viewBox="0 0 640 620"
      fill="none"
      className="connection-art"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hatch"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(24)"
        >
          <path d="M0 0V8" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <filter id="rough">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".045"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
        </filter>
      </defs>
      <g stroke="currentColor" strokeWidth="1.5" opacity=".27">
        <ellipse
          cx="324"
          cy="312"
          rx="271"
          ry="211"
          transform="rotate(-29 324 312)"
        />
        <ellipse
          cx="324"
          cy="312"
          rx="279"
          ry="119"
          transform="rotate(36 324 312)"
        />
        <circle cx="324" cy="312" r="234" strokeDasharray="3 10" />
        <path d="M20 312H624M324 30V591" strokeDasharray="3 9" />
      </g>
      <g filter="url(#rough)">
        <path
          d="M148 165 435 129 491 393 206 432Z"
          fill="#eddfc6"
          stroke="#24231f"
          strokeWidth="2"
        />
        <path d="M173 184 419 153 457 345 213 376Z" fill="#24231f" />
        <path
          d="M196 203 400 177 431 326 227 352Z"
          fill="url(#hatch)"
          stroke="#eee5d3"
        />
        <path d="m300 213 57-8 12 57-56 8Z" fill="#e64d30" />
        <path d="m340 261 70-9 12 55-71 10Z" fill="#eee5d3" />
        <path d="m228 275 72-9 10 54-72 10Z" fill="#eee5d3" />
        <circle cx="338" cy="232" r="11" fill="#eee5d3" />
        <path d="M324 255q12-20 29-5" stroke="#eee5d3" strokeWidth="4" />
        <circle cx="378" cy="273" r="9" fill="#24231f" />
        <path d="M364 296q10-18 29-6" stroke="#24231f" strokeWidth="4" />
        <circle cx="268" cy="291" r="9" fill="#24231f" />
        <path d="M255 315q12-21 28-5" stroke="#24231f" strokeWidth="4" />
        <path
          d="m290 425 12 55-64 10 5 19 173-22-3-19-66 8-7-58"
          fill="#24231f"
        />
        <circle cx="444" cy="374" r="8" fill="#e64d30" />
        <path d="m224 401 122-16" stroke="#24231f" strokeWidth="3" />
        <g transform="rotate(13 482 406)">
          <rect
            x="419"
            y="291"
            width="139"
            height="242"
            rx="22"
            fill="#eee5d3"
            stroke="#24231f"
            strokeWidth="3"
          />
          <rect
            x="430"
            y="313"
            width="117"
            height="190"
            rx="7"
            fill="#24231f"
          />
          <path
            d="M465 303h45"
            stroke="#24231f"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="489" cy="518" r="6" stroke="#24231f" strokeWidth="2" />
          <path
            d="m449 403 21-34 13 22 15-16 28 32-24 20-34-5Z"
            fill="#e64d30"
          />
          <path d="m465 399 39 8-23 6Z" fill="#eee5d3" />
          <path d="M455 451h63m-55 12h47" stroke="#eee5d3" strokeWidth="2" />
        </g>
        <path
          d="M159 338C55 328 53 456 141 466c54 6 55 46 103 53s74-36 170-7"
          stroke="#24231f"
          strokeWidth="5"
        />
        <path d="m143 323 28 14-20 20" stroke="#24231f" strokeWidth="4" />
        <path
          d="m104 100 15 35 38 3-32 22 10 38-31-23-31 23 10-38-32-22 38-3Z"
          fill="#e64d30"
        />
        <path d="m515 138 7 20 21 5-20 9-6 22-8-21-20-7 20-7Z" fill="#e64d30" />
        <path
          d="m361 69 10-29m6 36 23-21m-47 22-6-22"
          stroke="#24231f"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M116 248q-21-22-6-49m-10 63q-37-32-16-71m-2 86q-52-43-26-96"
          stroke="#e64d30"
          strokeWidth="3"
        />
      </g>
      <g
        fill="currentColor"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="2"
      >
        <text x="56" y="566">
          FIG. 01 — A CONNECTION, MADE.
        </text>
        <text x="428" y="86" transform="rotate(9 428 86)">
          LESS DISTANCE.
        </text>
        <text x="428" y="103" transform="rotate(9 428 103)">
          MORE PEOPLE.
        </text>
      </g>
    </svg>
  );
}
