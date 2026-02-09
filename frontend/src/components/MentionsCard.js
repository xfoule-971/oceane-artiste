import Painter from "../assets/icons/painter.png";
import Mail from "../assets/icons/email.png";
import World from "../assets/icons/world.png";

const MentionsCard = () => {
  return (
    <div className="accordion" id="accordionExample">
      
      {/* Editeur du site */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button bg-success text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Editeur du site
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h3>Océane Foule</h3>
            <p className="mb-0 d-flex align-items-center">
              <img src={Painter} alt="icône" className="me-2" />
              Artiste peintre
            </p>
            <p className="d-flex align-items-center">
              <img src={Mail} alt="icône" className="me-2" />
              john.doe@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Hébergeur */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed bg-success text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Hébergeur
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h3 className="fw-bold">OVH</h3>
            <p>2 Rue Kellermann, 59100 Roubaix France</p>
            <p className="d-flex align-items-center">
              <img src={World} alt="icône" className="me-2" />
              <a
                href="https://www.ovhcloud.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ovhcloud.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Crédits */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed bg-success text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Crédits
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h3 className="fw-bold">Crédits</h3>
            <p>
              Ce site a été réalisé par Xavier Foule, étudiant au{" "}
              <a
                href="https://www.centre-europeen-formation.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Centre Européen de formation
              </a>
              .
            </p>
            <p>
              Les images utilisées sur ce site sont libres de droits et ont été obtenues
              sur le site{" "}
              <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">
                Pixabay
              </a>
              .
            </p>
            <p>
              La favicon de ce site a été fournie par{" "}
              <a
                href="https://www.flaticon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.flaticon.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MentionsCard;