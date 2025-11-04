import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import GroupPage from './components/GroupPage';
import SettingsPage from './components/SettingsPage';
import ChatPage from './components/ChatPage';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/create-post">Create Post</Link> | <Link to="/group">Group Page</Link> | <Link to="/settings">Settings</Link> | <Link to="/chat">Chat</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/group" element={<GroupPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
