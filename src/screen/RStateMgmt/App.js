import React
, { useContext } from "react";
import AppContext from "./AppContext";
import ChildComponentOne from "./ChildComponentOne";
import ChangeInputValue from "./ChangeInputValue";
const App = props => {
const { theme, toggleTheme } = useContext(AppContext);
return (
<div className="App">
<h1>Example of useContext & useState</h1>
<div className="flex-container">
<div className="container" style={{ ...theme }}>
Content 1
</div>
<ChildComponentOne />
<div className="container" style={{ ...theme }}>
Content 2
</div>
</div>
<h2>Unicorn Mode</h2>
<button onClick={toggleTheme}>Switch for Unicorn Mode 2</button>
<ChangeInputValue />
</div>
);
};
export default App;