import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let _rerenderTree = (store) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={store}
					addPost={store.addPost.bind(store)}
					updateNewPostText={store.updateNewPostText.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById("root")
	);
}; 

reportWebVitals();

_rerenderTree(store);
store.subscribe(_rerenderTree);


