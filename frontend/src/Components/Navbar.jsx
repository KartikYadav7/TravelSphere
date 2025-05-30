import React, { useContext,useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.jsx";
const Nav = () => {
   const {user,logout}= useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className=" relative z-10 flex justify-between md:justify-around items-center px-6 md:px-10 py-6 text-white">
        <h1 className="text-2xl font-bold">TravelSphere</h1>

        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
         
          <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
          <li><Link to="/packages" className="hover:text-orange-400">Packages</Link></li>
          <li><Link to="/help" className="hover:text-orange-400">Help</Link></li>
          <li><Link to="/upcomingpackages" className="hover:text-orange-400">Upcoming Packages</Link></li>
          {!user?(<><li><Link to="/login"><button className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer text-sm hover:bg-orange-600">
          Login
          </button></Link></li></>):(<><li><button onClick={logout} className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer text-sm hover:bg-orange-600">
          Logout
          </button></li></>)}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="list-none absolute top-20 left-0 w-full bg-black/80 text-white z-20 md:hidden px-6 py-4 space-y-4 text-sm font-medium">
         <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
          <li><Link to="/packages" className="hover:text-orange-400">Packages</Link></li>
          <li><Link to="/help" className="hover:text-orange-400">Help</Link></li>
          <li><Link to="/upcomingpackages" className="hover:text-orange-400">Upcoming Packages</Link></li>
          {!user?(<><li><Link to="/login"></Link></li><button className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer text-sm hover:bg-orange-600">
          Login
          </button></>):<><li><button onClick={logout} className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer text-sm hover:bg-orange-600">
          Logout
          </button></li></>}
        </div>
      )}
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div
        className="relative h-screen w-full bg-cover bg-center text-white"
        style={{ backgroundImage: `url(/main.png)` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Nav />

        <div className="relative text-left z-10 mt-20 md:mt-20 max-w-4xl px-8 mx-auto ">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            No matter where <br /> you’re going to, we’ll <br />
            take you there
          </h2>
          <button className="bg-orange-500 text-white px-5 py-2 my-4 rounded-xl hover:bg-orange-600 cursor-pointer"><Link to="/packages"> Explore</Link>
           
          </button>
        </div>
      </div>
    </>
  );
};
export { Nav };
export default Navbar;
