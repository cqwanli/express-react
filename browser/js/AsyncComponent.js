/**
 * Created by wanli on 2017/11/20.
 */
import React from "react";
export const asyncComponent = loadComponent => (
	class AsyncComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				Component: null,
			};
		}

		componentWillMount() {
			if (this.hasLoadedComponent()) {
				return;
			}

			loadComponent()
				.then(module => module.default)
				.then((Component) => {
					this.setState({Component});
				})
				.catch((err) => {
					throw err;
				});
		}

		hasLoadedComponent() {
			return this.state.Component !== null;
		}

		render() {
			const {Component} = this.state;
			return (Component) ? <Component {...this.props} /> : null;
		}
	}
);