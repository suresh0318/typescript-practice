import { useEffect, useState } from "react";
import './App.css';

function Grid() {
  let [numbers, setNumbers] = useState<number[]>([]);
  useEffect(() => {
    let arr:number[] = [];
    while (arr.length < 9) {
      var r = Math.floor(Math.random() * 100) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    setNumbers(arr);
  }, []);
  return (
    <div className="App">
      <h2>Grid</h2>
    {numbers.map((i) => (
      <h1>{i}</h1>
    ))}
  </div>
  );
}

export default Grid;
