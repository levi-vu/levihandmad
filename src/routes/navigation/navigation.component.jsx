import { Outlet, Link } from "react-router-dom";
import { FaHandMiddleFinger } from "react-icons/fa";
import './navigation.styles.scss';

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <FaHandMiddleFinger className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/sign-in" className="nav-link">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
