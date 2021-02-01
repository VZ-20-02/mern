import {
    Link
} from "react-router-dom";
const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contacts">All Contacts</Link>
                </li>
                <li>
                    <Link to="/add">Add Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;