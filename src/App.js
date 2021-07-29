/* este proyecto se trata de hacer una app en donde el cliente crea que esta navegando
a traves de varias paginas, pero en realidad todo se va a realizar dentro de una sola pagina, 
unicamente vamos a jugar con los elementos que se van a mostrar en la pagina. */
import { Route, Switch } from "react-router-dom";
import React from "react";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favourites from "./pages/Favourites";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      {/* Switch sirve para indicar que una sola ruta debe estar activa */}
      <Switch>
        {/* exact se usa para la ruta a la que se esta por redirigir sea exactamente
         como esta establecida por todas las rutas empiezan con "/" */}
        <Route exact path="/" component={AllMeetups} />
        <Route path="/new-meetup" component={NewMeetups} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </Layout>
  );
}

export default App;
