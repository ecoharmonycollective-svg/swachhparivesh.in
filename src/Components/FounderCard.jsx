import "./styles/Founder.css";
import Quote from "../assets/quote.png";
import PropTypes from "prop-types";
export default function Founder({ image, name, desc, position, about }) {
  return (
    <div className="founder__card row">
      <div className="founder__card__img__container">
        <img src={image} className="founder__card__img" alt={name} />
      </div>
      <div className="founder__card__content col cent">
        <p className="founder__card__desc">
          <b>
            <img src={Quote} className="quote__img" alt="Quote Sign" />
          </b>{" "}
          {desc}
        </p>
        <p className="founder__card__name">{name}</p>
        <p className="founder__card__position">{position}</p>
      </div>
    </div>
  );
}

Founder.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  position: PropTypes.string,
  about: PropTypes.string,
};
