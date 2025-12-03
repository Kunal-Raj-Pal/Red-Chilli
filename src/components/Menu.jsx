import { useEffect, useState } from "react";
import SkeletonCard from "./SkeltonCard";
import api from "./Api";

import paneer from "../assets/img/paneer.jpeg";
import breadPakoda from "../assets/img/bread-pakoda.webp";
import breadPizza from "../assets/img/bread-pizza.webp";
import butterchicken from "../assets/img/butterchicken.jpg";
import garlicBread from "../assets/img/garlic-bread.jpg";
import vegSandwich from "../assets/img/veg-sandwich.jpeg";
function Menu() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All")
  const [loading, setLoading] = useState(true);

const menuItems = [
    {
      id: 1,
      name: "Chilli Paneer",
      category: "Veg",
      price: 199,
      description: "Crispy paneer cubes tossed in spicy chilli sauce with bell peppers",
      image: paneer,
      spiceLevel: 3,
    },
    {
      id: 2,
      name: "Butter Chicken",
      category: "Non-Veg",
      price: 249,
      description: "Tender chicken cooked in our signature fiery red chilli masala",
      image: butterchicken,
      spiceLevel: 4,
    },
    {
      id: 3,
      name: "Bread Pakoda",
      category: "Bread",
      price: 349,
      description: "Juicy prawns in a blazing chilli garlic sauce with a smoky finish",
      image: breadPakoda,
      spiceLevel: 4,
    },
    {
      id: 4,
      name: "Bread Pizza",
      category: "Bread",
      price: 79,
      description: "Soft naan stuffed with mozzarella and roasted red chillies",
      image: breadPizza,
      spiceLevel: 2,
    },
    {
      id: 5,
      name: "Garlic Bread",
      category: "Bread",
      price: 69,
      description: "Garlic stuffed bread with spices",
      image: garlicBread,
      spiceLevel: 5,
    },
    {
      id: 6,
      name: "Veg Sandwich",
      category: "Bread",
      price: 159,
      description: "Veg sandwich stuffed with paneer and spices",
      image: vegSandwich,
      spiceLevel: 3,
    },
  ];

  // Auto-generate categories
  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

  // Filter logic
  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);
 
  return (
   <section className="py-20 bg-orange-50 relative overflow-hidden">
      {/* Decorative flame background element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full">
            <p className="text-sm font-semibold text-red-600 tracking-wider">OUR SELECTION</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our fiery collection of dishes crafted with the finest red chillies and bold flavors
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/50 scale-105"
                  : "bg-white text-gray-800 border-2 border-red-200 hover:border-red-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-2 border-red-100"
            >
              {/* Spice Badge */}
              {/* <div className="absolute top-4 right-4 z-20 bg-red-100 text-white rounded-full px-3 py-1 text-sm font-bold">
                {"🌶️".repeat(item.spiceLevel)}
              </div> */}

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-100 to-orange-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors">
                  {item.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-red-100">
                  <div className="text-3xl font-black text-red-600">
                    ₹ {item.price}
                  </div>
                </div>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
