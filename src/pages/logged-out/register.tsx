import React, { useState } from "react";
import axios from "axios";
import { Error } from "@mui/icons-material";
import { getError } from "services/utilities";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if(password !== confirmPassword) {
      setError("Passwords Don't Match");
      return;
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, { username, password });
      if(response.status === 200){
        alert(response.data.message);
        setUsername(prev => "");
        setPassword(prev => "");
        setConfirmPassword(prev => "");
      }
    } catch (error) {
      const message = getError(error);
      message && setError(message);
    }
  };

  return <div style={styles.content}>
    <form onSubmit={handleSubmit}>
      <span style={styles.title}>REGISTER</span>
      <div>
        <input style={styles.input} type="text" placeholder='USERNAME' value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <input style={styles.input} type="password" placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <input style={styles.input} type="password" placeholder='CONFIRM PASSWORD' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </div>
      {error && <div style={styles.error}><Error color={"error"}/><span>{error}</span></div>}
      <button type="submit">Register</button>
    </form>
  </div>;
}

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

export default Register;