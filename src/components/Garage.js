import {useState} from "react";
import Carro from "./Carro";
import Informacion from "./Informacion";

const Garage = () =>{
    const [carros, setCarros] = useState(
        [
            {
               modelo: "Hilux",
               color: "gris"
           },
           {
               modelo: "Yaris",
               color: "negro"
           },
           {
               modelo: "Corolla",
               color: "rojo"
           }  
       ]
    ); //carros[getter, setter]

    const carrosComponent = (carros.map((carro, index) => {
        return <Carro 
            key={`${index}-carro-${carro.modelo}`} 
            modelo={carro.modelo} 
            color={carro.color} 
            />//renderizacion dinamica 
        })
    );
    
    const eliminarUltimoCarro = (prop1, prop2) =>{
        const newCarros = carros.slice(carros.length-1, 1);
        setCarros(newCarros);
    };

    return (<>
        <h1>Estos son los carros de mi garage: </h1>
        {//renderizacion condicional usando &&
            carros.length === 0 && <p>No hay carros en el garage</p> 
        }
        {//renderizacion condicional usando operador ternario ?
            carros.length === 0 ? (<Informacion texto={"No hay carros en el garage"} /> ) : carrosComponent
            
        }
        <button onClick={() => {
                eliminarUltimoCarro(1,2)
            }
            }
        >
            Eliminar ultimo correo
        </button>
        {/*         <Carro modelo={"Hilux"} color={"gris"} />
            <Carro modelo={"Yaris"} color={"negro"} /> */
        }
    </>
    );
};

export default Garage;//por default en todos los componentes