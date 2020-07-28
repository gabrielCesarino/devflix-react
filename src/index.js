import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import { BrowserRouter, Switch, Route} 
from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'

const Pagina404 = () => (<div> 404 </div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component = {Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') 
);


