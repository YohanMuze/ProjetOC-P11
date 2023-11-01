import { Link, useNavigate } from "react-router-dom";

import argentBankLogo from "../../assets/img/argentBankLogo.png";
import iconUser from "../../assets/img/icon-user.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Header() {
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("userToken");
  const [isLog, setIsLog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsLog(true);
    } else {
      setIsLog(false);
    }
  }, [isLog, token]);

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("userToken");
    navigate("/sign-in");
    setIsLog(false);
  };

  return isLog ? (
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
        <Link className="main-nav-item">
          <img
            className="main-nav-icon-user"
            src={iconUser}
            alt="Logo utilisateur"
          />
          {user.firstName}
        </Link>
        <Link onClick={handleLogOut} className="main-nav-item">
          <img
            className="main-nav-icon-user"
            src={iconUser}
            alt="Logo utilisateur"
          />
          Sign Out
        </Link>
      </div>
    </nav>
  ) : (
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
        <Link to="sign-in" className="main-nav-item">
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
}

export default Header;
