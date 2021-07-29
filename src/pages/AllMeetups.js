import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupsList";

const AllMeetups = () => {
  //Esta primera constante permite que la pagina quede cargando hasta que se hayan cargado todos los meetups por ese motivo es que esta en true, porque debe quedar cargando hasta que se carguen todos los meetups.
  const [IsLoading, setIsLoading] = useState(true);
  //Esta segunda constante se ejecuta cuando se terminan de cargar los meetups
  const [LoadedMetups, setLoadedMetups] = useState([]);

  useEffect(() => {
    /* el useEffect va a comenzar con setIsLoading(true) y en el fetch() va a cambiar a false */
    setIsLoading(true);
    /* Si no indicamos el segundo parameto, el metodo va a ser GET por defecto */
    fetch("https://todo-app-meetup-default-rtdb.firebaseio.com/meetups.json")
      .then(function (response) {
        /* la respuesta debe volver en formato .json */
        return response.json();
      })
      .then(function (data) {
        /* vamos a transformar la data en un array en vez de que sea un json porque .map (ubicado en MeetupsList.js) mapea solamente arrays */
        const meetups = [];
        /* Creamos un ciclo for para recorrer todos los meetups a traves de su key (id generado automaticamente por firebase) y de esa forma se transformen en un array */
        for (const key in data) {
          const meetup = {
            /* se establece que el id es igual a key */
            id: key,
            /* se extraen el resto de los datos de acuerdo a su key o id */
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        /* configuracion para que una vez que se hayan cargado los meetups, que se rendericen */
        setLoadedMetups(meetups);
      });
  }, []);

  if (IsLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* meetups se va a usar como props en el archivo MeetupsList.js */}
      <MeetupList meetups={LoadedMetups} />
    </section>
  );
};

export default AllMeetups;
