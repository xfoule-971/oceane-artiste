const ContactForm = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">

            <div className="bg-white rounded-5 shadow-lg p-4 p-md-5 contact-me">
              <h1 className="text-center fw-bold mb-4">
                Me contacter
              </h1>

              <form>

                {/* Nom / Prénom */}
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill py-2"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill py-2"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-pill py-2"
                    placeholder="Votre email"
                    required
                  />
                </div>

                {/* Demande */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-pill py-2"
                    placeholder="Votre demande"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <textarea
                    className="form-control rounded-5"
                    rows="7"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>

                {/* Bouton */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success rounded-pill px-5 fw-semibold w-100"
                  >
                    Envoyer
                  </button>
                </div>

              </form>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
