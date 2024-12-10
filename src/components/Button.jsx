import PropTypes from "prop-types";

// Validasi Props dengan PropTypes
Button.propTypes = {
  count: PropTypes.number.isRequired, // 'count' harus berupa angka dan wajib diisi
  setCount: PropTypes.func.isRequired, // 'setCount' harus berupa fungsi dan wajib diisi
};

function Button(props) {
  return (
    <div className="flex gap-5">
      <button
        className="border my-1"
        onClick={() => props.setCount(props.count + 1)}
      >
        Tambah
      </button>
      {props.count > 0 && (
        <button
          className="border my-1"
          onClick={() => props.setCount(props.count - 1)}
        >
          Kurang
        </button>
      )}
    </div>
  );
}

export function Button2() {
  return (
    <>
      <button className="border my-1">Button 2 Gajelas</button>
    </>
  );
}

export default Button;
