import { logout } from "../../store/auth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const signOut = () => dispatch(logout());

  return <div style={styles.container}>
    <div style={styles.title}>
      <span>PULLSE AI</span>
      <span>ASSESSMENT</span>
    </div>
    <div>
      <AccountCircleIcon fontSize={"large"}/>
      <LogoutIcon onClick={signOut} style={styles.logout} fontSize={"large"} color={"error"}/>
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