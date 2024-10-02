import React from "react";
import './listanimal.css'
export function Listaanima(){
    const animales = [
        { id: 1, nombre: "León", especie: "Panthera leo", habitat: "Sabana" },
        { id: 2, nombre: "Tigre", especie: "Panthera tigris", habitat: "Selva" },
        { id: 3, nombre: "Elefante", especie: "Loxodonta africana", habitat: "Sabana" },
      ];

    return(
        <div>
            <ul>
                {animales.map((animal)=>(
                    <li key={animal.id}>
                        <strong>Nombre: </strong>{animal.nombre}<br/>
                        <strong>Especie: </strong>{animal.especie}<br/>
                        <strong>Habitat: </strong>{animal.habitat}
                    </li>
                ))}
            </ul>
        </div>
    )  
    
}