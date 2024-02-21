import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="mt-16">
        <h2 className="text-4xl text-center mb-4">Log in</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
        </form>
        <div className="text-center mt-5 text-gray-600">
          {`Don't have an account yet?`}
          <Link to="/register" className="text-black ml-2">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
