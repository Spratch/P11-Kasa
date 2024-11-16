import { Link } from "react-router-dom";
import "./notFound.scss";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&quot;existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  );
}
