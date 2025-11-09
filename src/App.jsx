import Menu from './components/Menu'
import Booking from './components/Booking'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col">
     <Navbar />
      <main className="flex-grow">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Menu/' element={<Menu/>} />
      <Route path='Book/' element={<Booking/>} />
      <Route path='about/' element={<About/>} />
      <Route path='contact/' element={<Contact/>} />
    </Routes> 
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default App
