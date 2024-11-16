import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Room from "./pages/Room";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./app.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="room/:roomId"
            element={<Room />}
          />
          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
