import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo.jpg";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 mb-5 fixed-top nav-artiste">
      <div className="container d-flex flex-column align-items-center h-100">

        <NavLink to="/" className="navbar-brand text-uppercase">
          <img src={Logo} alt="logo d'océane" className="logo-navbar rounded-circle mb-3"/>
        </NavLink>

        {/* Bouton mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
            {[
              { to: "/galerie", label: "Galerie" },
              { to: "/lartiste", label: "L'artiste" },
              { to: "/prestations", label: "Mes prestations" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  className="nav-link text-light mx-lg-5"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    textDecorationThickness: isActive ? "3px" : "auto", // épaisseur du underline
                    fontSize: isActive ? "1.1rem" : "1rem",
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;