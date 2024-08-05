import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Error } from "@mui/icons-material";

import { login } from "store";
import { getError } from "services/utilities";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, { username, password });
      dispatch(login(response.data.token));
    } catch (error) {
      const message = getError(error);
      message && setError
    }
  };

  return (
    <div style={styles.content}>
      <form onSubmit={handleSubmit}>
      <span style={styles.title}>LOGIN</span>
      <div>
        <input style={styles.input} type="text" placeholder='USERNAME' value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <input style={styles.input} type="password" placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {error && <div style={styles.error}><Error color={"error"}/><span>{error}</span></div>}
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

const styles = {
  content: {
    width: "25%",
    gap: "1%",
    display: "flex",
    padding: "2%",
    fontSize: "xx-large",
    border: "1px solid black",
    justifyContent: "center",
    borderRadius: "2%"
  },
  title: {
    fontSize: "xxx-large"
  },
  input: {
    fontSize: "x-large"
  },
  error: {
    fontSize: "medium",
    color: "red",
    display: "flex",
    alignItems: "center"
  }
} as const;

export default Login;
