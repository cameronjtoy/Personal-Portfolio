import javaScript from '../assets/img/javascript.jpg';
import java from '../assets/img/java.png';
import python from '../assets/img/python.png';
import react from '../assets/img/react.png';
import scala from '../assets/img/scala.png';
import c from '../assets/img/c.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As an aspiring software engineer in web development, I have a strong foundation in computer science principles and a good understanding of web development languages such as HTML, CSS, and JavaScript. I have experience building responsive and user-friendly websites using frameworks such as Bootstrap and React, and I am comfortable working with back-end technologies such as Node.js, Express, and MongoDB. I am always eager to learn new technologies and stay up-to-date on industry trends. I am a fast learner with excellent problem-solving skills, and I am able to work well both independently and in a team environment.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={c} alt="Image1" />
                                <h5>C Programming Language</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image2" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={javaScript} alt="Image3" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={scala} alt="Image4" />
                                <h5>Scala</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image5" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image6" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}