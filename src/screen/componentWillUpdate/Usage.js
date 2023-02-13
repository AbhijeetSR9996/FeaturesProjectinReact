import React from "react";
import './styles.css';

class Usage extends React.Component {
    constructor(props) {
        super(props)
        //Defining the initial value for the states into the
        this.state = {
            status: false,
            //Initial value to display to the end user on loading the components
            facts: 'Click to know the secret'
        }
    }
    //This function checks for the previous props and current for the state and if condition will be matched then it will render the or simply it will call the showMenu() function to display the change.
    componentWillUpdate(nextProps, nextState) {
        //Comparing the status value
        if (nextState.status != this.state.status) {
            //On success calling the method
            this.showMenu();
        } else {
            //In this section we can write some code which we want to run if the above condition is false.
        }
    }
    //This function is made to handle the click activity of the functions
    manageClick(e) {
        //Defining the variables and capturing the value of the expressions into these variables .
        let facts = this.state.facts;
        let y = facts.indexOf('The secret of happy life is') != -1
        if (y) {
            facts = 'The secret facts'
        } else {
            facts = 'Keep Working and never stop'
        }
        this.setState({
            status: !this.state.status,
            facts
        })
    }
    showMenu() {
        //Check the status , this expression returns a boolean value.
        let x = !this.state.status == true
        if (x) {
            $(this.ref['facts']).css('opacity', '2')
        } else {
            (this.ref['facts']).css('opacity', '0.6');
        }
    }
    render() {
        return (
            <div className="block">
 
                <button onClick={this.manageClick.bind(this)}
                    className={this.state.status ? 'pressed' : ''}>The secret of happy life is</button>
                <div className="facts" ref="facts"><h1>{this.state.facts}</h1></div>
            </div>
        );
    }
}

export default Usage;