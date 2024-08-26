import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./loginStyle.css";

export default function SignUp() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const nav = useNavigate();

  const handleSignUp = async (ev) => {
    ev.preventDefault();
    const objectToServer = {
      id: id,
      name: name,
      email: mail,
      password: password
    };

    try {
      const response = await axios.post("http://localhost:5000/signup", objectToServer);
      console.log("Server response:", response.data);  // Log the server response
      setMessage(response.data.message);
      if (response.data.message === "Add Successfully") {
        alert("הוסף בהצלחה");
        nav("../Map");
      } else {
        alert("הייתה בעיה בהרשמה");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("הייתה בעיה בהרשמה");
    }
  };

  return (
   
       <div className="SignUp">
      <div className="su">
      <form onSubmit={handleSignUp}  style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <div className="inputs_log_in">
        <h1>Sign Up</h1>
        <label  className="label">id:</label><br></br>
       
        <input className="input" type="text" required onInput={(e) => setId(e.target.value)} />
        
      
        <label  className="label">name:</label><br></br>
       
        <input className="input" type="text" required onInput={(e) => setName(e.target.value)} />

        <label  className="label">email:</label><br></br>
        
        <input   className="input" type="email" required onInput={(e) => setMail(e.target.value)} />
       
        <label  className="label">password:</label><br></br>
        
        <input   className="input" type="password" required onInput={(e) => setPassword(e.target.value)} />
      
        <input  className="submit" type="submit" value="Sign Up" />
        <h1>{message}</h1></div>
      </form>
    </div></div>
       
      
  );
}
