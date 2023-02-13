import React from 'react';
import ReactDOM from 'react-dom';

class ComponentUsage extends React.Component {
    constructor(props) {
    super(props);
    this.state = { cnt: 6 };
    }
    cntFunction = () => {
    this.setState(
    { cnt: this.state.cnt + 1 }
    );
    };
    render() {
    return (
    <h1 onClick={ this.cntFunction }>
    change count on each click: { this.state.cnt }
    </h1>
    );
    }
    }

export default ComponentUsage;

