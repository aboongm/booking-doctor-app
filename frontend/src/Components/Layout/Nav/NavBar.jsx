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

    <div className="d-flex align-items-end justify-content-center">
      <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6">Sign in</p>
      <div className="m-0 p-0 bg-primary">
        <p className="mx-0 mb-0 mt-1 px-3 pt-2 pb-3 h6 text-white font-bold">
          Register
        </p>
      </div>
    </div>
  );
}

export default NavBar;
