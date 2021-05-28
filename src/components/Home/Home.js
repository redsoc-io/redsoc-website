import { Link } from "react-router-dom";
function Home() {
  return (
    <section>
      <h1>REDSOC</h1>
      <Link to="/product">Product page</Link>
    </section>
  );
}
export default Home;
