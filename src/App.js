import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Music from "./components/MusicPage/Music";
import News from "./components/News/News";
import Settings from "./components/SettingsPage/Settings";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/dialogs/*" element={<DialogContainer />} />
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
          
					<Route path="/users" element={<UsersContainer />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
