import logo from './logo.svg';
import './styles.css';

import {SignIn} from './SignIn';
import {Login} from './Login';
import {MainPage} from './MainPage';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navigation } from './Navigation';

function App() {
  return (
    
    <BrowserRouter>
    
    <Navigation/>
    <Switch>
      <Route path='/' component={SignIn} exact/>
      <Route path='/login' component={Login}/>
      <Route path ='/mainpage' component={MainPage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
