import { Link, animateScroll as scroller } from "react-scroll";
import profile from './assests/profilePic.png';
import linkedin from './icons/LinkedinIcon.png';
import github from './icons/github.png';
import cv from './icons/CV icon.png';
import iceland from './assests/iceland.jpg';
import ResumeButton from './ResumeButton';

  const Home = () => {
    const scrollToSection = (sectionId) => {
      scroller.scrollTo(sectionId, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: 20,
      });
    };

    const square_test = "justify-center w-100 h-screen bg-violet-300";
    const logo_size = "w-10 h-10 inline-block";
    const cv_icon = "w-7 h-15 inline-block";
  
    return (
      <div>
          <section id="section1">
            <div className="flex justify-center items-center top-[48%]">
              <h1 className="text-center text-6xl text-black font-bold mb-4">
                Christy
                <br />
                Software Engineer
                <br />
                <div className="flex items-center justify-center h-20 ml-10 space-x-10">
                <img src={linkedin} alt="Link to my LinkedIn" className={logo_size} /> 
                <img src={github} alt="Link to my GitHub" className={logo_size}/> 
                <img src={cv} alt="Link to my Resume" className={cv_icon}/>
                </div>
                </h1>
              <img src={profile} alt="Christy" className="w-100 h-100" />
            </div>
            <br />
            <br />
            <br />
            <br />
          </section> {/*End of section1*/}
          <section id="section2">
            <h1 className="flex justify-left text-center text-6xl text-black font-bold mb-4 p-5">About Me</h1>
            <div className="flex justify-center items-center space-x-10 p-1"> 
              <img src={iceland} alt="Iceland" className="w-1/2 h-1/3" />
                <h1 className="text-left text-3xl text-black font-bold mb-4 max-w-md">
                  UCSC Graduate
                  <br />
                  <h1 className="text-2xl"> Major in Computer Science</h1>
                  <h1 className="text-2xl"> Minor in Technology and Information Management </h1>
                  <br />
                  Goal: 
                  <br />
                  Unleashing Innovation Through Code: Empowering Business Success with Proficiency, Passion, and Excellence. 
                  <br />
                  <br />
                  <div className="justify-center"><ResumeButton resumeUrl="https://www.example.com/path-to-your-resume.pdf"/> </div>
                  </h1>                 
            </div>
          </section> {/*End of section2*/}
          <section id="section3">
          <h1 className="flex justify-left text-center text-6xl text-black font-bold mb-4 p-5">Tech Stack</h1>
            <p>Bloop bloop bloop</p>
            <div className={square_test}></div>
          </section>
          <section id="section4">
          <h1 className="flex justify-left text-center text-6xl text-black font-bold mb-4 p-5">Projects</h1>
            <p>Bloop bloop bloop</p>
            <div className={square_test}></div>
          </section>
          <section id="section5">
          <h1 className="flex justify-left text-center text-6xl text-black font-bold mb-4 p-5">Recent Experience</h1>
            <p>Bloop bloop bloop</p>
            <div className={square_test}></div>
          </section>
          <section id="section5">
          <h1 className="flex justify-left text-center text-6xl text-black font-bold mb-4 p-5">Contact Me</h1>
            <p>Bloop bloop bloop</p>
            <div className={square_test}></div>
          </section>
          <div>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollToSection("section1")}
          >
          </Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollToSection("section2")}
          >
          </Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollToSection("section3")}
          >
          </Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollToSection("section4")}
          >
          </Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollToSection("section5")}
          >
          </Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="section6"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollToSection("section6")}
          >
          </Link>
        </div>
    </div>
    );
  };

  export default Home;