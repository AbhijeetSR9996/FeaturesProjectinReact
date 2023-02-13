import React from "react";
import ButtonList from "./ButtonList";
import BadgeList from "./BadgeList";
import AlertList from "./AlertList";
import Listgroup from "./Listgroup";
import Bread from "./Bread";
import DropdownComponent from "./DropdownComponent";
const styles = {
margin: "21px"
};

const App = () => {
return (
<div style={styles}>
<ButtonList />
<BadgeList />
<Listgroup />
<AlertList/>
<Bread />
<DropdownComponent />
</div>
);
};
export default App;