import React from "react";
import { useNavigate } from "react-router-dom";
import IPCss from "../Forms/InputForm.module.css";
const Form1 = () => { 
    const Navigate=useNavigate()

  return (
    <div className={IPCss.Container}>
      <h2 className={IPCss.heading}>1. what is your weight Goal ?</h2>

      <div>
        <button className={IPCss.btn}>Loose Weight</button>
      </div>
      <div>
        <button  className={IPCss.btn}>Maintain Weight</button>
      </div>
      <div>
        <button className={IPCss.btn}>Gain Weight</button>
      </div>

      <div>
        <button onClick={()=>Navigate("/popup")} className={IPCss.btn2}>Prev</button>

        <button onClick={()=>Navigate("/myhome")} className={IPCss.btn1}>Next</button>
      </div>
    </div>
  );
};

export default Form1;
