import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home.js";
import Product from "./components/Product/Product";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </Switch>
  );
}

export default App;
