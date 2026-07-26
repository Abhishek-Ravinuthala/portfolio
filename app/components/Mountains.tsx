export default function Mountains() {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <svg
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        className="w-full h-[400px]"
      >
        <path
          d="
            M0 500
            L0 280
            L180 180
            L320 260
            L520 100
            L760 250
            L980 120
            L1180 220
            L1440 80
            L1440 500
            Z
          "
          fill="#0B1220"
        />

        <path
          d="M0 500
            L0 340
            L220 240
            L420 330
            L650 170
            L900 280
            L1120 160
            L1440 260
            L1440 500
            Z
          "
          fill="#172033"
        />
      </svg>
    </div>
  );
}