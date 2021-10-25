import React, {Component} from 'react';
import { Button, ButtonToolbar, Table } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { AddFlowModal } from './AddFlowModal';
import { EditFlowModal } from './EditFlowModal';
import './styles.css';

var cookies = new Cookies();
const baseUrl = "https://localhost:5001/api/FlujoUsuario/GetFlujoUsuario";
const deleteUrl = "https://localhost:5001/api/FlujoUsuario/DeleteFlujoUsuario"
export class MainPage extends Component{

    constructor(props){
        super(props);
        this.state = {flows:[], addModalShow:false,editModalShow:false};
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
    
    DeleteFlow(flowid){
        if(window.confirm('Are you sure?')){
            fetch(deleteUrl+"?flujoUsuarioID="+flowid,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
        }
    }

    render(){
        const {flows,flowid,flowmonto,flowdesc} = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div className="text-center p-3">
                <h2>
                    A continuacion estan sus flujos:
                </h2>

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
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                        flowid:flow.ID_FlujoUsuario,flowmonto:flow.Monto,flowdesc:flow.Descripcion})}>
                                            Edit
                                        </Button>
                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.DeleteFlow(flow.ID_FlujoUsuario)}>
                                            Delete
                                        </Button>

                                        <EditFlowModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        flowid={flowid}
                                        flowmonto={flowmonto}
                                        flowdesc={flowdesc}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <Button variant = "success btn-agregar"
                onClick={()=>this.setState({addModalShow:true})}>
                Agregar un flujo</Button>

                <AddFlowModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </div>      
        );                
    }
}
