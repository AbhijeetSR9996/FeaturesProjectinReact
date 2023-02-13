import React from "react";
export default class Person extends React.Component{
render(){
return(
<div>
<span>Name: {this.props.person.name}</span>
<span>Gender: {this.props.person.gender}</span>
<span>Age: {this.props.person.age}</span>
</div>
);
}
}