export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <p className="widget__text">
        Good: <span className="widget__value">{good}</span>
      </p>
      <p className="widget__text">
        Neutral: <span className="widget__value">{neutral}</span>
      </p>
      <p className="widget__text">
        Bad: <span className="widget__value">{bad}</span>
      </p>
      <p className="widget__text">
        Total: <span className="widget__value">{total}</span>
      </p>
      <p className="widget__text">
        Positive feedback:
        <span className="widget__value">
          {positivePercentage === 'NaN' ? 0 : positivePercentage}
        </span>
        %
      </p>
    </>
  );
}
