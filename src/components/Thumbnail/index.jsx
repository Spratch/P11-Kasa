import { Link } from "react-router-dom";
import "./thumbnail.scss";

export default function Thumbnail({ room }) {
  return (
    <Link
      to={`/room/${room.id}`}
      className="thumbnail"
    >
      <img
        className="thumbnail__image"
        src={room.cover}
        alt={room.title}
      />
      <div className="thumbnail__background"></div>
      <h2 className="thumbnail__title">{room.title}</h2>
    </Link>
  );
}
