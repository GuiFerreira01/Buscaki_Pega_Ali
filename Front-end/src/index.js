  // Arquivos

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
 
  //  CSS
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './index.css';

  //  Conteudo Main Page
  import Main from './Main'
  import Produto from './Produtos';
  import PedroProduto from './Pedro_produt'
  import Pesquisa from './Pesquisa'
  import RegistrarProduto from './Pages/RegistroProduto/RegistroProduto'
  import Perfil from './Perfil';
  import Iphone from './iphone';
  import Login from './Pages/Login/Login';
  import Registrar from './Pages/Login/Registrar-se';
import MainLogado from './MainLogado';


  ReactDOM.render(
      < Router >
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/=" exact element={<MainLogado />} />
          <Route path="/user" element={<Produto />} />
          <Route path="/Pesquisa" element={<Pesquisa />} />
          <Route path="/produto/:id" element={<PedroProduto />} />
          <Route path="/RegistroProduto" element={<RegistrarProduto />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/iphone" element={<Iphone/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Registrar-se" element={<Registrar/>} />
        </Routes>
      </Router>, 
    document.getElementById('root')
  );
