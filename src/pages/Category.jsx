import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const categoryColors = [
  "bg-amber-100 hover:bg-amber-600",
  "bg-emerald-100 hover:bg-emerald-600",
  "bg-rose-100 hover:bg-rose-600",
  "bg-violet-100 hover:bg-violet-600",
  "bg-sky-100 hover:bg-sky-600",
  "bg-teal-100 hover:bg-teal-600",
  "bg-orange-100 hover:bg-orange-600",
  "bg-lime-100 hover:bg-lime-600",
  "bg-cyan-100 hover:bg-cyan-600",
  "bg-fuchsia-100 hover:bg-fuchsia-600",
  "bg-pink-100 hover:bg-pink-600",
  "bg-indigo-100 hover:bg-indigo-600",
  "bg-yellow-100 hover:bg-yellow-600",
  "bg-green-100 hover:bg-green-600",
  "bg-purple-100 hover:bg-purple-600",
  "bg-red-100 hover:bg-red-600",
];

const Category = () => {
  const [items, setItems] = useState([]);

  const url = "https://dummyjson.com/recipes/tags";

  useEffect(() => {
    document.title = "Restaurant - Categories";

    fetch(url)
      .then((res) => res.json())
      .then((resdata) => setItems(resdata));
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight">
          Menu Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const colorClass = categoryColors[index % categoryColors.length];
            return (
              <NavLink
                key={index}
                to={`/items/${item}`}
                className={({ isActive }) =>
                  `group block rounded-lg overflow-hidden ${colorClass} 
                   transition-all duration-300 transform hover:-translate-y-2 
                   hover:shadow-lg border border-gray-100
                   ${isActive ? "ring-2 ring-amber-600" : ""}`
                }
              >
                <div className="p-6 flex flex-col items-center justify-center h-40">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize text-center group-hover:text-white transition-colors duration-300">
                    {item}
                  </h2>
                  <span className="mt-2 text-sm text-gray-500 group-hover:text-white">
                    Explore Dishes
                  </span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;