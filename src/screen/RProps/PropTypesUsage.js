import PropTypes from 'prop-types';
import React from 'react';

class PropTypesUsage extends React.Component{
render(){
return(
<div>
{}
<h1>Example of React PropTypes with</h1>
<h2>
Array Example:
{this.props.arrayProp}
<br />
</h2>
<h3>
String Example:
{this.props.stringProp}
<br />
</h3>
<h4>
Number Example:
{this.props.numberProp}
<br />
</h4>
<h5>
Boolean Example (which is set True)
{this.props.boolProp}
<br />
</h5>
</div>
);
}
}
PropTypesUsage.propTypes = {
arrayProp: PropTypes.array,
stringProp: PropTypes.string,
numberProp: PropTypes.number,
boolProp: PropTypes.bool,
}
PropTypesUsage.defaultProps = {
numberProp: "15",
stringProp: "EDUCBA",
arrayProp: ['Rahul', 'Adarsh', 'Ankush'],
boolProp: true,
}
export default PropTypesUsage;