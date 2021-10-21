import React, {Component} from 'react';
import { Button, Table } from 'react-bootstrap';
import './styles.css';

export class MainPage extends Component{

    constructor(props){
        super(props);
        this.state = {flows:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+"/FlujoUsuario/GetFlujoUsuario?usuarioID=3")
            .then(response => response.json())
            .then(data => { 
                this.setState({flows:data})
            });
            
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {flows} = this.state;
        return(
            <div className="text-center p-3">
                <Button variant = "success btn-agregar">Agregar</Button>
                <Button variant = "danger btn-eliminar  ">Eliminar</Button>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID_FlujoUsuario</th>
                            <th>Monto</th>
                            <th>Descripcion</th>
                            <th>Flujo</th>
                            <th>Gasto</th>
                            <th>TipoMonto</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flows.map(flow =>
                            <tr key={flow.ID_FlujoUsuario}>
                                <td>{flow.ID_FlujoUsuario}</td>
                                <td>{flow.Monto}</td>
                                <td>{flow.Descripcion}</td>
                                <td>{flow.Flujo}</td>
                                <td>{flow.Gasto}</td>
                                <td>{flow.TipoMonto}</td>
                                <td>{flow.Fecha}</td>
                                <td>Edit / Delete</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>      
        );                
    }
}
