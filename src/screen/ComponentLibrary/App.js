import React from "react";
import "./styles.css";
import TextInput from"./SimpleTextInput";

const App = () => {
return(
<div style={{ width:640, margin:"15px auto" }}>
<h1>Welcome to Edubca</h1>
<TextInput label="Email Address"placeholder="name@example.com" />
</div>
);
}
export default App;