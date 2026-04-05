import React, { useState } from "react";
import axios from "axios";

const Login = ({ setUser, switchPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      setUser(res.data);
    } catch {
      alert("Incorrect credentials");
    }
  };

  return (
    <div className="auth">
      <h2>Login</h2>

      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

      <button onClick={handleLogin}>Login</button>

      <p onClick={switchPage}>Create account</p>
    </div>
  );
};

export default Login;