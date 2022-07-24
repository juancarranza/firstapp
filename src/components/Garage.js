import Carro from "./Carro";

const Garage = () =>{
    return (<>
        <h1>Estos son los carros de mi garage: </h1>
        <Carro modelo={"Hilux"} color={"gris"} />
        <Carro modelo={"Yaris"} color={"negro"} />
    </>
    );
};

export default Garage;//por default en todos los componentes