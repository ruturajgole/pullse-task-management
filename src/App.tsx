import {useEffect} from 'react';
import LoggedOut from './pages/logged-out';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import Home from './pages/home';
import { login } from './store/auth';
import axios from 'axios';

function App() {
  const {isAuthenticated} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const checkLogin = async () => {
    const token = document.cookie.split("=")[1];

    if(!isAuthenticated && token){
      const config ={
        headers: { Authorization: `Bearer ${token}`}
      }

      try {
        await axios.post(`http://localhost:3000/auth/login`, {}, config);
        dispatch(login(token));
      } catch (error) {
        
      }
    }
  }

  useEffect(() => {
    checkLogin();
  }, [])

  return (
      <div className="App">
        {isAuthenticated ? <Home /> : <LoggedOut />}
      </div>
  );
}

export default App;
