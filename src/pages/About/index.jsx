import Dropdown from "../../components/Dropdown";
import Hero from "../../components/Hero";
import about from "../../datas/about.json";
import "./about.scss";

export default function About() {
  const img = "src/assets/hero-bg2.jpg";

  return (
    <main>
      <Hero
        title=""
        img={img}
      />

      {/* Dropdowns */}
      <section className="about">
        {about.map((chapter, index) => (
          <Dropdown
            key={index}
            title={chapter.title}
            content={chapter.content}
          />
        ))}
      </section>
    </main>
  );
}
