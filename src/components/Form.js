import React, { useState, useEffect } from 'react';

const Form = () => {
/*     const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(""); */

    const [formValues, setFormValues] = useState({});
    /* 
    const handleInputChange= (event) => {
        const input = event.target.value;
        setNombre(input);
    }

    const handleEdadChange = (event) => {
        const edad = event.target.value;
        setEdad(edad);
    } */
    let x = 45;
    useEffect(() => {
        console.log("hola desde el useEffect");
        //FETCH DATA va a causar una sobrecarga hacia el API
    }, [formValues, x]);
    //si el arreglo de dependencias es vacio, solo se ejecuta la primera vez que carga la pagina []
    //en caso el arreglo de dependencias tenga alguna variable dentro eso significa que en caso que alguna de estas cambie, se ejecutara el mismo [formValues, x]


    const handleFormChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setFormValues((values) => {
            console.log(values);
            return {...values,
                [name]:value, //["primerNombre"]: valorInput || ["edad"]: valorInput || ["carro"]: valorInput
            }
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //llamar a API para guardar los datos
        alert(`me llamo ${formValues.primerNombre} y tengo ${formValues.edad}`)
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>
            Primer Nombre: 
            <input type="text" name="primerNombre" value={formValues.primerNombre || ""} onChange={handleFormChange}/>
        </label>
        <label>
            Edad: 
            <input type="number" name="edad" value={formValues.edad|| ""} onChange={handleFormChange}/>
        </label>
        <label>
            Carro: 
            <select name="carro" onChange={handleFormChange}>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="Fiat">Fiat</option>
            </select>
        </label>

        <input type="submit"/>
    </form>
    );
}

export default Form