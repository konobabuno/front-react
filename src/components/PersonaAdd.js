import React from "react";
import axios from "axios";

export default class PersonaAdd extends React.Component{
    state = {
        nombre: '',
        apellido: '',
        edad: 0
    }

    handleNombre = event => {
        this.setState({
            nombre: event.target.value
        });
    }

    handleApellido = event => {
        this.setState({
            apellido: event.target.value
        });
    }

    handleEdad = event => {
        this.setState({
            edad: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const persona = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            edad: this.state.edad
        }

        axios.post("http://localhost:3010/persona", persona)
        .then(response => {
            console.log(response);
            console.log(response.data);
            this.setState({
                nombre: '',
                apellido: '',
                edad: 0
            });
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Nombre: </label>
                    <input type="text" name="nombre" onChange={this.handleNombre} value={this.state.nombre}/>
                    <br/>
                    <label>Apellido: </label>
                    <input type="text" name="apellido" onChange={this.handleApellido} value={this.state.apellido}/>
                    <br/>
                    <label>Edad: </label>
                    <input type="number" name="edad" onChange={this.handleEdad} value={this.state.edad}/>
                    <br/>
                    <button type="submit">Agregar!</button>
                </form>
            </div>
        )
    }
}