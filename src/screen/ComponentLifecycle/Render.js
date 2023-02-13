import React from 'react';
import ReactDOM from 'react-dom';
export class Render extends React.Component {
constructor(props) {
super(props);
this.state = {foodIlove: "Pizza"};
}
changeFood = () => {
this.setState({foodIlove: "Chicken Biryani"});
}
render() {
return (
<div>
<button type="button" onClick={this.changeFood}>Change Food Name</button>
<h1>{this.state.foodIlove} is My Love!</h1>
</div>
);
}
}