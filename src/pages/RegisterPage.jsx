import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Successful!!");
    } catch (error) {
      alert("Registration failed!!");
    }
  };

  return (
    <>
      <div className="mt-16">
        <h2 className="text-4xl text-center mb-4">Register</h2>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button className="primary">Register</button>
        </form>
        <div className="text-center mt-5 text-gray-600">
          Already a member?
          <Link to="/login" className="text-black ml-2">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
