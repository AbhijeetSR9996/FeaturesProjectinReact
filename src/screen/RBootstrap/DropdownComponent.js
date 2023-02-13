import React from "react";
import {
Dropdown
, DropdownToggle
, DropdownMenu
, DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class DropdownComponent extends React.Component {
constructor(props) {
super(props);
this.toggle = this.toggle.bind(this);
this.state = {
dropdownOpen: false
};
}
toggle() {
this.setState({
dropdownOpen: !this.state.dropdownOpen
});
}
render() {
return (
<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
<DropdownToggle caret>Bundle Certification Courses</DropdownToggle>
<DropdownMenu>
<DropdownItem header>Financial Analyst Course</DropdownItem>
<DropdownItem disabled>Data Science Course</DropdownItem>
<DropdownItem>Software Development Course</DropdownItem>
<DropdownItem divider />
<DropdownItem>Excel VBA Course</DropdownItem>
</DropdownMenu>
</Dropdown>
);
}
}