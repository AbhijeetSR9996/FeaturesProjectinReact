import React from 'react';

class ChildComponent extends React.Component {
state = {
name: 'Ankush'
}
update = () => {
this.props.updateData(this.state.name);
}
render() {
return (
<div>
<button onClick={this.update}>Kindly Click Me</button>
</div>
)
}
}
class Usage extends React.Component {
state = {
name: 'Rahul'
};
updateData = (value) => {
this.setState({ name: value })
}
render() {
return (
<div>
<p>Name: {this.state.name}</p>
<ChildComponent updateData={this.updateData} />
</div>
)
}
}
export default Usage;