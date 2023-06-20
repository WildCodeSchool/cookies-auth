import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  return (
    <form className="container">
      <input
        type="email"
        placeholder="Entrez votre email ici"
      />
      <input
        type="password"
        placeholder="Entrez votre mot de passe ici"
      />
      <button type="submit">Envoyer</button>
      <Link to={"/signin"} className="link">
        Vous n'avez pas encore de compte ? Cliquez ici pour vous en créer un !
      </Link>
    </form>
  );
};

export default Login;
