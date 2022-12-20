import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Message = ({ userToken }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/", {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [userToken]);

  return !userToken ? (
    <div className="container">
      <h1>
        Vous ne pouver pas accéder à votre message secret. Cliquez{" "}
        <Link to="/login" className="link orange">
          ici
        </Link>{" "}
        pour vous connecter !
      </h1>
    </div>
  ) : isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="container">
      <h1>{`Bienvenue, ${data.firstname} ${data.lastname} !`}</h1>
      <Link to="/" className="link">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default Message;
