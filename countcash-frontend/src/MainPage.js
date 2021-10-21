import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './styles.css';

export class MainPage extends Component{

    render(){
        return(
            <div className="text-center p-3">
            <Button variant = "success btn-agregar">Agregar</Button>
            <Button variant = "danger btn-eliminar">Eliminar</Button>
            </div>
        );                
    }
}