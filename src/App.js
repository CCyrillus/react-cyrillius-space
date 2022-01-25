import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Music from "./components/MusicPage/Music";
import News from "./components/News/News";
import Settings from "./components/SettingsPage/Settings";
import Dialog from "./components/Dialog/Dialog";
import Friends from "./components/Friends/Friends";

function App(props) {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper-content">
				<Routes>
					<Route
						path="/profile"
						element={
							<Profile
								profilePage={props.state.getState().profilePage}
								dispatch={props.dispatch}
							/>
						}
					/>
					<Route
						path="/dialogs/*"
						element={
							<Dialog
								state={props.state.getState()}
								dispatch={props.dispatch}
							/>
						}
					/>
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/friends" element={<Friends />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
