import React
, {Component} from 'react'
//import {render} from 'react-dom'
import {NumericFormat} from 'react-number-format'
import AutosizeInput from 'react-input-autosize'

export class RNumFormat extends Component {
state = {n: '0'}
render() {
return (
<div>
<h2>Welcome to React Number Format Example</h2>
<NumericFormat
customInput={AutosizeInput}
isNumericString={true}
allowNegative={false}
decimalSeparator="."
decimalScale={3}
value={this.state.n}
onChange={s => this.setState({n: s.value})}
/>
<h3>***Thank You***</h3>
</div>
)
}
}