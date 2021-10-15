import React, {Component} from 'react';
import './styles.css';

export class Login extends Component{

    render(){
        return(
            <form class="form-signin">
        <h3 class="h3 mb-3 fw-normal">Log in</h3>
        <div class="form-floating mb-3">
            <input id="floatingName" class="form-control" type="text" placeholder="Name" />
            <label for="floatingName">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input id="floatingPassword" class="form-control" type="password" placeholder="Pasword" />
            <label for="floatingPassword">Password</label>
        </div>
        <button class="w-75 btn btn-lg btn-outline-success" type="submit">Log in</button>
    </form>
        );                
    }
}