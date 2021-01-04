import "./App.css";
import Card from "./Components/Cards/Cards";
import green from "../src/Assets/images/nike1.png";
import red from "../src/Assets/images/nike2.png";
import blue from "../src/Assets/images/nike3.png";
import VanillaTilt from "./Assets/js/VanillaTilt";

const sourcedata = [{ img: green }, { img: red }, { img: blue }];

function App() {
  return (
    <>
      <div className="container">
        {sourcedata.map((val) => {
          return <Card img={val.img} />;
        })}
      </div>
      <script src={VanillaTilt}></script>
    </>
  );
}

export default App;
