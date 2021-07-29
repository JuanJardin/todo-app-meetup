import React from "react";
import MeetupsItem from "./MeetupsItem";
import Classes from "./MeetupsList.module.css";

const MeetupsList = (props) => {
  return (
    <ul className={Classes.list}>
      {/* utilizamos meetup como props para llamar a los datos de DUMMY_DATA. meetup se encuentra en AllMeetups.js */}
      {props.meetups.map((meetup) => (
        <MeetupsItem 
        key={meetup.id} 
        id={meetup.id} 
        image={meetup.image} 
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupsList;
