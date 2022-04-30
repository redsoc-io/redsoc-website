import { Link } from "react-router-dom";
import "./home.scss";
import Members from "./Members";
function Home() {
  return (
    <>
      <section>
        <div>
          <Members />
        </div>
      </section>
      <footer>
        <p>
          <b>lets get in touch</b>
        </p>
        <p>
          Terms of Service| Privacy| Statement| Master agreement| Copyright
          2021| Redsoc All Rights Reserved|
        </p>
      </footer>
    </>
  );
}
export default Home;
