import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {

  return (
    <form className="container">
      <input
        type="text"
        placeholder="Entrez votre prénom ici"
      />
      <input
        type="text"
        placeholder="Entrez votre nom ici"
      />
      <input
        type="email"
        placeholder="Entrez votre email ici"
      />
      <input
        type="password"
        placeholder="Entrez votre mot de passe ici"
      />
      <button type="submit">Envoyer</button>
      <Link to={"/login"} className="link">
        Vous avez déjà un compte ? Cliquez ici pour vous connecter !
      </Link>
    </form>
  );
};

export default Signin;
