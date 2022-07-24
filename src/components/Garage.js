import Carro from "./Carro";

let carros= [
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
];
const Garage = () =>{
    return (<>
        <h1>Estos son los carros de mi garage: </h1>
        {  
        }

        {//renderizacion condicional usando &&
            carros.length === 0 && <p>No hay carros en el garage</p>
        }
        {//renderizacion condicional usando operador ternario ?
            carros.length === 0 ? (<p>No hay carros en el garage</p>) : 
            (carros.map((carro, index) => {
                    return <Carro key={`${index}-carro-${carro.modelo}`} modelo={carro.modelo} color={carro.color} />//renderizacion dinamica 
                })
            )
        }
        {/*         <Carro modelo={"Hilux"} color={"gris"} />
            <Carro modelo={"Yaris"} color={"negro"} /> */
        }
    </>
    );
};

export default Garage;//por default en todos los componentes