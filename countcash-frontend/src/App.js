import logo from './logo.svg';
import './styles.css';

import {SignIn} from './SignIn';
import {Login} from './Login';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navigation } from './Navigation';

function App() {
  return (
    <BrowserRouter>   

    <Navigation/>

    <Switch>
      <Route path='/' component={SignIn} exact/>
      <Route path='/login' component={Login}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
