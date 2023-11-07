import { Link, useNavigate } from "react-router-dom";

import argentBankLogo from "../../assets/img/argentBankLogo.png";
import iconUser from "../../assets/img/icon-user.png";
import iconLogout from "../../assets/img/logout.png";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("userToken");

  const handleLogOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("userToken");
    navigate("/");
  };

  if (!token) {
    return (
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link to="/sign-in" className="main-nav-item">
            <img
              className="main-nav-icon-user"
              src={iconUser}
              alt="Logo utilisateur"
            />
            Sign In
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="main-nav-container">
          <Link to="/profile" className="main-nav-item">
            <img
              className="main-nav-icon-user"
              src={iconUser}
              alt="Logo utilisateur"
            />
            {user.userName}
          </Link>
          <Link onClick={handleLogOut} className="main-nav-item">
            <img
              className="main-nav-icon-user"
              src={iconLogout}
              alt="Logo utilisateur"
            />
            Sign Out
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
