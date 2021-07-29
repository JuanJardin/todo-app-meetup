import { useContext } from "react";
import Card from "../ui/Card";
import Classes from "./MeetupsItem.module.css";
import FavouriteContext from "../../store/favoutires-context";

const MeetupsItem = (props) => {
  /* le asignamos a la constante el useContex y usamos el archivo FavoutireContext */
  const favoutireCtx = useContext(FavouriteContext);
  /* a esta constante le damos el valor de la funcion que vamos a utilizar del context. La funcion que vamos a usar es itemIsFavourite y le damos de parametro el ID del meetup con props para que haga la validacion */
  /* la funcion itemIsFavourites evalua el valor a true y eso lo vamos a terminar de evaluar en la funcion toogleFavouritesStatusHandler */
  const itemIsFavourite = favoutireCtx.itemIsFavorite(props.id);

  /* a esta funcion le vamos a pasar data desde context */
  function toogleFavouritesStatusHandler() {
    /* con este if vamos a evaluar si vamos a agregar o quitar meetups de My Favourites. ItemIsFavourites evalua el valor a true, por lo tanto debemos evaluar primero para que sea falso y de esa forma remover un meetup de My Favourites a travez de props.id, de lo contrario debemos agregar el meetup a My Favourites y pasarle todos los datos que tiene a traves de props */
    if (itemIsFavourite) {
      favoutireCtx.removeFavorite(props.id);
    } else {
      favoutireCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  /* usa props para llamar los datos de firebase */
  return (
    <li className={Classes.item}>
      <Card>
        <div className={Classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={Classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={Classes.actions}>
          {/* vamos a alterar el texto que debe mostrar el button dependiendo de si el meetup se agregó a My Favourites o no */}
          {/* si itemIsFavourites es true el button debe decir "remove from My Favourites" y si es falso debe decir "Add to My Favourites" */}
          <button onClick={toogleFavouritesStatusHandler}>
            {itemIsFavourite
              ? "Remove from My Favourites"
              : "Add to My Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupsItem;
