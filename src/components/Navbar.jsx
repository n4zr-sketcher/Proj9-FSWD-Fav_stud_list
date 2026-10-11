import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Navbar = () => {
  const location = useLocation();
  const { favourites } = useContext(StudentContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Favourite Student List</h1>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Students List
          </Link>
          <Link
            to="/favourites"
            className={`nav-link ${location.pathname === "/favourites" ? "active" : ""}`}
          >
            Favourite Students ({favourites.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
