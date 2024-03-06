import "./App.css";
import styles from "./styles/style.module.css";
import classname from "classnames";
import BasicClassComponent from "./components/BasicClassComponent";
import BasicClassComponent1 from "./components/BasicClassComponent";

function App() {
  let numberArray = [1, 5, 6, 8];
  return (
    <div
    // style={{ color: number === 0 ? "red" : "blue" }}
    // className={classname(styles.newStyle, styles.newStyle1)}
    >
      <p>Labas Kebabas</p>
      <BasicClassComponent textColor="red" />
      <BasicClassComponent textColor="blue" />
      <BasicClassComponent textColor="green" numberArray={numberArray} />
      <BasicClassComponent1
        textColor="aqua"
        text="Labas vakaras ponai ir ponios"
      />
    </div>
  );
}

export default App;
