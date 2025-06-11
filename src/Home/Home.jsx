import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
const [input, setInput] =useState('')
const [result, setResult]=useState('')

const handleValue=(value)=>{
  if(value==='='){
    try {
      const evalResult = eval(input)
      if(evalResult === Infinity || evalResult === -Infinity )
      {setResult('Infinity')}else{
        setResult(evalResult.toString())
      }
    } catch (error) {
      setResult('Error')
    }
  }else if(value==='C'){
    setInput("")
    setResult("")
  }else{
    setInput(input+value)
  }
}

const buttons=[
  '7','8','9','+',
  '4','5','6','-',
  '1','2','3','*',
  'C','0','=','/',
]
  return (
    <div className={styles.calculatorContainer}>
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input}/>
        <div className={styles.displayResult}>{result}</div>
        <div className={styles.buttonContainer}>
          {
            buttons.map((btn, i)=>(
              <button type="button" key={i} className={styles.button} onClick={()=>handleValue(btn)}>
              {btn}
              </button>
            )
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
