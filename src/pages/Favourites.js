import { useContext } from 'react'
import FavoritesContext from '../store/favoutires-context'
import MeetupList from '../components/meetups/MeetupsList'

const Favourites = () => {
    const favoutireCtx = useContext(FavoritesContext)
    /* se utiliza el context de nuevo para llamar al nuevo array favorites ubicado en el archivo favourites-context.js*/

    let content;
/* con este if lo que hacemos es, si no hay ninguna meetup en My Favourites se muestra el mensaje que se encuentra en la etiqueta <p>, de lo contrario, se muestran los meetups de My Favourites */
    if (favoutireCtx.favorites.length === 0) {
        content = <p>Yo got no favorite yet. Do you wanna add some?</p>
    } else {
        /* a MeetupList lo seteamos para que pase los datos al array llamado favourites */
        content = <MeetupList meetups={favoutireCtx.favorites}/>

    }

    return (
        <section>
            <h1>Favourites</h1>
            {content}
        </section>
    )
}

export default Favourites
