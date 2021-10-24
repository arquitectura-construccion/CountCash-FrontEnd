import React, {Component} from 'react';
import { Button, Table } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { AddFlowModal } from './AddFlowModal';
import './styles.css';

var cookies = new Cookies();
const baseUrl = "https://localhost:5001/api/FlujoUsuario/GetFlujoUsuario";
export class MainPage extends Component{

    constructor(props){
        super(props);
        this.state = {flows:[], addModalShow:false};
    }

    refreshList(){
        const data = {
            UsuarioID: cookies.get('id')}
        fetch(baseUrl + "?UsuarioID=" + data.UsuarioID, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },           
            body:undefined,
        })
            .then(res => res.json())
            .then((data) => {this.setState({flows:data})})
            .catch(error => console.log("Error detected: " + error));
            
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {flows} = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div className="text-center p-3">
                <Button variant = "success btn-agregar"
                onClick={()=>this.setState({addModalShow:true})}>
                Agregar</Button>

                <AddFlowModal show={this.state.addModalShow}
                onHide={addModalClose}/>

                <Button variant = "danger btn-eliminar">
                Eliminar</Button>
                
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID Flujo</th>
                            <th>Monto</th>
                            <th>Descripcion</th>
                            <th>Flujo</th>
                            <th>Categoria</th>
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
