import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-9xl font-extrabold text-amber-500 mb-4 drop-shadow-lg">404</h1>
      <p className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page not found.</p>
      <p className="text-lg text-gray-600 mb-8">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl shadow-lg hover:bg-amber-600 transition"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
