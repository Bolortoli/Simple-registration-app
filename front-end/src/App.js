import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages/index";
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
					<Index />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
