import { AccountCircle, Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import { logout } from "store";

const Header = () => {
  const dispatch = useDispatch();

  const signOut = () => dispatch(logout());

  return <div style={styles.container}>
    <div style={styles.title}>
      <span>PULLSE AI</span>
      <span>ASSESSMENT</span>
    </div>
    <div>
      <AccountCircle fontSize={"large"}/>
      <Logout onClick={signOut} style={styles.logout} fontSize={"large"} color={"error"}/>
    </div>
  </div>;
}

const styles = {
  container: {
    position: "sticky",
    top: "0",
    display: "flex",
    padding: "1%",
    justifyContent: "space-between",
    borderBottom: "1px solid black",
    backgroundColor: "white"
  },
  title: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold"
  },
  logout: {
    cursor: "pointer"
  }
} as const;

export default Header;