import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader--text">Loading</div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
