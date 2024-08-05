import React from 'react';
import Login from './login';
import Register from './register';

const LoggedOut: React.FC = () =>
  <div style={styles.container}>
    <span style={styles.title}>PULLSE AI <br />ASSESSMENT</span>
    <Login />
    <Register />
  </div>;

const styles = {
  container: {
    position: "absolute",
    gap: "1%",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: "xx-large",
    textAlign: "center"
  }
} as const;

export default LoggedOut;
