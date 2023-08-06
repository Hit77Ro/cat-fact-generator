import { useState } from "react";
import Button from "./Button";
import Facts from "./Facts";
export default function App() {
  const [fact, setFact] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://catfact.ninja/fact?max_length=140");
    const data = await res.json();
    if (fact.length >= 10) return;
    setFact((pre) => [data.fact, ...pre]);
  };
  // we can't do that , useEffect only return clean-up function
  // useEffect(() =>fetchData() , [] )

  return (
    <>
      <div className="container">
        <div className="app">
          <Facts facts={fact} />
          <Button fetchCatFact={fetchData} />
        </div>
      </div>
    </>
  );
}
