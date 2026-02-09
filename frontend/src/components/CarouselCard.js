import { useState } from "react";

const CarouselCard = ({ oeuvre }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="card bg-transparent border-0 gradient-border" style={{ width: "22rem" }}>
        <img
          src={`http://localhost:4000/uploads/${oeuvre.oeuvre}`}
          className="card-img-top img-fluid cursor-pointer"
          alt="oeuvre"
          onClick={() => setShow(true)}
        />
      </div>

      {/* MODAL FULLSCREEN */}
      {show && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          onClick={() => setShow(false)}
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content bg-dark border-0">
              <div className="modal-body d-flex justify-content-center align-items-center p-0">
                <img
                  src={`http://localhost:4000/uploads/${oeuvre.oeuvre}`}
                  className="img-fluid"
                  alt="oeuvre"
                  style={{ maxHeight: "100vh" }}
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



