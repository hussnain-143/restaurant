import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router";

const Items = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  // URL changes based on whether "name" param exists
  const url = name
    ? `https://dummyjson.com/recipes/tag/${name}`
    : "https://dummyjson.com/recipes";

  useEffect(() => {
    document.title = "Restaurant - Items";

    fetch(url)
      .then((res) => res.json())
      .then((resdata) => setItems(resdata.recipes || []))
      .catch(() => setItems([])); // handle errors gracefully
  }, [url]);

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-amber-700 tracking-tight">
        🍽️ Restaurant Menu {name && `(Filtered by: ${name})`}
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.length === 0 && <p className="text-center col-span-full">No recipes found.</p>}

        {items.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>

              <div className="flex flex-wrap gap-2 mb-3">
                {item.mealType.map((type, i) => (
                  <span
                    key={i}
                    className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-1">🧂 Ingredients:</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                {item.ingredients.slice(0, 5).map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
                {item.ingredients.length > 5 && (
                  <li className="text-gray-400 italic">...more</li>
                )}
              </ul>

              <div className="mt-auto pt-3 border-t border-gray-200">
                <NavLink
                  to={`/item/${item.id}`}
                  className="w-full block bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md text-sm font-medium text-center transition"
                >
                  View Recipe
                </NavLink>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
