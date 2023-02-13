import React from "react";
import "./styles.css";
const SimpleTextInput = ({ type="text", label, value, onChange })=>(
<div className="simple-form-group-example">
{label &&<label className="simple-text-label-example">{label}</label>}
<input
type={type}
className="simple-text-input-format"
value={value}
onChange={e =>onChange&&onChange(e.target.value)}
/>
</div>
);
export default SimpleTextInput;