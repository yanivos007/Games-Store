import "./App.css";
import Games from "./components/Games";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import NavBar from "./components/NavBar";
import GameDetails from "./components/GameDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route extact path="/games" element={<Games />} />
          <Route path="/create" element={<Create />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
