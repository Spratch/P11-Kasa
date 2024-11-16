import rooms from "../../datas/logements.json";
import Thumbnail from "../../components/Thumbnail";
import "./home.scss";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero__title">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="rooms">
        {rooms.map((room, index) => {
          return (
            <Thumbnail
              key={index}
              room={room}
            />
          );
        })}
      </section>
    </main>
  );
}
