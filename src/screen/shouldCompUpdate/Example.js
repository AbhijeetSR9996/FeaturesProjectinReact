import React from "react";
import './styles.css';

class Example extends React.Component {
    constructor(props) {
        //Initializing the initial value for the state of the components .
        super(props);
        this.state = {
            currency: 0
        };
        //Binding the functions .
        this.manageMoneyChange = this.manageMoneyChange.bind(this);
    }
    //This is the function to calculate the currency
    manageMoneyChange(event) {
        let x = event.target.value
        this.setState({ currency: (x) | 0 });
    }
    //Here in this function we will decide the rendering of the component
    shouldComponentUpdate(props, state) {
        let ableToBuy = state.currency % 10 == 0
        return ableToBuy;
    }
    render() {
        return (
            <div>
                <div>
                    <input placeholder="How much money you have ?" className="input-class" type="text" onChange={this.manageMoneyChange} />
                </div>
                <div>
                    rupees 10 for each Mango.<br />
                    you can buy {this.state.currency / 10} Mango
                </div>
            </div>
        )
    }
}
//This is the main component which will call the Example component
class Main extends React.Component {
    render() {
        return (
            <div className="main-class">
                <Example />
            </div>
        )
    }
}
export default Example;