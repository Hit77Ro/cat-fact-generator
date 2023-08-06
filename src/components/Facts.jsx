import Fact from "./Fact";

export default function Facts({ facts }) {
  return (
    <div className="facts">
      {facts.length > 0 ? (
        facts.map((fact) => <Fact key={crypto.randomUUID()} fact={fact} />)
      ) : (
        <h1 style={{ textAlign: "center" }}>no fact generated yet </h1>
      )}
    </div>
  );
}
