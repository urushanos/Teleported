import React, { useState } from "react";
import axios from "axios";

const Signup = ({ switchPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/signup", {
        username,
        password,
      });

      alert("Account created");
      switchPage();
    } catch {
      alert("User already exists");
    }
  };

  return (
    <div className="auth">
      <h2>Signup</h2>

      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

      <button onClick={handleSignup}>Signup</button>

      <p onClick={switchPage}>Login</p>
    </div>
  );
};

export default Signup;