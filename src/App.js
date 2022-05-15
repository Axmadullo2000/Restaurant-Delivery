import { Routes, Route } from "react-router-dom"

import { Home } from './components/Home';

import { NotFound } from './components/NotFound';

import { Header } from './layouts/Header';

import { Footer } from './layouts/Footer';

import { Product } from './components/Product';

import './App.css';

import { Recipe } from "./components/Recipe";

const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/product/:name" element={ <Product /> } />
        <Route path="/product/recipe/:id" element={ <Recipe /> } />

        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export { App };
