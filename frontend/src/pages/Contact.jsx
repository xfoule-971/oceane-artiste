import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div className="send-me">
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
                        Vous voulez plus d'informations?
                    </h1>
                </div>
            </header>

            <div className="container my-5 text-center fw-semibold">
                <ContactForm />
            </div>
        </div>
    );
};
export default Contact ;