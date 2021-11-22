import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/MusicPage/Music';
import { Route, Routes } from 'react-router-dom';
import Music from './components/MusicPage/Music';
import News from './components/News/News';
import Settings from './components/SettingsPage/Settings';

function App() {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>

      </div>
    </div>



  );
}

export default App;
