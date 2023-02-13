import React from "react";
import { Badge } from "reactstrap";
const BadgeList = props => {
return (
<div>
<Badge color="secondary" pill>
Blog
</Badge>
<Badge color="primary" tag="div">
What is EDUCBA?
</Badge>
<Badge color="danger">SignUp</Badge>
<Badge color="success">Corporate Training</Badge>
<Badge color="info">Contact Us</Badge>
<Badge color="warning">Verifiable Certificate</Badge>
<Badge color="dark">Reviews</Badge>
<Badge color="light">Privacy Policy</Badge>
</div>
);
};
export default BadgeList;