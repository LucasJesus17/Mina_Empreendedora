import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/Login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';

import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import {Provider} from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>

      <Provider store={store}>
        <ToastContainer />
        <Navbar />
        <Router>


          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>



          </Switch>

        </Router>
      </Provider>

    </>


  );
}

export default App;

