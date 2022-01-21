import React from 'react';

import Home from './paginas/home/Home';

import Navbar from './components/estaticos/navbar/Navbar';

import Footer from './components/estaticos/footer/Footer';

import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

import Sobre from './paginas/sobre/Sobre';

import Contato from './paginas/contato/Contato';

import Login from './paginas/Login/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Box} from '@material-ui/core';

import './App.css';




function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/cadastrousuario">
            <CadastroUsuario></CadastroUsuario>
          </Route>
          <div style={{ minHeight: '100vh' }}>
            
            <Navbar></Navbar>
            <Route exact path="/">
              <Login></Login>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/sobre">
              <Sobre></Sobre>
            </Route>
            <Route path="/contato">
              <Contato></Contato>
            </Route>
         
          </div>
        </Switch>
        <Footer></Footer>
      </Router>
    </>


  );
}

export default App;

