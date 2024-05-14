import { Container } from "react-bootstrap";
import "./style.css";
import { SliderTwo } from "../../../components";

const Karriere = () => {
  return (
    <main id="karriere">
      <h1>Auf in deine neue Zukunft!</h1>

      <section className="section-two karriere-three">
        <h2>Online Marketing Manager/-in - Vollzeit (m/w/d)</h2>
        <h3>Im Bereich: Neukunden, Social-Media</h3>
      </section>

      <section className="karriere-three">
        <Container fluid>
          <h4>Beschreibung</h4>
          <p>
            Nivoma sucht nach talentierten Solarenergieberatern (m/w/d), die
            unser Team in der Beratung und Vermittlung von Solarprojekten
            unterstützen. Als Solarenergieberater (m/w/d) bei Nivoma bist du
            verantwortlich für die Identifizierung potenzieller Standorte für
            Solaranlagen und die Beratung von Grundstückseigentümern
            hinsichtlich der Verpachtung ihrer Flächen für Solarprojekte. Deine
            Aufgaben umfassen die Recherche potenzieller Standorte, die
            Bewertung ihrer Eignung für Solaranlagen und die Kontaktaufnahme mit
            den entsprechenden Grundstückseigentümern. Du bist der direkte
            Ansprechpartner für unsere Kunden und unterstützt sie bei der
            Maximierung ihrer Einnahmen durch die Verpachtung ihrer Flächen für
            Solarenergieprojekte.
          </p>
        </Container>
      </section>

      <Container fluid>
        <section className="karriere-three">
          <div>
            <h4>Anforderungen</h4>
            <p>
              - Abgeschlossene Ausbildung oder Studium im Bereich erneuerbare
              Energien, Umweltwissenschaften, Technik oder ähnliches <br />-
              Erfahrung im Bereich Solarenergie oder erneuerbare Energien von
              Vorteil <br />- Verhandlungsgeschick und Kommunikationsfähigkeit{" "}
              <br />- Eigeninitiative und selbstständige Arbeitsweise
            </p>
          </div>
        </section>
      </Container>

      <section className="karriere-three">
        <Container fluid>
          <div>
            <h4>Wir bieten</h4>
            <p>
              - Attraktive Vergütung und flexible Arbeitszeiten <br />
              - Eine spannende Tätigkeit in einem innovativen Unternehmen <br />
              - Möglichkeit zur persönlichen und beruflichen Weiterentwicklung{" "}
              <br />- Ein motiviertes und dynamisches Team
            </p>
          </div>
        </Container>
        <button className="btn-nivoma d-block">Jetzt bewerben</button>
      </section>

      <SliderTwo />
    </main>
  );
};

export default Karriere;
