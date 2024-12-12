import { Link, Route, Routes } from "react-router";
import Home from "./views/Home";
import About from "./views/About";
import AboutTeam from "./views/AboutTeam";
import News from "./views/News";

function App() {
  return (
    <>
      {/* navbar */}
      <nav className="flex gap-5 font-semibold text-lg py-4 bg-slate-600 text-white">
        {/* gunakan link bukan a  */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        {/* gunakan link bukan a  */}
      </nav>
      {/* end navbar  */}

      {/* GUNAKAN INI UNTUK ROUTER  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<AboutTeam />} />
        </Route>
        <Route path="/news" element={<News />} />
      </Routes>
      {/* GUNAKAN INI UNTUK ROUTER  */}
    </>
  );
}

export default App;
