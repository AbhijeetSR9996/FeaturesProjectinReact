import React from "react";
import './styles.css';
//import ReactDOM from "react-dom";

class Usage extends React.Component {
constructor(props) {
super(props);
this.state = {
activeUsers: null
};
}
componentDidMount() {
setTimeout(() => {
this.setState({
activeUsers: 1200000
});
}, 2500);
}
render() {
return (
<div>
<h1>Welcome to EDUCBA</h1>
<h2>We are the best Training providers on Latest Emerging Technologies.</h2>
<h3>People Enrolled for our Training: {this.state.activeUsers}</h3>
</div>
);
}}
export default Usage;