import React,{Component} from "react";
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddFlowModal extends Component{
    constructor(props){
        super(props);
    }
    
    handleSubmit(event){
        event.preventdefault();
        fetch(process.env.REACT_APP_API+'flow',{
            method:'POST',
            header:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                FlowId:null,
                FlowName:event.target.FlowName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render(){
        return(
            <div className="container">
                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Flow
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="FlowName">
                                        <Form.Label>Flow Name</Form.Label>
                                        <Form.Control type="text" name="FlowName" required
                                        placerholder="FlowName"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Flow
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}