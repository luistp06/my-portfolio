import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Quien es?</p>
    <h1>Luis Timón</h1>
    <p>Estudiante de Desarrollo de aplicaciones web/multiplataforma, de origen extremeño aunque afincado en Getafe. Actualmente trabajo en el campo de la electronica pero cada vez me voy adentrando más en el mundo de la programación, ojalá algún día consiga vivir de ello!</p>
    <a href="mailto:luistp06@gmail.com">Escríbeme!😁→</a>
    </section>`;
};