import React,{Component} from "react";
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddFlowModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    onChange = e =>{
        this.setState({value : e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'flow',{
            method:'POST',
            header:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ID_FlujoUsuario:null,
                // Monto:event.target.Monto.value,
                Descripcion:event.target.Descripcion.value
                // Flujo:event.target.Flujo.value,
                // Fecha:event.target.Fecha.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('No se pudo agregar el flujo.');
        })
    }

    render(){
        return(
            <div className="container">
                <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Agregar flujo
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            {/* <Form.Group className="mb-3" controlId="TipoFlujo">    
                                <Form.Check
                                    inline
                                    label="Gasto"
                                    name="tipoFlujo"
                                    type="radio"/>

                                <Form.Check
                                    inline
                                    label="Ingreso"
                                    name="tipoFlujo"
                                    type="radio"/>
                            </Form.Group> */}

                            {/* <Form.Group as={Row} className="mb-3" controlId="Monto">
                                <Form.Label column sm={2}>
                                    Monto:
                                </Form.Label>
                                <Col>
                                    <Form.Control type="text" required placeholder="0.00"/>
                                </Col>
                            </Form.Group> */}
                                        
                            <Form.Group className="mb-3" controlId="Descripcion">
                                <Form.Control type="text" name="Descripcion" required placeholder="Descripción"/>
                            </Form.Group>
                                        
                            {/* <Form.Group className="mb-3" controlId="TipoGasto" >
                                <Form.Label>
                                    Tipo de Gasto
                                </Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group> */}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Agregar
                        </Button>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}