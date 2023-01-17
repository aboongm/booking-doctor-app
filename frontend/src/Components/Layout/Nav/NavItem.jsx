import { Link } from 'react-router-dom'

function NavItem({to, children, ...props}) {

    return (
        <li>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default NavItem;