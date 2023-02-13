import React from "react";
import reactDom from "react-dom";
import Persons from "./persons.js";
import Person from "./person.js";
import "./styles.css";
const persons = [
{ id: 1, name: "Ram", gender: "Male", age: 23 },
{ id: 2, name: "Sita", gender: "Female", age: 26 },
{ id: 3, name: "Rahul", gender: "Male", age: 45 }
];
class App extends React.Component{ state = {
id: 0
};
setPerson = newId =>{ console.log(newId); this.setState({
id: newId
});
};
render() { return (
<div>
<Persons list={persons} person={this.setPerson} />
{this.state.id ? (
<Person person={persons.find(each => each.id == this.state.id)}
/>
) : null}
</div>
);
}
}
export default App;