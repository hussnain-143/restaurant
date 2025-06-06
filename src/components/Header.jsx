import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className="  bg-amber-400 w-full shadow-sm shadow-amber-700 sticky top-0 flex justify-between items-center px-20">
      <div>
        <h2 className="text-4xl text-amber-800">Restaurant</h2>
      </div>
      <div>
        <ul className="flex justify-between  font-semibold">
          {[
            { to: '/', label: 'Home' },
            { to: '/items', label: 'Items' },
            { to: '/category', label: 'Category' },
            { to: '/about', label: 'About us' },
          ].map((link) => (
            <li key={link.to} className="p-4 hover:bg-amber-700 hover:text-white transition-all duration-300">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-amber-700 text-white pb-2' : ''
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
