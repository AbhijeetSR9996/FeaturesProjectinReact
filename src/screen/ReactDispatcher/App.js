import React from "react";
//import ReactDOM from "react-dom";
import "./styles.css";

function myreducer(state, action) {
switch (action.type) {
case "color":
return { ...state, ...action.payload };
case "num":
return { ...state
, num: state.num + 1 };
default:
return { ...state };
}
}
function Select({ dispatch, state }) {
const Dispatcher = dispatch;
return (
<select
onChange={e =>
Dispatcher({ type: "color"
, payload: { mycolor: e.target.value } })
}
defaultValue={state.mycolor}
>
<option>orange</option>
<option>pink</option>
<option>grey</option>
<option>lightgreen</option>
</select>
);
}
function Select2({ dispatch, state }) {
const Dispatcher = dispatch;
return (
<select
onChange={e =>
Dispatcher({ type: "color"
, payload: { mycolor: e.target.value } })
}
defaultValue={state}
value={state}
>
<option>orange</option>
<option>pink</option>
<option>grey</option>
<option>lightgreen</option>
</select>
);
}


function App() {
const [state, dispatcher] = React.useReducer(myreducer, {
mycolor: "purple",
num: 1
});
const SSelect = React.useCallback(
() => <Select dispatch={dispatcher} state={state} />,
[state.mycolor, state]
);
return (
<div className="App">
<h2>The below selector is wrapped in callback</h2>
<h2>and here state.color is a dependency</h2>
<SSelect />
<br />
<br />
<h2>*You can select from below selector as well*</h2>
<Select dispatch={dispatcher} state={state} />
<Select2 dispatch={dispatcher} state={state.color} />
<h1>{state.num}</h1>
<h1 style={{ color: state.mycolor }}>state_mycolor_please: {state.mycolor}</h1>
<button
style={{ backgroundColor: "cyan", height: "51px", width: "101px" }}
onClick={e => {
dispatcher({ type: "num" });
dispatcher({ type: "color", payload: { mycolor: "crimson" } });
}}
>
ADD 1, change color to crimson
</button>
</div>
);
}
export default App;