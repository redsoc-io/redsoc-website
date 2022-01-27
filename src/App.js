import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home.js";
import Product from "./components/Product/Product";
import Ls from "./components/Home/Linksection.js";
import Nav from "./components/Home/Nav.js";
function App() {
  return (
    <>
      <Nav />
      <Ls />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
      </Switch>
    </>
  );
}

export default App;
