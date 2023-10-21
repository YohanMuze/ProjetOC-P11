import { Link } from "react-router-dom";

import argentBankLogo from "../../assets/img/argentBankLogo.png";
import iconUser from "../../assets/img/icon-user.png";



function Header() {
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