import "./Button.scss";

const Button = ({
  text,
  backgroundColor = "#dd7dff",
  width = "294px",
  link,
  external = false,
  email = false,
}) => {
  return (
    <>
      {email ? (
        <button
          type="submit"
          style={{ backgroundColor: backgroundColor, width: `${width}` }}
          className="button"
        >
          {text}
        </button>
      ) : (
        <a
          href={link}
          style={{ backgroundColor: backgroundColor, width: `${width}` }}
          className="button"
          target={external ? "_blank" : "_self"}
          rel="noreferrer"
        >
          {text}
        </a>
      )}
    </>
  );
};

export default Button;
