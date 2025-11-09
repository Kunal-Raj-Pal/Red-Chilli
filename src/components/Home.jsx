import { useEffect, useState } from "react";
import api from "./Api";
import { Link } from "react-router-dom";
import About from './About';
import Booking from './Booking';
import Contact from "./Contact";

export default function Hero() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const fetchdata = async () => {
    const res = await api.get("/menu/");
    setItems(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const filteredItems = items.slice(0, 6);

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-red-600 to-orange-600 flex flex-col justify-between overflow-hidden relative">
        {/* Central Logo and Branding */}
        <div className="flex flex-col items-center justify-center flex-1 relative z-20 px-4">
          {/* Chilli Icon in White Box */}
          <div className="mt-20 sm:mt-0 mb-8 sm:mb-12 animate-bounce">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <svg
                className="sm:w-16 w-10 sm:h-16 h-10"
                viewBox="0 0 100 100"
                fill="none"
              >
                {/* Red Chilli SVG */}
                <path
                  d="M50 15C45 20 40 25 38 35C36 45 40 60 50 70C60 60 64 45 62 35C60 25 55 20 50 15Z"
                  fill="#DC2626"
                  stroke="#7F1D1D"
                  strokeWidth="2"
                />
                {/* Chilli stem */}
                <path
                  d="M50 15C48 10 50 5 50 2"
                  stroke="#15803D"
                  strokeWidth="2.5"
                  fill="none"
                />
                {/* Chilli highlights */}
                <circle cx="48" cy="35" r="3" fill="#FCA5A5" />
                <circle cx="52" cy="50" r="3" fill="#FCA5A5" />
              </svg>
            </div>
          </div>

          {/* Main Branding Text with Flame */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Flame Icon */}
            <div className="relative">
              <svg
                className="sm:w-20 w-15 sm:h-20 h-15 text-white drop-shadow-lg"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50 10C50 10 30 40 30 55C30 70 38 80 50 80C62 80 70 70 70 55C70 40 50 10 50 10Z" />
                <path
                  d="M45 35C45 30 48 25 50 20C52 25 55 30 55 35C55 40 52 45 50 45C48 45 45 40 45 35Z"
                  fill="white"
                  opacity="0.8"
                />
              </svg>
            </div>

            {/* Brand Text */}
            <h1
              className="sm:text-7xl text-5xl font-black text-white drop-shadow-xl tracking-tighter"
              style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3)" }}
            >
              RED CHILLI
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-white text-lg font-semibold tracking-wide drop-shadow-lg">
            SPICE UP YOUR LIFE
          </p>
        </div>

        {/* Flame Wave Bottom */}
        <div className="relative w-full h-32 flex items-end">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,80 Q100,40 200,80 T400,80 T600,80 T800,80 T1000,80 T1200,80 L1200,150 L0,150 Z"
              fill="white"
              opacity="0.9"
            />
            {/* Flame spikes */}
            <path
              d="M50,80 Q40,50 60,40 Q70,50 60,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M150,80 Q140,50 160,40 Q170,50 160,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M250,80 Q240,50 260,40 Q270,50 260,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M350,80 Q340,50 360,40 Q370,50 360,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M450,80 Q440,50 460,40 Q470,50 460,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M550,80 Q540,50 560,40 Q570,50 560,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M650,80 Q640,50 660,40 Q670,50 660,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M750,80 Q740,50 760,40 Q770,50 760,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M850,80 Q840,50 860,40 Q870,50 860,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M950,80 Q940,50 960,40 Q970,50 960,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M1050,80 Q1040,50 1060,40 Q1070,50 1060,80"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M1150,80 Q1140,50 1160,40 Q1170,50 1160,80"
              fill="white"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Bottom Content Section */}
        <div className="bg-white px-8 py-12 flex flex-col items-center gap-8 relative z-10">
          {/* Description */}
          <p className="text-center text-gray-700 max-w-2xl text-sm leading-relaxed">
            The Red Chilli brand represents the fiery passion of authentic
            spiced cuisine. Our bold visual identity features a striking red
            chilli wrapped in dynamic flames, symbolizing the heat and intensity
            of flavor. <span className="hidden sm:block"> The deep crimson and white palette reinforces our
            commitment to bold, uncompromising taste while maintaining the
            artistry of fire-roasted cooking excellence.
            </span>
          </p>

          {/* Decorative Elements - Product Images */}
          <div className="absolute sm:bottom-5 md:bottom-8 right-8 flex gap-4 hidden sm:block">
            <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg">
              RC
            </div>
          </div>
        </div>
      </div>

      {/* Menu Start */}
      <section className="py-20 bg-orange-50 relative overflow-hidden">
        {/* Decorative flame background element */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full">
              <p className="text-sm font-semibold text-red-600 tracking-wider">
                OUR SELECTION
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
              Our Menu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our fiery collection of dishes crafted with the finest red
              chillies and bold flavors
            </p>
          </div>
          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-2 border-red-100 ${index > 2 ? "block sm:block hidden" : ""}`}
              >
                {/* Spice Level Badge */}
                <div className="absolute top-4 right-4 z-20 bg-red-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                  {"🌶️".repeat(item.spiceLevel)}
                </div>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-100 to-orange-100">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full w-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-red-600 font-semibold uppercase tracking-widest">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors">
                    {item.description}
                  </p>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-red-100">
                    <div className="text-3xl font-black text-red-600">
                      ₹{item.price}
                    </div>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <Link to={"/menu"}>
              <button className="cursor-pointer h-14 bg-red-600 md:bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Full Menu →
            </button> 
            </Link>
          </div>
        </div>
      </section>
      {/* Menu End */}
      <Booking/>
      <Contact/>
    </>
  );
}
