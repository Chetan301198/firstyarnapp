import "./App.css";
import Card from "./Components/Cards/Cards";
import green from "../src/Assets/images/nike1.png";
import red from "../src/Assets/images/nike2.png";
import blue from "../src/Assets/images/nike3.png";

const sourcedata = [{ img: green }, { img: red }, { img: blue }];

function App(props) {
  return (
    <>
      <div className="container">
        {sourcedata.map((val) => {
          return <Card img={val.img} />;
        })}
      </div>
    </>
  );
}

export default App;
