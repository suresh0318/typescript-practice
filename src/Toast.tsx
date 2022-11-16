import { useState, useEffect } from "react";
import "./App.css";

export default function Toast() {
  let [list, setList] = useState<string[]>([]);
  function showToast(word: string) {
    setList([...list, word]);
    console.log(list);
  }
  useEffect(() => {
    let interval = setInterval(() => {
      setList(list.slice(1));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [list]);
  return (
    <main>
      <div className="btns">
        <button onClick={() => showToast("success")}>success</button>
        <button onClick={() => showToast("failure")}>failure</button>
        <button onClick={() => showToast("warning")}>warning</button>
        <button onClick={() => showToast("info")}>info</button>
      </div>

      <div className="toasts">
        {list.map((i) => {
          return (
            <h1
              id="toast-bar"
              style={
                i === "success"
                  ? { background: "green" }
                  : i === "failure"
                  ? { background: "red" }
                  : i === "warning"
                  ? { background: "orangered " }
                  : { background: "deepskyblue" }
              }
            >
              {i}
            </h1>
          );
        })}
      </div>
    </main>
  );
}
