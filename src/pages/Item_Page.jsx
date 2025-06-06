import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const Item_Page = () => {
  const { id } = useParams(); // Get the item ID from route
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white shadow-md rounded-lg mt-10">
      <button
        onClick={() => navigate(-1)} // Go back in history
        className="mb-6 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-amber-700 mb-4">{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-100 object-cover rounded-md mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">🧂 Ingredients:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {item.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">📋 Instructions:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            {item.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-gray-800">
        <p><strong>⏱️ Prep Time:</strong> {item.prepTimeMinutes} minutes</p>
        <p><strong>🔥 Cook Time:</strong> {item.cookTimeMinutes} minutes</p>
        <p><strong>🍽️ Servings:</strong> {item.servings}</p>
        <p><strong>⭐ Difficulty:</strong> {item.difficulty}</p>
        <p><strong>🌍 Cuisine:</strong> {item.cuisine}</p>
        <p><strong>🔥 Calories per Serving:</strong> {item.caloriesPerServing}</p>
        <p><strong>🏷️ Tags:</strong> {item.tags.join(", ")}</p>
        <p><strong>🍴 Meal Type:</strong> {item.mealType.join(", ")}</p>
        <p><strong>🌟 Rating:</strong> {item.rating} ({item.reviewCount} reviews)</p>
      </div>
    </div>
  );
};

export default Item_Page;
