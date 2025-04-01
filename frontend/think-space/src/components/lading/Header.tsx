import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="">
    <FontAwesomeIcon className="md:text-3xl text-md" icon={faShapes} />
    <h2
      className="md:text-3xl text-md font-bold inline-block ml-2"
      aria-label="Think Space"
    >
      Think Space
    </h2>
  </header>
);

export default Header;
