import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      };

      const response = await axios.post("http://localhost:4000/users", user);

      if (response.status === 201) {
        console.log(response.data);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        type="text"
        placeholder="Entrez votre prénom ici"
        onChange={(event) => {
          setFirstname(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Entrez votre nom ici"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
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
      <Link to={"/login"} className="link">
        Vous avez déjà un compte ? Cliquez ici pour vous connecter !
      </Link>
    </form>
  );
};

export default Signin;
