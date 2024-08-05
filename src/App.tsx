import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Home, LoggedOut } from "pages";
import { login, RootState } from "store";

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
        await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {}, config);
        dispatch(login(token));
      } catch (error) {
        
      }
    }
  }

  useEffect(() => {
    checkLogin();
  }, [])

  return (
      <div>
        {isAuthenticated ? <Home /> : <LoggedOut />}
      </div>
  );
}

export default App;
