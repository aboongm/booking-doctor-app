import NavItem from './NavItem';
import { Link } from 'react-router-dom'

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
      <Link to='/auth/login'>Log in</Link>
      <Link to='/auth/signup'>Register</Link>
    </div>
  );
}

export default NavBar;
