import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/Login/Login';
import './App.css';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sobre from './paginas/sobre/Sobre';
import Perfil from './paginas/perfil/Perfil';
import Contato from './paginas/contato/contato';




function App() {
  return (
    <>


      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Navbar />


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

            <Route path='/perfil'>
              <Perfil />
            </Route>

            <Route path='/contato'>
              <Contato />
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

            <Route path='/sobre'>
              <Sobre />
              <Footer />
            </Route>

          </Switch>

        </Router>
      </Provider>

    </>


  );
}

export default App;

