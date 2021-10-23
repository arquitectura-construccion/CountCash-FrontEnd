import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css';

const baseUrl = "https://localhost:5001/api/User/PostUsuario";
export class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = { user: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    refreshList() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ user: data })
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(baseUrl,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                nombre: event.target.SigninName.value,
                contraseña: event.target.SigninPassword.value,
                email: event.target.SigninEmail.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert("Failed");
                }
            )
    }

    render() {
        const { user } = this.state;
        return (
            <div className="container text-center">
                <h3 className="h3 mb-3 mt-5 fw-normal">Sign Up</h3>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="SigninName" className="form-signin">
                        <Form.Control type="text" name="SiginnName" required placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="SigninEmail" className="form-signin">
                        <Form.Control type="email" name="SigninEmail" required placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="SigninPassword" className="form-signin">
                        <Form.Control type="password" name="SigninPassword" required placeholder="Password" />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="success" type="submit">
                            Sign Up
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