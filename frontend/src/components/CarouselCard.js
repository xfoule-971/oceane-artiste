import { useState } from "react";

const CarouselCard = ({ oeuvre }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        className="card bg-transparent border-0 gradient-border"
        style={{ width: "22rem" }}
      >
        <img
          src={`http://localhost:4000/uploads/${oeuvre.oeuvre}`}
          className="card-img-top img-fluid cursor-pointer"
          alt={oeuvre.titre}
          onClick={() => setShow(true)}
        />

        {/* TEXTE CARD */}
        <div className="card-body text-center text-light px-2">
          <h5 className="card-title mb-1">{oeuvre.titre}</h5>
          <p className="card-text small opacity-75">
            {oeuvre.about}
          </p>
        </div>
      </div>

      {/* MODAL FULLSCREEN : IMAGE SEULE */}
      {show && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          onClick={() => setShow(false)}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body d-flex justify-content-center align-items-center p-0">

                <img
                  src={`http://localhost:4000/uploads/${oeuvre.oeuvre}`}
                  className="img-fluid"
                  alt={oeuvre.titre}
                  style={{ maxHeight: "100vh", maxWidth: "100vw" }}
                  onClick={(e) => e.stopPropagation()}
                />

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselCard;




