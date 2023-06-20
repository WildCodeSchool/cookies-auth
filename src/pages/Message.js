import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getRandomNum from "../services/utils"
import axios from "axios";

const Message = ({ userToken }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const message = data && [
    `Ton élégance n'a d'égale que ta sagacité, ${data.firstname} ${data.lastname} !`, `La voûte céleste pâlit devant ta superbe, ${data.firstname} ${data.lastname} !`, `Les défauts dont tu fais preuve brillent par leur absence, ${data.firstname} ${data.lastname} !`, `Ton contrat de travail est à l'origine du conflit entre Bill Gates et Elon Musk, ${data.firstname} ${data.lastname} !`, `Ta prestance rayonne telle une étoile dans le firmament, ${data.firstname} ${data.lastname} !`
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/", {
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
      <h1>{message[getRandomNum(1, (message.length))]}</h1>
      <Link to="/" className="link">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default Message;
