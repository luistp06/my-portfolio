import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const About = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="principal">
    <div class="image">
      <img
          src="./public/assets/yo.jpeg"
          alt="Luis Timón"
        />
        </div>
    <div class="texto">
         <h3>¿Como llegué hasta aquí? </h3>
          <p> Siempre tuve en la cabeza la idea de estudiar informática o algo relacionado, lo intenté y tras decepcionarme decidí seguir por el campo de la electrónica. Tras acabar los estúdios, comienzo a trabajar como técnico electrónico.</p>
         <p> Después de un año trabajando como técnico electrónico comienzo a pensar que este trabajo realmente no me apasiona, además, no auguro un buen futuro para esta profesión por lo que decido comenzar a estudiar desarrollo web y desarollo multiplataforma en la escuela Thepower.<p/>
          </div>
         </section>
  `
 


};