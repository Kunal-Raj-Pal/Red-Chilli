function Contact() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-orange-50">
      <h1 className="text-5xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight text-center">Contact Us 📞</h1>
      <form className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-3">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
        <textarea placeholder="Message" className="w-full p-2 border rounded-md h-32"></textarea>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md">Send Message</button>
      </form>
      <iframe 
      className="mt-8"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57500.53118501303!2d82.6393242578974!3d25.7446822045565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903a2c93994715%3A0xf9a9f10dc97322!2sJaunpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1762653372851!5m2!1sen!2sin" width="90%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  );
}

export default Contact;
