import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const user = {
        email: email,
        password: password,
      };

      const response = await axios.post("http://localhost:5000/login", user);

      if (response.data.token) {
        console.log(response.data.token);
        setUser(response.data.token);
        navigate("/message");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        type="email"
        placeholder="Entrez votre email ici"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Entrez votre mot de passe ici"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button type="submit">Envoyer</button>
      <Link to={"/signin"} className="link">
        Vous n'avez pas encore de compte ? Cliquez ici pour vous en créer un !
      </Link>
    </form>
  );
};

export default Login;
