import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Mistake from "../assets/images/mistake.jpg";

const Error = () => {
    return (
        <div className="wich">
            <Helmet>
                <title>Océane fait des tâches</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" content="una artiste-peintre 2.0 made in Guadeloupe" />
                {/*Empêcher l'indexation de la page*/}
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <main className="mt-5 pt-5 text-center">
                <div className="container my-5 d-flex flex-column align-items-center justify-content-center">
                    
                    {/* Image responsive */}
                    <img
                        src={Mistake}
                        alt="Erreur"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "50%", width: "auto", height: "auto" }}
                    />

                    {/* Texte */}
                    <h1 className="my-3">La page que vous avez demandée est introuvable</h1>
                    <p>Ou la page a peut-être été supprimée</p>

                    {/* Bouton */}
                    <Link to="/">
                        <button type="button" className="btn btn-success mt-3">
                            Retour à l'accueil
                        </button>
                    </Link>
                </div>
            </main>
        </div> 
    )
};

export default Error;