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
        {carros.map((carro, index) => {
            return <Carro key={`${index}-carro-${carro.modelo}`} modelo={carro.modelo} color={carro.color} />
        })}
{/*         <Carro modelo={"Hilux"} color={"gris"} />
        <Carro modelo={"Yaris"} color={"negro"} /> */}
    </>
    );
};

export default Garage;//por default en todos los componentes