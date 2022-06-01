import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import INVENTORY___SUPPLIERS_MANAGEMENT from "./INVENTORY___SUPPLIERS_MANAGEMENT";

import "./INVENTORY___SUPPLIERS_MANAGEMENT.css";

function App() {
    return (
	<Router>
            <div className="content-container">
                <Switch>
                    <Route exact path="/" component={INVENTORY___SUPPLIERS_MANAGEMENT} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
