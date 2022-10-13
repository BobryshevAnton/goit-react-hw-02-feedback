export default function FeedbackOptions({ good, neutral, bad }) {
  return (
    <>
      <button type="button" className="widget__button" onClick={good}>
        Good
      </button>
      <button type="button" className="widget__button" onClick={neutral}>
        Neutral
      </button>
      <button type="button" className="widget__button" onClick={bad}>
        Bad
      </button>
    </>
  );
}
