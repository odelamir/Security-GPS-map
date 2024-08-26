import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./loginStyle.css";

export default function LogIn({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const nav = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const objectToServer = {
      myemail: email,
      mypassword: password,
    };

    try {
      axios.post("http://localhost:5000/login", objectToServer).then((response) => {
        console.log(response);
        setMessage(response.data.toString());
        if (response.data === "not found") {
          alert("the user is not recognized");
        } else {
          user("connected");
          nav("../Map");
        }
      });
    } catch (error) {
      setMessage(error.data);
    }
  }
  
  return (
    <div className="LogIn">
      
      <div className="su">
        <form onSubmit={handleSubmit} className="form">
          <div className="inputs_log_in">
            <h1>Log In</h1>
            <label className="label">Email</label>
            <input className="input" type="email" required onInput={(e) => setEmail(e.target.value)} />
            <label className="label">Password</label><br></br>
            <input className="input" type="password" required onInput={(e) => setPassword(e.target.value)} />
            <input className="submit" type="submit" value="Log In" />
            <br></br><br></br>
            <span>Are you new? <Link to={'../SignUp'}>Create An Account</Link></span>
            <h1>{message}</h1>
          </div>
        </form>
      </div>
    </div>
  );
}
