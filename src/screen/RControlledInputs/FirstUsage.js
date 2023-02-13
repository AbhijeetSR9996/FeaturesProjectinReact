import React from "react";

export class FirstUsage extends React.Component {
    HandleSubmit = () => {
    //Here we are controlling the input with help of thee name of the input fields
    const user = this.user.value;
    }
    render() {
    //CSS style for designing of the form , we can add as many as CSS attribute as we want
    let formStyle={
    backgroundColor:"yellow"
    }
    return (
    <div style={formStyle}>
    //Input fields with the ref as the reference of the input field for controlling with user reference
    <input type="text" ref={input =>this.user = input} />
    //A function to control the value of the input , this function get called on clicking and we can perform the respective tasks inside the function
    <button onClick={this.HandleSubmit}>Enter the name of user</button>
    </div>
    );
    }
    }