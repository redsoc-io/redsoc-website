import "./main.scss";
import { Link } from "react-router-dom";
import Nav from "../Home/Nav";
import Ls from "../Home/Linksection";
function Product() {
  return (
    <>
      <header>
        <h2>Covidbot</h2>
      </header>
      <section>
        <nav>
          <ul>
            {[
              "Thiruvananthapuram",
              "Kollam",
              "Alappuzha",
              "Pathanamthitta",
              "Kottayam",
              "Idukki",
              "Ernakulam",
              "Thrissur",
              "Palakkad",
              "Malappuram",
              "Kozhikode",
              "Wayanadu",
              "Kannur",
              "Kasaragod",
            ].map((state) => {
              return (
                <li>
                  <Link to="/product">{state}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <article>
          <h1>What is covidbot?</h1>
          <p>
            Covidbot is app which we can install in our smart phones to get the
            informtion about covid vaccination in ur location and also book
            appoinments for vaccination. its is avilable in google playstore and
            apple store and it is free to install.
          </p>
          <p>
            As per the current pandamic situvation it essental to get vaccinated
            saftly as per preregestering we can avoide crow and get safty
            ensured. So get vaccinated and get save.
          </p>
        </article>
      </section>

      <footer>
        <p>
          <b>Covidbot</b> an health, socialservice platform from <b>Redsoc</b>
        </p>
        <p>
          Terms of Service| Privacy| Statement| Master agreement| Copyright
          2021| Redsoc All Rights Reserved|
        </p>
      </footer>
    </>
  );
}
export default Product;
