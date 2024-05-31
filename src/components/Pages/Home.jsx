import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Headshot from '../../assets/images/photo/ir.png';  // Ensure this path is correct
import CardImage1 from '../../assets/images/photo/devopps2.png';  // Add your card images
import CardImage2 from '../../assets/images/photo/Movie2.png';
import CardImage3 from '../../assets/images/photo/weather2.png';

const fadeInAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Home() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <>
      <div className='container-fluid p-0'>
        <div className='container-home'>
          <div className='row py-5 px-2 w-100'>
            <Col lg={7} sm={12} className='text-area'>
              <motion.div ref={ref1} initial="hidden" animate={inView1 ? "visible" : "hidden"} variants={fadeInAnimationVariants}>
                <h1 className='welcome-font py-3'>Hi, I'm Sarah.</h1>
                <p className='home-text'>Welcome to my portfolio. I'm a multifaceted developer based in Bedfordshire, UK, with a background in veterinary nursing and pet insurance operations. Transitioning into the tech field, I have harnessed my skills in decision-making, critical thinking, and teamwork to excel as an Automation Developer and Systems Analyst Programmer. I recently completed a comprehensive web development bootcamp, demonstrating my dedication and versatility in software development.</p>
                <p className='home-text'>Fueled by my newfound passion for software development, I am eager to continue growing and refining my skills. Please explore my portfolio to see my work, and feel free to <Link to='/contact'>get in touch.</Link> I'm excited about the opportunity to contribute to innovative projects and connect with like-minded professionals.</p>
              </motion.div>
            </Col>
            <Col lg={5} sm={12} className='p-5 photo-div'>
              <motion.div ref={ref1} initial="hidden" animate={inView1 ? "visible" : "hidden"} variants={fadeInAnimationVariants}>
                <img src={Headshot} className='img-fluid' alt='Photo of Sarah Egleston' />
              </motion.div>
            </Col>
          </div>
        </div>

        <Container className='container-background border-left'>
          <div className='featured-projects-header'>
            Featured Projects
          </div>

          <Row className="my-5 card-background">
            <Col lg={8} sm={12} className="d-flex align-items-center justify-content-center">
              <motion.div ref={ref2} initial="hidden" animate={inView2 ? "visible" : "hidden"} variants={fadeInAnimationVariants}>
                <div className='card-content text-start'>
                  <h2 className='card-title p-3 text-start'>devOpps</h2>
                  <p className='card-text p-3 text-start'>devOpps is a dynamic web platform connecting developers with job opportunities and employers, featuring job listings, personalized profiles, and intuitive search functionalities. Developed using React, HTML5, CSS3, JavaScript, Node.js, and Tailwind CSS, it offers a seamless experience on all devices.</p>
                  <Link to="https://devopps.app/" className='button-text'><button>Application</button></Link>
                  <Link to="https://github.com/segleston/DevOpps" className='button-text'><button>Repository</button></Link>
                  <div className="technology mt-4">
                    <Badge bg="info" className="me-2 tech-button">JavaScript</Badge>
                    <Badge bg="info" className="me-2 tech-button">CSS</Badge>
                    <Badge bg="info" className='tech-button'>HTML</Badge>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg={4} sm={12} className='photo-card'>
              <motion.div ref={ref2} initial="hidden" animate={inView2 ? "visible" : "hidden"} variants={fadeInAnimationVariants}>
                <img src={CardImage1} className='img-fluid card-image' alt='Card Image 3' />
              </motion.div>
            </Col>
          </Row>

          <Row className="my-5 card-background">
            <Col lg={4} sm={12} className='photo-card'>
              <motion.div ref={ref3} initial="hidden" animate={inView3 ? "visible" : "hidden"} variants={fadeInAnimationVariants}>
                <img src={CardImage2} className='img-fluid card-image' alt='Card Image 2' />
              </motion.div>
            </Col>
            <Col lg={8} sm={12} className="d-flex align-items-center justify-content-center">
              <motion.div ref={ref3} initial="hidden" animate={inView3 ? "visible" : "hidden"} variants={fadeInAnimationVariants}>
                <div className='card-content text-end'>
                  <h2 className='card-title p-3 text-end'>Birthday Blast from the Past</h2>
                  <p className='card-text p-3 text-end'>Birthday Blast from the Past is a collaborative web application project. It offers users a nostalgic journey through time by combining personal information with movie data. Built using HTML5, CSS3, JavaScript (with jQuery), Bootstrap, and leveraging APIs like TheMovieDB and YouTube Data, this project seamlessly integrates user input with content retrieval.</p>
                  <Link to="https://segleston.github.io/birthday-blast-from-the-past/" className='button-text'><button>Application</button></Link>
                  <Link to="https://github.com/segleston/birthday-blast-from-the-past/" className='button-text'><button>Repository</button></Link>
                  <div className="technology mt-4">
                    <Badge bg="info" className="me-2 tech-button">JavaScript</Badge>
                    <Badge bg="info" className="me-2 tech-button">CSS</Badge>
                    <Badge bg="info" className='tech-button'>HTML</Badge>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>

        </Container>

        <div className="d-flex justify-content-center my-5 py-5 border-right">
          <Link to="/portfolio" className='button-text'>
            <button>See More</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

