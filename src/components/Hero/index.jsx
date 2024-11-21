import "./hero.scss";
export default function Hero({ img, title }) {
  console.log(img);
  return (
    <section
      className="hero"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("${img}") center/cover no-repeat`
      }}
    >
      <h1 className="hero__title">{title}</h1>
    </section>
  );
}
