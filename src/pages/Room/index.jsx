import "./room.scss";
import { Navigate, useParams } from "react-router-dom";
import rooms from "../../datas/logements.json";
import Carousel from "../../components/Carousel";
import Star from "../../components/Star";

export default function Room() {
  // Find the room with the id from the URL
  const { roomId } = useParams();
  const room = rooms.find((room) => room.id === roomId);
  if (!room) {
    return <Navigate to="/NotFound" />;
  }

  return (
    <main className="room">
      <Carousel pictures={room.pictures} />
      <div className="room__infos">
        <div>
          <div>
            <h1 className="room__title">{room.title}</h1>
            <p className="room__location">{room.location}</p>
          </div>
          <div className="room__tags">
            {room.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="room__tag"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <div className="room__host">
            <p>{room.host.name}</p>
            <img
              src={room.host.picture}
              alt={room.host.name}
            />
          </div>
          <div className="room__rating">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                isActive={index < room.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
