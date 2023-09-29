import axios from "axios";
import React from "react";

export default class PersonaList extends React.Component {
    state = {
        personas: []
    }

    UpdateList = () => {
        axios.get("http://localhost:3010/persona")
        .then(response => {
            const personas = response.data;
            this.setState({personas});
        });
    };

    componentDidMount() {
        this.UpdateList();
    }

    componentDidUpdate() {
        this.UpdateList();
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.personas.map(
                            persona => 
                            <tr key={persona.persona_id}>
                                <td>{persona.nombre}</td>
                                <td>{persona.apellido}</td>
                                <td>{persona.edad}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}