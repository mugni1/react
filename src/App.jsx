import React from "react";
import Button, { Button2 } from "./components/Button";
import Welcome, { Welcome2 } from "./components/Welcome";
import axios from "axios";
import NewsList from "./components/NewsList";

function App() {
  const [count, setCount] = React.useState(0);

  // state news
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://api.spaceflightnewsapi.net/v4/blogs/",
    }).then(function (response) {
      console.log(response.data.results);
      setNews(response.data.results);
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

        <NewsList news={news} />
      </section>
    </>
  );
}

export default App;
