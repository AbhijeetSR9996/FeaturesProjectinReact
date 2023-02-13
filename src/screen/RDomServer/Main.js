import React from "react";
//import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import "./styles.css";

const Examples = () => {
return (
<div>
<div
className="circle circle--greencircle"
style={{ "--someColor": "#ccff73" }}
/>
<div
className="circle circle--cyancircle"
style={{ "--some-color": "#3ef7eb" }}
/>
</div>
);
};

const Main = () => {
return (
<div>
<h1>Example of ReactDOMServer: </h1>
<div> (It is an example of renderToString() method)</div>
<Examples />
<hr />
<h1>ReactDOMServer is used to Generate the Code Below: </h1>
{ReactDOMServer.renderToString(<Examples />)}
</div>
);
};

export default Main;