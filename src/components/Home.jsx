import { useRef, useEffect, useState } from "react";
import api from "./Api";
import { Link } from "react-router-dom";
import Booking from "./Booking";
import Contact from "./Contact";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const [items, setItems] = useState([]);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


  const fetchdata = async () => {
    const res = await api.get("/menu/");
    setItems(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const filteredItems = items.slice(0, 6);

  const main = useRef();
  const menu = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "10% 10%",
        end: "80% 50%",
        scrub: 2,
        pin: true,
        markers: false, // set true for testing
      },
    });

    tl.to(".topp", { top: "-30%" }, "a")
      .to(".bottom", { bottom: "-30%" }, "a")
      .to(".top-h1", { y: "120%", opacity: 0 }, "a")
      .to(".bottom-h1", { top: "-9%" }, "a")
      .from(".center-p", { marginTop: "80%" }, "a")

    // ---------Menu---------
    const mn = gsap.timeline({
      scrollTrigger: {
        trigger: menu.current,
        start: "top 50%",
        end:"20% 50%",
        markers: true,
        scrub: 2,
      }
    });

    mn.from(".menu_header",{
      y: 200,
      opacity:0,
      duration: 1,
      scale: 1.5,
      backgroundColor: "rgba(255, 0, 0, 0)",
    })
    
  });

  return (
    <>
      <div
        ref={main}
        className="main w-full h-screen sm:text-8xl text-5xl font-bold relative "
      >
        {/* Top */}
        <div className="topp bg-red-600 w-full h-1/2 absolute overflow-hidden">
          {/* Chilli Icon in White Box */}
          <center>
            <div className="mt-35 sm:mt-20 mb-20 animate-bounce w-19">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <svg
                className="sm:w-12 sm:h-12 w-10  h-10"
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
          </center>
          <h1
            className="font-black text-white drop-shadow-xl tracking-tighter top-h1 absolute top-95 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3) " }}
          >
            RED CHILLI
          </h1>
        </div>

        {/* Center  */}
        <div className="center bg-red-400 w-full h-screen flex flex-col items-center justify-center">
          {/* Description */}
          <p className="center-p text-center text-gray-700 max-w-2xl text-sm leading-relaxed p-5 sm:p-0">
            The Red Chilli brand represents the fiery passion of authentic
            spiced cuisine. Our bold visual identity features a striking red
            chilli wrapped in dynamic flames, symbolizing the heat and intensity
            of flavor.{" "}
            <span className="hidden sm:block">
              {" "}
              The deep crimson and white palette reinforces our commitment to
              bold, uncompromising taste while maintaining the artistry of
              fire-roasted cooking excellence.
            </span>
          </p>

          <img src="/spoon.png" alt="spoon" className="spoon h-12 relative transform -translate-x-85 -translate-y-30 animate-bounce"/>
          <img src="/fork.png" alt="spoon" className="fork h-15 relative transform translate-x-60 -translate-y-15 animate-bounce -rotate-20"/>

          {/* Decorative Elements - Product Images */}
          
            <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg text-sm  mt-10">
              RC
         
          </div>
        </div>

        {/* Flame Wave Bottom */}
        <div className="bottom bg-red-600 w-full h-1/2 absolute bottom-0 overflow-hidden">
          <h1
            className="font-black text-white drop-shadow-xl tracking-tighter bottom-h1 absolute bottom-75 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3)", top:"-3%" }}
          >
            RED CHILLI
          </h1>

          <div className="absolute flex flex-col w-full items-end bottom-0">
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
        </div>
      </div>

      {/* Menu Start */}
      <section ref={menu}  className="py-20 bg-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="menu_header text-center mb-16 relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full">
              <p className=" text-sm font-semibold text-red-600 tracking-wider">
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
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-2 border-red-100 ${
                  index > 2 ? "block sm:block hidden" : ""
                }`}
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
      <Booking />
      <Contact />
    </>
  );
}
