import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Links = (props) => {
  const { path, icon } = props.links;
  return (
    <li>
      <Link to={path}>
        <img src={icon} alt="sidebar images" />
      </Link>
    </li>
  );
};

Links.propTypes = {
  links: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default Links;
