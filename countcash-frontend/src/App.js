import logo from './logo.svg';
import './styles.css';

import {SignIn} from './SignIn';
import {Login} from './Login';
import {MainPage} from './MainPage';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DynamicLayout from './DynamicLayout';

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <DynamicLayout exact path='/' component={SignIn} layout="SIGNUP"/>
      <DynamicLayout path='/login' component={Login} layout="LOGIN"/>
      <DynamicLayout path ='/mainpage' component={MainPage} layout="MAIN"/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
