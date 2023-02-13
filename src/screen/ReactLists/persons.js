import React from "react";
export default class Persons extends React.Component{
handleClick = e => {
this.props.person(e.target.value);
};
render(){
let list =this.props.list; return(
<div>
<div>Important People of Our Organisation</div>
{}
<div>
{list.map(each => (
<span>
<li key={each.id}>
{each.name}
<button onClick={this.handleClick} value={each.id}> Click to see details
</button>
</li>
</span>
))}
</div>
</div>
);
}
}