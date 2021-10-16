import React, { Component } from 'react';
import './styles.css';

export class SignIn extends Component {

    render() {
        return (            
            <form className="form-signin text-center">
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
        );
    }
}