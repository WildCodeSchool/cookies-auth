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

      const response = await axios.post("http://localhost:5000/users", user);

      if (response.status === 201) {
        console.log(response.data);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

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
