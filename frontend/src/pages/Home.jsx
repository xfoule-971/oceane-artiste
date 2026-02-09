import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Océane fait des tâches</title>
        <meta
          name="description"
          content="Une artiste-peintre 2.0 made in Guadeloupe"
        />
      </Helmet>
      <div className="container my-3">
        <div className="hero-image d-flex align-items-center justify-content-center">
          <h1 className="hero-title text-white fw-bold text-center home-title" style={{ fontSize : '3.5em'}}>
            Mon art ? Une passion, une évasion
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;