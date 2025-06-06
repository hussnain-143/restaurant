import {React, useEffect} from 'react'

const About = () => {
    useEffect(()=>{
        document.title = "Restaurant - About Us"
    },[])
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md my-20">
      <h1 className="text-4xl font-bold text-amber-700 mb-6 text-center">About Us</h1>

      {/* Our Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-amber-800 mb-3">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2023, our restaurant has been committed to delivering authentic flavors and exceptional dining experiences. We blend traditional recipes with modern twists to bring you meals that delight your taste buds and warm your heart.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-amber-800 mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To serve high-quality, fresh, and flavorful dishes in a welcoming environment. We prioritize sustainability and support local farmers by sourcing the best ingredients.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-amber-800 mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: 'Chef Aisha Khan', role: 'Head Chef', img: '👩‍🍳' },
            { name: 'Manager Omar Malik', role: 'Restaurant Manager', img: '👨‍💼' },
            { name: 'Sous Chef Samira Ali', role: 'Sous Chef', img: '👩‍🍳' },
          ].map((member, idx) => (
            <div key={idx} className="w-48 bg-amber-100 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <div className="text-6xl mb-4">{member.img}</div>
              <h3 className="text-xl font-semibold text-amber-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Contact Us</h2>
        <p className="text-gray-700">123 Flavor Street, Food City, FC 56789</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
        <p className="text-gray-700">Email: contact@ourrestaurant.com</p>
      </section>
    </div>
  )
}

export default About
