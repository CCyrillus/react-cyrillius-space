import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { addPost, updateNewPostText} from "./redux/state";

let renderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addPost={addPost}
					updateNewPostText={updateNewPostText}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById("root")
	);
};

reportWebVitals();

renderEntireTree(state);
subscribe(renderEntireTree);


