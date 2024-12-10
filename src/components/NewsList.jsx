import PropTypes from "prop-types";

NewsList.propTypes = {
  news: PropTypes.array,
};

function NewsList(props) {
  return (
    <ul>
      {props.news.map((item) => (
        <li key={item.id} className="mb-5">
          <img className="w-3/12" src={item.image_url} alt="" />
          <b>{item.title}</b>
        </li>
      ))}
    </ul>
  );
}

export default NewsList;
