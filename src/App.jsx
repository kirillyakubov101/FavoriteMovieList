import { Routes, Route } from "react-router-dom";
import "./components/MovieCard";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
