import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Message = ({ userToken }) => {

  return (
    <div className="container">
      <h1>
        Vous ne pouver pas accéder à votre message secret. Cliquez{" "}
        <Link to="/login" className="link orange">
          ici
        </Link>{" "}
        pour vous connecter !
      </h1>
    </div>
  )
};

export default Message;
