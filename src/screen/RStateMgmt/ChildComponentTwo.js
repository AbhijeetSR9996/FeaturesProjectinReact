import React
, { useContext } from "react";
import AppContext from "./AppContext";
const ChildComponentTwo = props => {
const { theme, toggleTheme, value } = useContext(AppContext);
return (
<div>
<p style={{ ...theme }}>Component Two</p>
<p>value = "{value}"</p>
<button onClick={toggleTheme}>Switch for Unicorn Mode 1</button>
</div>
);
};
export default ChildComponentTwo;