import React from "react";

class ReactRef extends React.Component {
    constructor(props) {
        super(props)
        this.textAttribute = React.createRef();
        this.state = {
            textValue: ''
        }
    }
    onSubmitHandler = element => {
        element.preventDefault();
        let val = this.textAttribute.current.value
        this.setState({ textValue: val })
    };
    render() {
        return (
            <div>
                <h2>This is an example of react ref</h2>
                <h2>The Input values: {this.state.textValue}</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" ref={this.textAttribute} />
                    <button>Add Element</button>
                </form>
            </div>
        );
    }
}
export default ReactRef;