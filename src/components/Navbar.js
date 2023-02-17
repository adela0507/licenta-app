import {Component} from "react";
import "./NavbarStyles.css";

class Navbar extends Component{
    render(){
        return(
<nav className="NavbarItems">
    <h1 className="navbarlogo">
UBBFSEGA
    </h1>
    <ul className="nav-menu">
        <li>
            <Link> <i class="fa-solid fa-house-user">
            </i>
            Home
            </Link>
        </li>
    </ul>
</nav>
        );
    }
}
export default Navbar;