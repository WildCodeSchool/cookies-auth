import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getRandomInt from "../services/utils"
import axios from "axios";

const Message = () => {

  // const message = data && [
  //   `Ton élégance n'a d'égale que ta sagacité, ${data.firstname} ${data.lastname} !`, `La voûte céleste pâlit devant ta superbe, ${data.firstname} ${data.lastname} !`, `Les défauts dont tu fais preuve brillent par leur absence, ${data.firstname} ${data.lastname} !`, `Ton contrat de travail est à l'origine du conflit entre Bill Gates et Elon Musk, ${data.firstname} ${data.lastname} !`, `Ta prestance rayonne telle une étoile dans le firmament, ${data.firstname} ${data.lastname} !`
  // ];

  return 
    (<div className="container">
      <h1>
        Vous ne pouver pas accéder à votre message secret. Cliquez{" "}
        <Link to="/login" className="link orange">
          ici
        </Link>{" "}
        pour vous connecter !
      </h1>
    </div>)
};

export default Message;
