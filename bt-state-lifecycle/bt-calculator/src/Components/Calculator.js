import { useState} from "react" ;
import React from "react";

function Calculator() {
    const [num2,setNum2] = useState(0)
    const [num1,setNum1] = useState(0)
    const [result , setResult] = useState(0)
    // const value = React.createRef()
    // const value_num2 = value.current
    function get_num2(e){
        setNum2(parseInt(e.target.value)) 
    }
    console.log(num2)
 
    function get_num1(e,num1){
      setNum1(parseInt(e.target.value))
    }
   
    console.log(num1)
    function add(){
      const resultadd = num1 + num2
      setResult(resultadd)
    }
     console.log(result)
    function subtraction(){
      const resultsubtraction = num1 - num2
      setResult(resultsubtraction)}
    function multiplication(){
      const multiplication = num1*num2
      setResult(multiplication)
    }
    function division(){
      const division = num1/num2
      setResult(division)
    }
    return (
      <>
      <select onChange={get_num1} style={{width:"100px",marginRight:"20px"}} id="num1" className="cars">
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
      </select>
      <br></br>
      <input id="num2" onChange={get_num2}/>

      <button onClick={add}>+</button>
      <button onClick={subtraction}>-</button>
      <button onClick={multiplication}>*</button>
      <button onClick={division}>/</button>
      <h3>result:{result}</h3>

      </>
    );
  }
  
  export default Calculator;