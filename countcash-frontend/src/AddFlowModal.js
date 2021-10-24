import React,{Component} from "react";
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Cookies from 'universal-cookie';
var cookies = new Cookies();
const baseUrl = "https://localhost:5001/api/FlujoUsuario/PostFlujoUsuario";
export class AddFlowModal extends Component{
    
    constructor(props){
        super(props);
        // this.state = { flow: [] };
        this.handleSubmit=this.handleSubmit.bind(this);
    }   

    handleSubmit(event){
        event.preventDefault();
        const requestOptions={    
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                usuarioID: cookies.get("id"),
                monto: event.target.Monto.value,
                descripcion: event.target.Descripcion.value,
                tipoFlujoID: event.target.TipoFlujoID.value,                                               
                tipoMontoID: event.target.TipoMontoID.value
            })
        };
        fetch(baseUrl, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({
            monto: data.monto,
            descripcion: data.descripcion,
            tipoFlujoID: data.tipoFlujoID,
            tipoMontoID: data.tipoMontoID                    
        }),
        alert("Creado.")
        )        
    }

    render(){        
        return(
            <div className="container">
                <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Agregar flujo
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="TipoFlujoID">    
                                <Form.Check
                                    inline
                                    label="Gasto"
                                    name="TipoFlujo"
                                    type="radio"
                                    value="2"/>

                                <Form.Check
                                    inline
                                    label="Ingreso"
                                    name="TipoFlujo"
                                    type="radio"
                                    value="1"/>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="Monto">
                                <Form.Label column sm={2}>
                                    Monto:
                                </Form.Label>
                                <Col>
                                    <Form.Control name= "Monto" type="number" required placeholder="0.00"/>
                                </Col>
                            </Form.Group>
                                        
                            <Form.Group className="mb-3" controlId="Descripcion">
                                <Form.Control type="text" name="Descripcion" required placeholder="Descripción"/>
                            </Form.Group>
                                        
                            <Form.Group className="mb-3" controlId="TipoMonto" >
                                <Form.Label>
                                    Tipo de Monto
                                </Form.Label>
                                <Form.Select name="TipoMontoID" defaultValue="Choose...">
                                    <option> Choose...</option>
                                    <option value="1">Ropa</option>
                                    <option value="2">Recreacion</option>
                                    <option value="3"> Educacion</option>
                                    <option value="4">Vivienda</option>
                                    <option value="5">Comida</option>
                                    <option value="6">Transporte y Comunicacion</option>
                                    <option value="7">Ingreso</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group>
                                <Button variant="success" type="submit">
                                    Agregar
                                </Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}