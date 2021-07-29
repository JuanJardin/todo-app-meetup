import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetups = () => {
  //useHistory is a React Router DOM hook that gives us access to the browser history para programar la navegacion del usuario
  const history = useHistory();

  function AddMeetupHandler(meetupData) {
    /* fetch() sirve para hacer HTTP requests. Axios cumple la misma funcion. Recibe dos parametros, uno es la direccion URL y el otro es tipo de request */
    /* si se usa fecth() al final de la url donde van a ir a para los datos, SIEMPRE agregar el formato del documento. En este caso es .json */
    fetch("https://todo-app-meetup-default-rtdb.firebaseio.com/meetups.json", {
      mode: "no-cors",
      method: "POST",
      /* pasa los datos de meetupdata y los transforma en objeto JSON */
      body: JSON.stringify(meetupData),
      headers: {
        /* Indicamos que el tipo de formato del documento es JSON */
        "Content-Type": "aplication/json",
      },
    }).then(() => {
        /* replace es para acceder al historial de la navegacion e iniciar la nueva pagina y tambien
        deshabilitar el boton de "atras" del navegador. Como valor se le da la ruta a la que se va redireccionar */
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New meetup</h1>
      {/* OnAddMeetup es un props que se usa en el archivo NewMeetupForm */}
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
};

export default NewMeetups;
