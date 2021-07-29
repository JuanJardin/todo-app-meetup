import Classes from './Card.module.css';
import React from 'react'

const Card = (props) => {
    return (
        <div className={Classes.card}>
            {/* props. children es usado para recibir los datos que hay dentro del component tag <Card><Card/> que se encuentra en MeetupsItem.js */}
            {props.children}
        </div>
    )
}

export default Card
