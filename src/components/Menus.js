import {React} from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menus = () => {
    return (
        <ListGroup>
            {/* Link to navigate to page */}
            <Link className="list-group-item list-group-item-action" to="/">HOME</Link>
            <Link className="list-group-item list-group-item-action" to="/add-course">ADD COURSE</Link>
            <Link className="list-group-item list-group-item-action" to="/view-course">VIEW COURSES</Link>
            <Link className="list-group-item list-group-item-action" to="/about-us">ABOUT US</Link>
            <Link className="list-group-item list-group-item-action" to="/contact-us">CONTACT</Link>
        </ListGroup>
    );
}

export default Menus;
