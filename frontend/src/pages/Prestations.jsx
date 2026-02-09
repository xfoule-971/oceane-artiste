import { Helmet } from "react-helmet";

import ActionCard from "../components/ActionCard";
import Atelier from "../assets/images/atelier.jpg";
import Commande from "../assets/images/commande-perso.jpg";
import Oeuvre from "../assets/images/oeuvre-originale.jpg";

const Prestations = () => {
    const prestations =[
        {
            image: Oeuvre,
            info: "tableau océane",
            title: "Ventes d'oeuvres originales",
            line1: "Tableaux originaux (pièces uniques)",
            line2: "Oeuvres encadrées ou non",
            line3: "Certificat d'authenticité"
        },
        {
            image: Commande,
            info: "tableau océane",
            title: "Commandes personnalisées",
            line1: "Oeuvre sur mesure (format, couleurs, thème)",
            line2: "Portraits (personnes, animaux)",
            line3: "Oeuvre adaptée à un intérieur (maison, bureau, commerce)"
        },
        {
            image: Atelier,
            info: "tableau océane",
            title: "Ateliers artistiques",
            line1: "atelier peinture / dessin",
            line2: "initiation à une technique",
            line3: "ateliers pour enfants, ados, et adultes"
        }
    ]

    return (
        <div className="prestations"> 
              <Helmet>
                <title>Océane fait des tâches</title>
                <meta
                name="description"
                content="Une artiste-peintre 2.0 made in Guadeloupe"
                />
            </Helmet>

            <header>
                <div className="container my-5 text-center fw-semibold">
                    <h1 className="title-plantes">
                        Mes prestations
                    </h1>
                </div>
            </header>

            <section className="container mt-4 mb-4">
                <div className="row g-4 d-flex flex-wrap justify-content-center gap-5 align-items-stretch">
                    {prestations.map((item, index) => (
                        <div 
                        key={index}
                        className="col-12 col-md-4 d-flex">
                        <ActionCard
                            image={item.image}
                            info={item.info}
                            title={item.title}
                            line1={item.line1}
                            line2={item.line2}
                            line3={item.line3}
                        />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default Prestations