import { Link, NavLink } from "react-router-dom";
import { useState } from "react"; // Removed unnecessary import of useEffect

const Header = () => {
  const [navOpen, setNavOpen] = useState(false); // Added state for controlling navigation menu visibility

  const toggleNav = () => {
    setNavOpen(!navOpen); // Toggle navigation menu visibility
  };

  return (
    <header>
      <div className="header-wrap">
        <Link to="/" className="header-logo">
          Zoo!
        </Link>
        <nav className={`header-nav ${navOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink exact to="/" onClick={toggleNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals" onClick={toggleNav}>
                Animals
              </NavLink>
            </li>
            <li>
              <NavLink to="/birds" onClick={toggleNav}>
                Birds
              </NavLink>
            </li>
            <li>
              <NavLink to="/insects" onClick={toggleNav}>
                Insects
              </NavLink>
            </li>
            <li>
              <NavLink to="/fish" onClick={toggleNav}>
                Fish
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleNav}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
