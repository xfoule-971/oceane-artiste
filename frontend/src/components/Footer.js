import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../assets/icons/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row align-items-start">

          {/* LOGO → centré UNIQUEMENT en mobile */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <img
              src={Logo}
              alt="logo d'océane"
              className="logo-navbar rounded-circle"
            />
          </div>

          {/* LIENS → TOUJOURS À GAUCHE */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-start">
            <h5 className="text-light mb-4">Liens utiles</h5>

            {[
              { to: "/", label: "Accueil" },
              { to: "/gallerie/2023", label: "Galerie" },
              { to: "/lartiste", label: "L'artiste" },
              { to: "/prestations", label: "Mes prestations" },
              { to: "/contact", label: "Contact" },
              { to: "/mentionslegales", label: "Mentions légales" },
            ].map((link) => (
              <p key={link.to} className="mb-1">
                <NavLink to={link.to} className="text-light footer-link">
                  {link.label}
                </NavLink>
              </p>
            ))}
          </div>

          {/* RÉSEAUX → TOUJOURS À GAUCHE */}
          <div className="col-12 col-md-4 text-start">
            <h5 className="text-light mb-4">Suivez-moi</h5>

            <div className="d-flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-react"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/ocefaitdestaches/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-react"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;


