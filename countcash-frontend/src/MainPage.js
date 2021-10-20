import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { AddFlowModal } from './AddFlowModal';
import './styles.css';

export class MainPage extends Component{

    constructor(props){
        super(props);
        this.state={flows:[], addModalShow:false}
    }

    render(){
        const {flows}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div className="text-center p-3">
            <Button variant = "success btn-agregar"
            onClick={()=>this.setState({addModalShow:true})}>
            Agregar</Button>
            
            <AddFlowModal show={this.state.addModalShow}
            onHide={addModalClose}/>
            
            <Button variant = "danger btn-eliminar  ">
            Eliminar</Button>
            </div>
        );                
    }
}