/**
 * Created by wanli on 2017/11/20.
 */
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import asyncComponent from "./AsyncComponent";
const About = asyncComponent(() => import("./About"));
const Dashboard = asyncComponent(() => import("./Dashboard"));
const routes = [
	{
		path: "/about",
		component: About
	},
	{
		path: "/dashboard",
		component: Dashboard
	}
];
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.abc=new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve("hello world!");
			},500);
		});
	}

	render() {
		return <div>
			<h1>Welcome!</h1>
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/dashboard">Topics</Link></li>
					</ul>

					<hr/>
					{
						routes.map((route, i) => (
							<Route key={i} path={route.path} component={route.component}/>
						))
					}
				</div>
			</Router>
		</div>;
	}
}