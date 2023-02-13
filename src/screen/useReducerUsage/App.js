import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
export function App() {
return (
<div className="App">
<Counter initialCount={0} />
</div>
);
}