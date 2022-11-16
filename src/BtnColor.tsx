import React,{useState} from 'react'
import "./App.css"

const BtnColor = () => {
let [value,setValue]=useState<number>(0)
let [color,setColor]=useState<string>("")
function btn (){
    setValue(prev => prev+3)
    setColor(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
    console.log(color)
}
  return (
    <div>
      <h2>color changing button</h2>
        <button onClick={btn} style={{backgroundColor:color,padding:"3rem"}}>{value}</button>
    </div>
  )
}

export default BtnColor