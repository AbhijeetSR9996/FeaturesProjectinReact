import React from "react";

export class SecondUsage extends React.Component {
    constructor(props) {
    super(props);
    //Defining the initial state values
    this.state = {
    isAllowed: true,
    totalUser: 3
    };
    this.manageInputChange = this.manageInputChange.bind(this);
    }
    manageInputChange(e) {
    const t = e.target;
    const value = t.type === 'checkbox' ? t.checked : t.value;
    const n = t.name;
    this.setState({
    [n]: value
    });
    }
    render() {
    //CSS style for designing of the form, we can add as many as CSS attribute as we want
    let formStyle={
    backgroundColor:"yellow"
    }
    return (
    <form style={formStyle}>
    <label className="lebel-class">
    Is user allowed:
    //Here input fields are written with the help of the state and functions , instead of using the name and claa like attribute to control the input fields .
    <input
    name="isAllowed"
    type="checkbox"
    checked={this.state.isAllowed}
    onChange={this.manageInputChange} />
    </label>
    <br />
    <label>
    Total number of Users:
    <input
    name="totalGuestUser"
    type="number"
    value={this.state.totalUser}
    onChange={this.handleInputChange} />
    </label>
    </form>
    );
    }
    }