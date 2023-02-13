import React from 'react';
import ReactDOM from 'react-dom';
export class WillUnmount extends React.Component {
constructor(props) {
super(props);
this.state = {show: true};
}
Headerdel = () => {
this.setState({show: false});
}
render() {
let footer;
if (this.state.show) {
footer = <Child />;
};
return (
<div>
<button type="button" onClick={this.Headerdel}>Click to Delete Below Heading</button>
{footer}
</div>
);
}
}
class Child extends React.Component {
componentWillUnmount() {
alert("Unmounting, as the footer gets deleted");
}
render() {
return (
<h1>Heyoo! Buddy.</h1>
);
}
}