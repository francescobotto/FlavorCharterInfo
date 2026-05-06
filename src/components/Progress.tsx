interface ProgressProps {
  current: number;
  target: number;
  size?: number;
  strokeWidth?: number;
}

export default function Progress({ current, target, size = 120, strokeWidth = 10 }: ProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = Math.min(current / target, 1);
  const offset = circumference * (1 - progress);

  return (
    <div className="inline-flex flex-col items-center">
      <svg width={size} height={size} className="overflow-visible">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="transparent" />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={current == target ? "#008000" : "#D50032"}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-gray-800 font-bold text-2xl">
          {current}
        </text>
      </svg>

      <div className="mt-2 text-sm text-gray-700">out of {target}</div>
    </div>
  );
}
