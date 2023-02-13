import React from "react";
import { ListGroup
, ListGroupItem } from "reactstrap";
import "./styless.css";
const Listgroup = props => {
return (
<ListGroup flush>
<ListGroupItem>Welcome to Our Page</ListGroupItem>
<ListGroupItem tag="a" href="#">
Click for more Information
</ListGroupItem>
<ListGroupItem>Click to Contact Us</ListGroupItem>
<ListGroupItem>Click for Training Videos</ListGroupItem>
<ListGroupItem>Click for Specialization Courses</ListGroupItem>
</ListGroup>
);
};
export default Listgroup;