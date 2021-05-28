import { Switch, Route } from "react-router-dom";
import Product from "./components/Product/Product";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Product />
      </Route>
      <Route path="/product"></Route>
    </Switch>
  );
}

export default App;
