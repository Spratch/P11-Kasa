import rooms from "../../datas/logements.json";
import Thumbnail from "../../components/Thumbnail";
import "./home.scss";
import Hero from "../../components/Hero";

export default function Home() {
  const title = "Chez vous, partout et ailleurs";
  const img = "src/assets/hero-bg.jpg";
  return (
    <main>
      <Hero
        title={title}
        img={img}
      />
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
