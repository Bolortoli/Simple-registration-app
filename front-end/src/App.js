import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./pages/gallery";
import Registration from "./pages/registration";
import "./pages/gallery-style.scss";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/register">
					<Registration />
				</Route>
				<Route path="/" exact>
					<Gallery />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
