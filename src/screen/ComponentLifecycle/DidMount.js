import React from 'react';
import ReactDOM from 'react-dom';
export class DidMount extends React.Component {
constructor(props) {
super(props);
this.state = {foodIlove: "Pizza"};
}
componentDidMount() {
setTimeout(() => {
this.setState({foodIlove: "Chicken Biryani"})
}, 2000)
}
render() {
return (
<h1>{this.state.foodIlove} is My Love! </h1>
);
}
}