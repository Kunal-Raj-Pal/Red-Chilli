import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen px-12 py-16 bg-gradient-to-b from-red-100 to-yellow-50">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        About Our Restaurant 🍷
      </motion.h1>
      <div className="max-w-4xl mx-auto text-center text-lg leading-relaxed">
        <p>
          At <b>RedChilli</b>, we believe in blending traditional recipes with
          modern presentation. Every dish is crafted with passion, precision,
          and pure love. Our chefs bring 10+ years of experience from
          world-class kitchens.
        </p>
        <p className="mt-4">
          We invite you to experience not just food — but an emotion. ❤️
        </p>
      </div>
    </section>
  );
}

export default About;
