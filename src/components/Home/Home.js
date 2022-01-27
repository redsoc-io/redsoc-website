import { Link } from "react-router-dom";
import "./home.scss";
import Members from "./Members";
function Home() {
  return (
    <section>
      <div>
        <Members />
      </div>
    </section>
  );
}
export default Home;
