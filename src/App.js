
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from "react";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from './firebase-config';
import Explore from './pages/explore';
import Main from './pages/main'
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <Router>
      <nav>
      <Link to="/"> Home </Link>
      <Link to="/explore"> Explore </Link>
      
        
        
        

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/locationsvisited"> Locations Visited </Link>
            <Link to="/createpost"> Add Location </Link>
            <button type='button' className='logout'onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Main isAuth={isAuth}/>} />
        <Route path="/locationsvisited" element={<Home isAuth={isAuth} />} />
        <Route path="/explore" element={<Explore isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
