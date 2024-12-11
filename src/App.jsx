import { useState } from "react";
import { useEffect } from "react";
import Button, { Button2 } from "./components/Button";
import Welcome, { Welcome2 } from "./components/Welcome";
import axios from "axios";
import NewsList from "./components/NewsList";

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
      .then(function (response) {
        setNews(response.data.results);
      })
      .catch((error) => {
        console.log(error);
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

        <h1 className="font-bold text-xl">{count}</h1>
        <Button count={count} setCount={setCount} />
        <Button2 />

        {loading ? (
          <p className="font-semibold text-2xl">Loading...</p>
        ) : (
          <NewsList news={news} />
        )}
      </section>
    </>
  );
}

export default App;
