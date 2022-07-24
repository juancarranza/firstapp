const Carro = (props) =>{
    return <h2>Hola, soy un carro Toyota {props.modelo}, soy de Color {props.color}</h2>
};

/* OTRA MANERA DE HACERLO a mi me gusta mas la de arriba 
const Carro = ({modelo, color}) =>{
    return <h2>Hola, soy un carro Toyota {modelo}, soy de Color {color}</h2>
}; */

export default Carro;