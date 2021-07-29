import { useRef } from "react";
import Card from "../ui/Card";
import Classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  //se establecen las referencias (con useRef y ref que esta en los input) para input y textarea
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    //se le dice que cada uno de estos campos debe tener un valor
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    //se le dice al formulario que se debe enviar a la url de creacion de meetup y con su valor asignado
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    console.log(meetupData);
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={Classes.form} onSubmit={submitHandler}>
        <div className={Classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            ref={titleInputRef}
            required
          />
        </div>
        <div className={Classes.control}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Image"
            ref={imageInputRef}
            required
          />
        </div>
        <div className={Classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            name="address"
            placeholder="Address"
            ref={addressInputRef}
            required
          />
        </div>
        <div className={Classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="description"
            id="description"
            name="description"
            placeholder="Description"
            ref={descriptionInputRef}
            row="5"
            required
          ></textarea>
        </div>
        <div className={Classes.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
