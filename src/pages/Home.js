import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <button>
        <Link to={"/message"}>
          Cliquez ici pour découvrir votre message secret !
        </Link>
      </button>
    </div>
  );
};

export default Home;
