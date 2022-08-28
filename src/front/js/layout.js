import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Peliculas } from "./pages/peliculas";
import { Category } from "./pages/category";
import { Favoritos } from "./pages/favoritos";
import injectContext from "./store/appContext";
import { Searchingpage } from "./pages/searchingpage";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Registre } from "./pages/registre";
import { Contacta } from "./pages/contacta";
import { Miperfil } from "./pages/miperfil";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Registre />} path="/registre" />
            <Route element={<Contacta />} path="/contacta" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Category />} path="/peliculas/genero/:id" />
            <Route element={<Favoritos />} path="/favoritos" />
            <Route element={<Miperfil />} path="/miperfil" />
            <Route element={<Searchingpage />} path="/searchingpage" />
            <Route element={<Peliculas />} path="/peliculas/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
