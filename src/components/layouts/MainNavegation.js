import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Classes from "./MainNavegation.module.css";
import FavoritesContext from "../../store/favoutires-context";

const MainNavegation = () => {
  /* usamos useContex para crear una pequeña ventana en la barra de navegacion al lado de My Favourites para que cuente cuantos meetups se agregaron */
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetups</Link>
          </li>
          <li>
            <Link to={"/favourites"}>
              My Favourites
              <span className={Classes.badge}>
                {/* se usa totalFavorites para que se cuente cuantos meetups se agregaron a My Favourites ya que en totalFavorites tiene un .lenght y eso nos permite contar */}
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavegation;
