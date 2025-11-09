import { useState } from "react";
import api from "./Api";


function Booking() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", time: "", people: ""
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.post("/booking/", formData)
      .then(() => alert("Booking Successful 🎉"))
      .catch(err => console.error(err));
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-orange-50">
       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-5xl md:text-lg font-black text-gray-900 mb-4 tracking-tight text-center">Book a Table 🍷</h1>
        {["name","email","phone","date","time","people"].map((field) => (
          <input key={field} type={field==="people"?"number":field==="date"?"date":field==="time"?"time":field==="email"?"email":"text"}
                 name={field}
                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                 value={formData[field]}
                 onChange={handleChange}
                 className="w-full mb-3 p-2 border rounded-md" required />
        ))}
        <button className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md">Book Now</button>
      </form>
    </section>
  );
}

export default Booking;
