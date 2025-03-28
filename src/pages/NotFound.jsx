import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <FaSadTear className="text-6xl text-primary mb-4" />
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
