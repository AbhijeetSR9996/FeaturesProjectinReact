import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const ButtonList = props => {
return (
<div>
<Button active>Resources</Button>
<Button disabled>Finance</Button>
<Button href="#">Data Science</Button>
<Button color="success" size="lg">
Software Development
</Button>
<Button color="danger" className="add-class">
Excel
</Button>
<Button color="warning" outline>
Design
</Button>
<Button tag="span">Project Management</Button>
<Button color="warning" block>
EDUCBA
</Button>
</div>
);
};
export default ButtonList;