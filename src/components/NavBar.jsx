import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import 'tailwindcss/tailwind.css';

const highlight = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-bold";

function NavBar() {
  return (
    <>
    <nav className="bg-gray-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-center">
            <div className="flex absolute left-10">
                <span className="text-white">Logo</span>
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
                  About
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
