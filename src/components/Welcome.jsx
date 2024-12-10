import PropTypes from "prop-types";

Welcome.propTypes = {
  children: PropTypes.string,
};
function Welcome(props) {
  return (
    <>
      <h1 className="font-semibold text-2xl pb-1 px-5 bg-black text-white rounded-lg mt-5 text-center">
        {props.children}
      </h1>
    </>
  );
}

Welcome2.propTypes = {
  text: PropTypes.string,
};
export function Welcome2(props) {
  return (
    <>
      <h1 className="font-semibold text-2xl pb-1 px-5 bg-black text-white rounded-lg mt-5 text-center">
        {props.text}
      </h1>
    </>
  );
}

export default Welcome;
