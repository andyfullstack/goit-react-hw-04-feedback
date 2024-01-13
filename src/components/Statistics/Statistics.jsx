const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div style={{ margin: 'auto' }}>
      <p style={{ fontWeight: '700', color: 'green' }}>Good: {good}</p>
      <p style={{ fontWeight: '700' }}>Neutral: {neutral}</p>
      <p style={{ fontWeight: '700', color: 'red' }}>Bad: {bad}</p>
      <p style={{ fontWeight: '700', color: 'black' }}>Total: {total}</p>
      <p
        style={{ fontWeight: '700', color: 'white', backgroundColor: 'black' }}
      >
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
