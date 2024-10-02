import { useEffect, useState } from "react"
import './form.css'
export function Formulario(){

    const[nombre, setNombre] = useState('');
    
    useEffect(()=> {
        console.log("elpepe");
    }, []) ;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
      }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Pon tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
                />
                
            <button type="submit">Siguiente</button>
            </form>
        </div>
    );
}
