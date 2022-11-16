import React, { useState } from "react";
import "./App.css";

const Strings: React.FC = () => {
  let [data, setData] = useState<string>("");
  function changeWord(word: string): string {
    return word.charAt(word.length - 1) + word.substring(0, word.length - 1);
  }
  let str1 = changeWord(data);
  let str2 = changeWord(str1);
  let str3 = changeWord(str2);
  let str4 = changeWord(str3);
  let str5 = changeWord(str4);
  return (
    <div className="Strings">
      <h2>strings</h2>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <h1>{data}</h1>
      <p>{str1}</p>
      <p>{str2}</p>
      <p>{str3}</p>
      <p>{str4}</p>
      <p>{str5}</p>
    </div>
  );
};

export default Strings;
