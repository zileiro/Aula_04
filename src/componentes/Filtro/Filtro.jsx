import React from "react";
import { useState } from "react";

function Filtro() {
  const [entrada,setEntrada] = useState('')

  return (
    <div className="row">
        <div className="col-12 col-lg-10">
            <input className="form-control" type='text' value={entrada} onChange={(e)=> setEntrada(e.target.value)}/>
        </div>
        <div className="col-12 col-lg-1">
            <strong>Países: 999</strong>
        </div>
        <div className="col-12 col-lg-1">
            <strong>População: 9.999.999.999</strong>
        </div>
        <div><p>{entrada}</p></div>
    </div>
  )
}

export default Filtro