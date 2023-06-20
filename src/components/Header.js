import { Link, useNavigate } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  const navigate = useNavigate();

  return (
    <header>
      <h1>
        <Link to={"/"} className="link">
          Authentification avec les cookies
        </Link>
      </h1>
      {userToken ? (
        <button
          onClick={() => {
            setUser(null);
            navigate("/");
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <button>
          <Link to={"/login"}>Se connecter</Link>
        </button>
      )}
    </header>
  );
};

export default Header;
