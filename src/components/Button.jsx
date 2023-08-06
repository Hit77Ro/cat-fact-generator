export default function Button({ fetchCatFact }) {
  return (
    <button className="btn" onClick={fetchCatFact}>
      get random cat fact
    </button>
  );
}
