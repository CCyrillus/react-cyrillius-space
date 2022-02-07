import store from "./redux/redux-store.js";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let _rerenderTree = (state) => {
	debugger;

	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					store={store}
					state={state}
					dispatch={store.dispatch.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById("root")
	);
};

reportWebVitals();

_rerenderTree(store);
store.subscribe(() => {
	let state = store.getState();
	_rerenderTree(state);
});
