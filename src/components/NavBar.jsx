import React from 'react';
import { Link } from "react-scroll"; //, animateScroll as scroll 
import logo from './assests/logo.png';

const highlight = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-bold";
const logo_size = "w-10 h-10 inline-block";

function NavBar() {
  return (
    <>
    <nav className="bg-gray-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-center">
            <div className="flex absolute left-10">
                <span className="text-white"><img src={logo} alt="Logo" className={logo_size} /> </span>
            </div>
            <div className="hidden md:block">
                <div className="flex items-center justify-center flex-grow ml-10 space-x-20">
                  {/*Home*/}<a href="/" className={highlight}>Home</a>
                  {/*Tech Stack*/}<a href="/techStack" className={highlight}>Tech Stack</a>
                  {/*Project*/}<a href="/project" className={highlight}>Project</a>
                  {/*About*/}
                  <Link
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className={highlight}>
                  About Me
                  </Link>
                  {/*Contact*/}<a href="/contact" className={highlight}>Contact</a>
                
                </div>
            </div>
          </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
