import { Helmet } from 'react-helmet';
import MentionsCard from '../components/MentionsCard';

const Mentionslegales = () => {
    return (
        <div className='wich'>
            <Helmet>
                <title>Océane fait des tâches</title>
                <meta name="description" content="Une artiste-peintre 2.0 made in Guadeloupe" />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <main className="container my-5">
                <header>
                    <div className="container my-5 text-center fw-semibold">
                        <h1 className="title-plantes">
                            Mentions légales
                        </h1>
                    </div>
                </header>

                <section className="mb-4">
                    <MentionsCard />
                </section>
   
            </main>
        </div>
    )
};

export default Mentionslegales;