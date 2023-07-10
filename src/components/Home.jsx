import { Link, animateScroll as scroller } from "react-scroll";
import profile from './assests/profilePic.png';

  const Home = () => {
    const scrollToSection = (sectionId) => {
      scroller.scrollTo(sectionId, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -70,
      });
    };

    const square_test = "justify-center w-screen h-screen bg-violet-500";
  
    return (
      <div>
          <section id="section1">
            <div className="flex items-center">
              <h1 className="text-4xl text-black font-bold mb-4">Welcome to My Website</h1>
              <img src={profile} alt="Christy" className="w-64 h-64" />
            </div>
            <h1>section 1</h1>
            <p>Bloop bloop bloop</p>
            <div className={square_test}></div>
          </section>
          <section id="section2">
            <h1>section 2</h1>
            <p>Bloop bloop bloop</p>
            <div className={square_test}></div>
          </section>
          <section id="section2">
            <h1>section 3</h1>
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
    </div>
    );
  };

  export default Home;