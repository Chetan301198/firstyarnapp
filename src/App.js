import "./App.css";
import Card from "./Components/Cards/Cards";
import green from "../src/Assets/images/nike1.png";
import red from "../src/Assets/images/nike2.png";
import blue from "../src/Assets/images/nike3.png";
import ScriptTag from "/react-script-tag/lib/index";

const sourcedata = [{ img: green }, { img: red }, { img: blue }];

function App(props) {
  return (
    <>
      <div className="container">
        {sourcedata.map((val) => {
          return <Card img={val.img} />;
        })}
      </div>
      <ScriptTag type="text/javascript" src="/src/Assets/js/tilt.js" />
    </>
  );
}

export default App;
