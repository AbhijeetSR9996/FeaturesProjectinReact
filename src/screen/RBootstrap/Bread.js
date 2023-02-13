import React from "react";
import { Breadcrumb
, BreadcrumbItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const styles = {
marginBottom: "21px"
};

const Bread = props => {
return (
<div style={styles}>
<Breadcrumb tag="nav">
<BreadcrumbItem tag="a" href="#">
Click for Home Screen
</BreadcrumbItem>
<BreadcrumbItem tag="a" href="#">
Click for Blog Menu
</BreadcrumbItem>
<BreadcrumbItem tag="a" href="#">
Click for Training Menu
</BreadcrumbItem>
<BreadcrumbItem active tag="span">
Click for SignUp Menu
</BreadcrumbItem>
</Breadcrumb>
</div>
);
};
export default Bread;