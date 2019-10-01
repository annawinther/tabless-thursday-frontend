import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './views/LandingPage';
import Navigation from './components/Navigation';
import Signup from './views/SignUp';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AddTabModal from './components/AddModal';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [addTabModalVisibile, toggleAddTabModal] = useState('none');

  useEffect(() => {
    if (window.localStorage.getItem('user')) {
      setLoggedIn(true);
    }
    else {
      setLoggedIn(false);
    }
  }, []);
  return (
    <div>
      <AddTabModal  toggleAddTabModal={toggleAddTabModal} visible={addTabModalVisibile} />
      <Navigation loggedIn={loggedIn} />
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" render={(props) => <Signup {...props} setLoggedIn={setLoggedIn} />} />
        <Route path="/dashboard" render={(props) => <Dashboard  {...props} toggleAddTabModal={toggleAddTabModal} />} />
      </div>
    </div>
  );
}

export default App;
