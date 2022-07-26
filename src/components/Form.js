import React, { useState } from 'react';

const Form = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");

    const handleInputChange= (event) => {
        const input = event.target.value;
        setNombre(input);
    }

    const handleEdadChange = (event) => {
        const edad = event.target.value;
        setEdad(edad);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //llamar a API para guardar los datos
        alert(nombre);
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>
            Primer Nombre: 
            <input type="text" name="primerNombre" value={nombre} onChange={handleInputChange}/>
        </label>
        <label>
            Edad: 
            <input type="number" name="Edad" value={edad} onChange={handleEdadChange}/>
        </label>

        <input type="submit"/>
    </form>
    );
}

export default Form