import React from "react"

const jsxStyle = {
    color: "red",
    fontSize: "15px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "1em"
}
class JSXEg extends React.Component {
    render() {
        return <div>
    //Here we can see that we are combining the html and javascript together.//
            <h1 style={jsxStyle}>This is the tutorial for JSX</h1>
        </div>;
    }
}

export default JSXEg;