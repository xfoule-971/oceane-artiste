import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarouselCard from "../components/CarouselCard";

import cover2023 from "../assets/images/cover-2023.jpg";
import cover2024 from "../assets/images/cover-2024.jpg";
import cover2025 from "../assets/images/cover-2025.jpg";
import cover2026 from "../assets/images/cover-2026.jpg";

const Galerie = () => {
  const { slug } = useParams();
  const [oeuvres, setOeuvres] = useState([]);

  const routes = {
    2023: "http://localhost:4000/api/annee2023",
    2024: "http://localhost:4000/api/annee2024",
    2025: "http://localhost:4000/api/annee2025",
    2026: "http://localhost:4000/api/annee2026",
  };

  useEffect(() => {
    if (!slug) return;

    const url = routes[slug];
    if (!url) return;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOeuvres(Array.isArray(data) ? data : []))
      .catch(() => setOeuvres([]));
  }, [slug]);

  /* =====================================================
     PAGE 1 : GALERIE → CAROUSEL DES ANNÉES
  ===================================================== */
  if (!slug) {
    const years = [
      { year: 2023, image: cover2023 },
      { year: 2024, image: cover2024 },
      { year: 2025, image: cover2025 },
      { year: 2026, image: cover2026 },
    ];

    return (
      <main className="gallery">
        <Helmet>
          <title>Océane fait des tâches</title>
          <meta
            name="description"
            content="Gallerie d'œuvres par année"
          />
        </Helmet>

        <div className="container my-5">
          <h1 className="text-center mb-5 fw-bold title-plantes">
            Émotion forte ? On peint !
          </h1>

          <div
            id="carouselYears"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {years.map((item, index) => (
                <div
                  key={item.year}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <Link to={`/galerie/${item.year}`}>
                    <div className="position-relative">
                      <img
                        src={item.image}
                        className="d-block w-100"
                        alt={`Œuvres ${item.year}`}
                        style={{ height: "70vh", objectFit: "cover" }}
                      />

                      <div
                        className="position-absolute top-50 start-50 translate-middle text-white fw-bold"
                        style={{
                          fontSize: "4rem",
                          letterSpacing: "0.2em",
                          textShadow: "0 0 20px rgba(0,0,0,.8)",
                        }}
                      >
                        {item.year}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselYears"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselYears"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* =====================================================
     PAGE 2 : ŒUVRES PAR ANNÉE
  ===================================================== */
  return (
    <main className="gallery">
      <Helmet>
        <title>Océane fait des tâches</title>
        <meta
          name="description"
          content={`Oeuvres réalisées en ${slug}`}
        />
      </Helmet>

      <div className="container my-5">
        <h1 className="text-center mb-5 fw-bold title-plantes">
          Oeuvres en {slug}
        </h1>

        {/* CARDS */}
        <div className="row justify-content-center">
          {oeuvres.map((oeuvre) => (
            <div
              key={oeuvre.id}
              className="col-12 col-md-4 mb-4 d-flex justify-content-center"
            >
              <CarouselCard oeuvre={oeuvre} />
            </div>
          ))}
        </div>

        {/* BOUTON RETOUR — SOUS LES CARDS, CENTRÉ AXE X */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-4">
            <Link to="/galerie">
              <button className="btn btn-primary px-4 py-2">
                Retour à la page gallerie
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Galerie;





