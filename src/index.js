import store from "./redux/redux-store.js";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {Provider} from './StoreContext';

let _rerenderTree = (state) => {
	debugger;

	ReactDOM.render(
		<Provider store = {store}>
			<React.StrictMode>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</React.StrictMode>
		</Provider>,

		document.getElementById("root")
	);
};

reportWebVitals();

_rerenderTree(store);
store.subscribe(() => {
	let state = store.getState();
	_rerenderTree(state);
});
