import { Helmet } from "react-helmet";

import ArtisteCard from "../components/AristeCard";

const Lartiste = () => {
    return (
        <div className="artiste">
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
                        Une artiste multi-tâche
                    </h1>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <ArtisteCard />
                    </div>
                </div>
                
            </header>
        </div>
    );
};
export default Lartiste ;