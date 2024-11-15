import { Link } from 'react-router-dom';
import rooms from '../../datas/logements.json';

export default function Home() {

    return (
        <div>
            <h1>Accueil</h1>
            <section>
                {rooms.map((room, index) => {
                    return (
                        <Link key={index} to={`/room/${room.id}`}>
                            <article>
                                <img src={room.cover} alt={room.title} />
                                <h2>{room.title}</h2>
                                <p>{room.description}</p>
                            </article>
                        </Link>
                    )
                })}
            </section>
        </div>
    )
}