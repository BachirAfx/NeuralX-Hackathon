import './Meter.css';

function HealthScoreMeter({ score }) {
  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (score / 100) * circumference;

  // Color logic
  let color = '#28a745'; // green
  if (score < 70) color = '#ffc107'; // yellow
  if (score < 40) color = '#dc3545'; // red

  return (
    <div className="health-score-meter" style={{ width: 180, margin: 'auto' }}>
      <svg className="health-score-svg" height={radius * 2} width={radius * 2}>
        {/* Background circle */}
        <circle
          stroke="#e9ecef"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress circle */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: 'stroke-dashoffset 1s ease',
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        {/* Score text */}
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#212529"
        >
          {score}
        </text>
      </svg>

      {score < 70 ? (
        <p className="mt-2 text-muted">
        Health Score
      </p>
      ):null}
    </div>
  );
}

export default HealthScoreMeter;
