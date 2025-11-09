import { Instagram,Youtube } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-white/10 text-white py-16">
        <div className="border-t border-gray-700 mt-12 pt-8 text-center p-2">
          <p className="text-gray-400 text-sm items-center justify-center md:gap-2">
            © 2025 - <span className="font-bold">RED Chilli</span>
            . <br />
            Designed & Developed with ❤️ by{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kunal-raj-pal"
              className="text-red-300 hover:text-red-400 trasition-all duration-300"
            >
              Kunal Raj Pal
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
