import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 px-4 bg-white">
      {/* Welcome Section */}
      <h1 className="text-5xl font-bold text-amber-700 mb-6">Welcome to Our Restaurant</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-10">
        Discover authentic flavors and a cozy atmosphere. We serve freshly prepared meals with top-quality ingredients to give you a memorable dining experience.
      </p>

      {/* High-Selling Items */}
      <Section title="🔥 High-Selling Items" items={[
        { title: 'Butter Chicken', desc: 'Aromatic butter chicken with creamy tomato sauce.', img: '🍛' },
        { title: 'BBQ Platter', desc: 'Smoked meats served with garlic naan and sauces.', img: '🍖' },
        { title: 'Cheesy Burger', desc: 'Double patty burger loaded with cheese.', img: '🍔' },
      ]} />

      {/* Most Popular Dishes */}
      <Section title="⭐ Most Popular Dishes" items={[
        { title: 'Tandoori Pizza', desc: 'Fusion of pizza with spicy tandoori chicken.', img: '🍕' },
        { title: 'Paneer Tikka', desc: 'Grilled paneer cubes marinated in rich spices.', img: '🧀' },
        { title: 'Chocolate Lava Cake', desc: 'Molten chocolate dessert with vanilla scoop.', img: '🍰' },
      ]} />

      {/* Upcoming Specials */}
      <Section title="🕒 Upcoming Specials" items={[
        { title: 'Seafood Night (Coming Soon)', desc: 'Fresh ocean delights on Friday evenings.', img: '🦐' },
        { title: 'Ramzan Buffet', desc: 'Special Iftar buffet with over 30 items.', img: '🥘' },
        { title: 'Chef’s Table Experience', desc: 'Personalized 5-course meal by our head chef.', img: '👨‍🍳' },
      ]} />

    </div>
  )
}

// Reusable Section Component with hover styles
const Section = ({ title, items }) => (
  <div className="w-full max-w-6xl mb-14">
    <h2 className="text-3xl font-bold text-amber-800 mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-amber-100 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <div className="text-5xl mb-4">{item.img}</div>
          <h3 className="text-2xl font-semibold text-amber-800 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Home
