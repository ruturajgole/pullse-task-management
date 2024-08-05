import { Warning } from "@mui/icons-material";

interface Props {
  readonly onYes: () => void;
  readonly onNo: () => void;
}

const Alert = ({ onYes, onNo }: Props) =>
  <div style={styles.container}>
    <div style={styles.content}>
      <div style={styles.warning}>
        <Warning fontSize={"large"} color={"warning"}/>
        <span>Warning</span>
      </div>
      <span>You are already editing a task. Do you wish to discard changes?</span>
      <div>
        <button onClick={onYes}>Yes</button>
        <button onClick={onNo}>No</button>
      </div>
    </div>
  </div>;

const styles = {
  container: {
    position: "absolute",
    height: "100%",
    top: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0,0,0,0.5)"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "2%"
  },
  warning: {
    display: "flex",
    alignItems: "center",
    fontSize: "x-large",
    fontWeight: "bold"
  }
} as const;

export default Alert;