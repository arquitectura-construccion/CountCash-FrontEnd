import React,{Component} from "react";
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

const baseUrl = "https://localhost:5001/api/FlujoUsuario/PostFlujoUsuario";
export class AddFlowModal extends Component{
    
    constructor(props){
        super(props);
        this.state = { flow: [] };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    refreshList() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ flow: data })
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    onChange = e =>{
        this.setState({value : e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(baseUrl,{
            method:'POST',
            header:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                TipoFlujo: event.target.TipoFlujo.value,
                Monto: event.target.Monto.value,
                Descripcion: event.target.Descripcion.value,
                // Flujo: event.target.Flujo.value,
                TipoMonto: event.target.TipoMonto.value
            }
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
        const { flow } = this.state;
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
                            <Form.Group className="mb-3" controlId="TipoFlujo">    
                                <Form.Check
                                    inline
                                    label="Gasto"
                                    name="TipoFlujo"
                                    type="radio"/>

                                <Form.Check
                                    inline
                                    label="Ingreso"
                                    name="TipoFlujo"
                                    type="radio"/>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="Monto">
                                <Form.Label column sm={2}>
                                    Monto:
                                </Form.Label>
                                <Col>
                                    <Form.Control name= "Monto" type="text" required placeholder="0.00"/>
                                </Col>
                            </Form.Group>
                                        
                            <Form.Group className="mb-3" controlId="Descripcion">
                                <Form.Control type="text" name="Descripcion" required placeholder="Descripción"/>
                            </Form.Group>
                                        
                            <Form.Group className="mb-3" controlId="TipoMonto" >
                                <Form.Label>
                                    Tipo de Monto
                                </Form.Label>
                                <Form.Select name="TipoMonto" defaultValue="Choose...">
                                    <option>Ropa</option>
                                    <option>Recreacion</option>
                                    <option>Educacion</option>
                                    <option>Vivienda</option>
                                    <option>Comida</option>
                                    <option>Transporte y Comunicacion</option>
                                    <option>Ingreso</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="submit">
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