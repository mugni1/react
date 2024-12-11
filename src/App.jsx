import { useState } from "react";
import { useEffect } from "react";
import swal from "sweetalert";
import Welcome, { Welcome2 } from "./components/Welcome";
import axios from "axios";
import NewsList from "./components/NewsList";
import Button from "./components/Button";

function App() {
  // state count
  const [count, setCount] = useState(0);

  // state news
  const [news, setNews] = useState([]);

  // loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.spaceflightnewsapi.net/v4/blogs/",
    })
      .then((response) => {
        setNews(response.data.results);
      })
      .catch((error) => {
        swal({
          icon: "error",
          title: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="container mx-auto">
        {/* dengan children  */}
        <Welcome>Dengan Children</Welcome>

        {/* tanpa children  */}
        <Welcome2 text="Tanpa Children" />

        {/* COUNT  */}
        <h1 className="font-bold text-xl">{count}</h1>
        <Button count={count} setCount={setCount} />
        {/* END COUNT  */}

        {/* LIST BERITA  */}
        {loading ? (
          <p className="font-semibold text-2xl">Loading...</p>
        ) : (
          <NewsList news={news} />
        )}
        {/* END LIST BERITA  */}
      </section>
    </>
  );
}

export default App;
