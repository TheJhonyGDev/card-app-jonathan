import React from "react";


export default function Card({data}) {
 console.log(data);
  return (
    <div className="card text-center bg-black">
      <div className="card-body text-light">
        <div style={{height:"200px", textAlign: "center"}}>
        <img src={data.Imagen} alt="" className="" width="180px" />
        </div>
        <h4 className="card-title">{data.Titulo}</h4>
        <p className="card-text text-secondary">{data.instructor}</p>
        <a href="#!" className="btn btn-outline-secondary rounded-0">
          Ir al Sitio Web
        </a>
      </div>
    </div>
  );
}
