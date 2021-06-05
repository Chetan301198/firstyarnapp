import "./App.css";
import Card from "./Components/Cards/Cards";
import greenImg from "../src/Assets/images/nike1.png";
import redImg from "../src/Assets/images/nike2.png";
import blueImg from "../src/Assets/images/nike3.png";

const sourcedata = [
  {
    img: redImg,
    color: "#fa393a",
  },
  {
    img: greenImg,
    color: "#9bdc28",
  },
  {
    img: blueImg,
    color: "#397bf7",
  },
];

function App(props) {
  return (
    <>
      <div className="container">
        {sourcedata.map((val) => {
          return <Card img={val.img} color={val.color} />;
        })}
      </div>
    </>
  );
}

export default App;
