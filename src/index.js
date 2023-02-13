import React from 'react';
import ReactDOM from 'react-dom';
import Main from './screen/RDomServer/Main';

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);


//----FOR RStateMgmt-------------//

// import React
// , { useContext
// , useState } from "react";
// import ReactDOM from "react-dom";
// import App from "./screen/RStateMgmt/App";
// import AppContext from "./screen/RStateMgmt/AppContext";
// import { themes } from "./screen/RStateMgmt/default";
// import "./screen/RStateMgmt/styles.css";

// function Root() {
// const appContext = useContext(AppContext);
// const [context, setContext] = useState(appContext);
// const [isDarkMode, setDarkMode] = useState(false);
// const toggleTheme = () => {
// setContext({ ...context, theme: isDarkMode ? themes.light : themes.dark });
// setDarkMode(!isDarkMode);
// };
// const setValue = value => {
// setContext({ ...context, value });
// };
// const state = {
// ...context,
// toggleTheme: toggleTheme,
// setValue: setValue
// };
// return (
// <AppContext.Provider value={state}>
// <App />
// </AppContext.Provider>
// );
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Root />, rootElement);