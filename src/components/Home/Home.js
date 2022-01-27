import { Link } from "react-router-dom";
import "./home.scss";
import Navigation from "./Nav"
import Members from "./Members"
function Home() {
  return (
    <section>
      <Navigation/>
      <div>
        <Members/>
      </div>
    </section>
  );
}
export default Home;
