import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="mt-16">
        <h2 className="text-4xl text-center mb-4">Register</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="John Doe" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
