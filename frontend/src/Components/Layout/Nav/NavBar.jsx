import { Link } from 'react-router-dom';
import NavItem from './NavItem';

function NavBar() {
  return (
    // <nav className="nav">
    //     <Link to="/">App Name</Link>
    //     <ul>
    //         <NavItem to="/about">About</NavItem>
    //         <NavItem to="/auth/login">Log In</NavItem>
    //     </ul>
    // </nav>

    <div className="border d-flex align-center">
      <p>Sign in</p>
      <p>Register</p>
    </div>
  );
}

export default NavBar;
