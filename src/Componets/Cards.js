import React from "react";
import Card from "./Card";
import img1 from "../assets/react.png";
import img2 from "../assets/docker.png";
import img3 from "../assets/java.gif";
const img = [
  {
    id: 1,
    Titulo: "Curso de React",
    Imagen: img1,
    instructor: "Benito Samuel Lopez",
  },
  {
    id: 2,
    Titulo: "Curso de Java",
    Imagen: img3,
    instructor: "Angela Rios Luna",
  },
  {
    id: 3,
    Titulo: "Curso de Docker",
    Imagen: img2,
    instructor: "Valentin Jimenez Jarquin",
  },
];

export default function Cards() {
  console.log(img);
  return (
    <div className="container d-flex justify-content-center align-items-center  h-100">
      <div className="row">
        {img.map((item) => (
          <div className="col-md-4" >
            <Card
              data={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
