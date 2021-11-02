import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <h1 className="title">MathMagicians</h1>
        <menu className="main-menu">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </menu>
      </nav>
    </header>
  );
}

export default NavBar;
