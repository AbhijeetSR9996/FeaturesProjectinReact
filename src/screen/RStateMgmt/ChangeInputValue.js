import React
, { useContext } from "react";
import AppContext from "./AppContext";
const ChangeInputValue = props => {
const { value, setValue } = useContext(AppContext);
const updateValue = () => {
const newValue = document.querySelector(".newValue").value;
setValue(newValue);
document.querySelector(".newValue").value = "";
};
return (
<>
<h2>Change Value Here</h2>
<input className="newValue" placeholder="enter new value..." />
<button onClick={updateValue}>Click to Set Value</button>
<p>Value is = "{value}"</p>
</>
);
};
export default ChangeInputValue;