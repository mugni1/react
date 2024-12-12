import { Link, Outlet } from "react-router";

function About() {
  return (
    <>
      <h1 className=" font-semibold text-2xl">Ini Halaman About</h1>

      <ul>
        <li>
          <Link to="team">Team</Link>
        </li>
      </ul>
      {/* Outlet untuk mengambil koneten dari child  */}
      <Outlet />
    </>
  );
}

export default About;
