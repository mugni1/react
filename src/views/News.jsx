import { Link } from "react-router";
export default function News() {
  return (
    <>
      <h1 className="font-semibold text-2xl">Ini Halaman News</h1>
      <ul>
        <li>
          <Link to="/news/2/detail">Berita 1</Link>
        </li>
        <li>
          <Link to="/news/4/detail">Berita 2</Link>
        </li>
        <li>
          <Link to="/news/8/detail">Berita 3</Link>
        </li>
      </ul>
    </>
  );
}
