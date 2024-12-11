import { Link, Route, Routes } from "react-router";
import Home from "./views/Home";
import About from "./views/About";

function App() {
  return (
    <>
      {/* navbar */}
      <nav className="flex gap-5 font-semibold text-lg">
        {/* gunakan link bukan a  */}
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        {/* gunakan link bukan a  */}
      </nav>
      {/* end navbar  */}

      {/* GUNAKAN INI UNTUK ROUTER  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* GUNAKAN INI UNTUK ROUTER  */}
    </>
  );
}

export default App;
