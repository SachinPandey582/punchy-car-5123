import React from 'react'
import { useNavigate } from 'react-router-dom'
import FCss from "../Forms/Form.module.css"
const Form = () => {
    const Navigate =useNavigate()
  return (
    <div className={FCss.Container}>
        <div className={FCss.Heading}>
        Welcome! Just a few quick questions so we can customize MyFitnessPal for you.
        </div>
        <div>
            <button onClick={()=>Navigate("/form1")}  className={FCss.btn}>Click To Continue</button>
        </div>
    </div>
  )
}

export default Form