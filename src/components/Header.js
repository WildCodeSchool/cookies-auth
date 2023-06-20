import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"} className="link">
          Authentification avec les cookies
        </Link>
      </h1>
        <button>
          <Link to={"/login"}>Se connecter</Link>
        </button>
    </header>
  );
};

export default Header;
