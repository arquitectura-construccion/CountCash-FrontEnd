import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css';
import Cookies from 'universal-cookie';

var cookies = new Cookies();
const baseUrl = "https://localhost:5001/api/User/GetUsuario";
export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { user: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }   
    
    handleSubmit(event) {
        event.preventDefault();
        const data = {
            nombre: event.target.LoginName.value,
            contraseña: event.target.LoginPassword.value}
        fetch(baseUrl + "?Nombre=" + data.nombre + "&Contrase%C3%B1a=" + data.contraseña,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },           
            body:undefined,
        })
            .then(res => res.text())
            .then(response=>{
                if(response.length>2)
                {
                    var respuesta=JSON.parse(response);
                    cookies.set('id', respuesta[0].ID_Usuario);
                    window.location.href="/mainpage";
                }
                else{
                    alert("Usuario o contraseña no validos");
                }
            })
            .then((data) => console.log(data))
            .catch(error => console.log("Error detected: " + error))                
    }

    render() {
        const { user } = this.state;
        return (
            <div className="container text-center">
                <h3 className="h3 mb-3 mt-5 fw-normal">Log In</h3>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="LoginName" className="form-signin">
                        <Form.Control type="text" name="LoginName" required placeholder="Nombre" />
                    </Form.Group>                  

                    <Form.Group controlId="LoginPassword" className="form-signin">
                        <Form.Control type="password" name="LoginPassword" required placeholder="Contraseña" />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="success" type="submit">
                            Log In
                        </Button>
                    </Form.Group>
                </Form>
            </div>
            /*<form className="form-signin text-center">
                <h3 class="h3 mb-3 mt-5 fw-normal">Sign up</h3>
                <div class="form-floating mb-3">
                    <input id="floatingName" class="form-control" type="text" placeholder="Name" />
                    <label for="floatingName">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input id="floatingEmail" class="form-control" type="email" placeholder="Email" />
                    <label for="floatingEmail">Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input id="floatingPassword" class="form-control" type="password" placeholder="Pasword" />
                    <label for="floatingPassword">Password</label>
                </div>
                <a class="w-75 btn btn-lg btn-outline-success" type="submit" href="/mainpage">Sign up</a>
            </form>
            */
        );
    }
}