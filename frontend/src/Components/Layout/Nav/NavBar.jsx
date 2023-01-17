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

    <div className="container mx-auto w-full border">
      <p class="text-primary text-lg">Hello</p>
    </div>
  );
}

export default NavBar;
