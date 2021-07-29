/* este archivo es un context que se va a usar para poder añadir meetups a My Favourites
a traves de un manejador de estados createContext */

/* Este context se va a usar en los componentes MeetupItem.js, index.js */

import { createContext, useState } from "react";

/* Por lo general solamente se comienza con mayuscula en components pero este objeto javascript, creado por context, contiene un react component */
/* createContext lleva un argumento ese argumento es un valor inicial para ese contexto, cualquier valor que yo elija, en este caso vamos a usar un objeto */
const FavoritesContext = createContext({
  /* favourites key el cual es un array vacio inicialmente porque no tenemos ningun favorito en un principio */
  favorites: [],
  /* es 0 porque es el numero total de favoritos */
  totalFavorites: 0,
  /* se agregan estas tres ultimas funciones vacias para una mejor auto finalizacion  */
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

/* esta funcion va a ser nuestro react component y sera el encargado de proveer este contexto a todos los componentes interesados en escuchar los valores. Tambien sera el encargado de actualizar los valores del context */
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  /* si el meetup no esta en el array, que se enceuntra en el useState de setUserFavourites, de favoritos lo añadimos */
  /* .concat() es como .push() pero debvuelve un nuevo array con el meetup agregado */
  /* para evitar problemas con que no se actualizo la pagina My Favourites y no se agrego el meetup, usamos un arrow function para que la funcion se ejecute instantaneamente */
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      /* .filter() devuelve un nuevo array en donde podemos filtrar items y queremos filtrar los items que meetupId conincidan con el ID que tenemos como parametro*/
      /* filter toma una funcion como argumento que es ejecutado por cada item de este array. tenemos que devolver true si queremos manterer el meetup en nuestros favoritos o falso si queremos sacarlo de este nuevo array */
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
      /* se devuelve true si favourite.id no es igual a meetupId, si es falso, se borra el meetup de favoritos */
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    /* .some() devuelve true si alguno de los items de la array que se le pasa como argumento es igual a la variable que se le pasa como parametro */
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    /* cuando el estado de UserFavourites cambie el valor de favourites, es decir favourites: UserFavourites, va a cambiar y vamos a tener un nuevo context*/
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    /* <FavouriteContext.Provider> se va a usar para envolver todo el proyecto para que se pueda usar el context y se usa el {props.children} para que adapte las propiedades necesarias que tenga que tomar de acuerdo a que componente se este por ejecutar */
    /* FavouriteContext.Provider, que es traido de la constante FavouriteContext, necesita un value prop en el que pasamos el contex value actual */

    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
