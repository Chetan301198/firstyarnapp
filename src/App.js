import { Route, Switch, BrowserRouter } from "react-router-dom";
import ParallaxCard from "./pages/ParallaxCard";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/card" component={ParallaxCard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
