import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Headshot from '../../assets/images/photo/ir.png';  // Ensure this path is correct
import CardImage1 from '../../assets/images/photo/devopps2.png';  // Add your card images
import CardImage2 from '../../assets/images/photo/Movie2.png';
import CardImage3 from '../../assets/images/photo/weather2.png';




// Function for home page
function Home() {
    return (
        <>
            {/* Container holding the images and text */}
            <div className='container-fluid p-0'>
                <div className='container-home'>
                    <div className='row py-5 px-2 w-100'>
                        <div className='col-lg-7 col-sm-12 text-area'>
                            <h1 className='welcome-font py-3'>Hi, I'm Sarah.</h1>
                            <p className='home-text'>Welcome to my portfolio. I'm a multifaceted developer based in Bedfordshire, UK, with a background in veterinary nursing and pet insurance operations. Transitioning into the tech field, I have harnessed my skills in decision-making, critical thinking, and teamwork to excel as an Automation Developer and Systems Analyst Programmer. I recently completed a comprehensive web development bootcamp, demonstrating my dedication and versatility in software development.</p>
                            <p className='home-text'>Fueled by my newfound passion for software development, I am eager to continue growing and refining my skills. Please explore my portfolio to see my work, and feel free to <Link to='/contact'>get in touch.</Link> I'm excited about the opportunity to contribute to innovative projects and connect with like-minded professionals.</p>
                        </div>
                        <div className='col-lg-5 col-sm-12 p-5 photo-div'>
                            {/* Image source using imported photo */}
                            <img src={Headshot} className='img-fluid' alt='Photo of Sarah Egleston' />
                        </div>
                    </div>
                </div>

                {/* Cards Section */}
                <Container className='container-background border-left border-right'>
                    <div className='featured-projects-header'>
                        Featured Projects
                    </div>

                    <Row className="my-5 card-background">
                        <Col lg={8} sm={12} className="d-flex align-items-center justify-content-center">
                            <div className='card-content text-start'>
                                <h2 className='card-title p-3 text-start'>devOpps</h2>
                                <p className='card-text p-3 text-start'>devOpps is a dynamic web platform connecting developers with job opportunities and employers, featuring job listings, personalized profiles, and intuitive search functionalities. Developed using React, HTML5, CSS3, JavaScript, Node.js, and Tailwind CSS, it offers a seamless experience on all devices.</p>
                                <Link to="https://devopps.app/" className='button-text'> <button>Application</button> </Link>
                                <Link to="https://github.com/segleston/DevOpps" className='button-text'> <button>Repository</button> </Link>
                            </div>
                        </Col>

                        <Col lg={4} sm={12} className='photo-card'>
                            <img src={CardImage1} className='img-fluid card-image' alt='Card Image 3' />
                        </Col>
                    </Row>

                    {/* </Link> */}
                    {/* <Link to={`/project/1`}> */}
                    <Row className="my-5 card-background">
                        <Col lg={4} sm={12} className='photo-card'>
                            <img src={CardImage2} className='img-fluid card-image' alt='Card Image 2' />
                        </Col>
                        <Col lg={8} sm={12} className="d-flex align-items-center justify-content-center">
                            <div className='card-content text-end'>
                                <h2 className='card-title p-3 text-end'>Birthday Blast from the Past</h2>
                                <p className='card-text p-3 text-end'>Birthday Blast from the Past is a collaborative web application project crafted by a team of developers. It offers users a nostalgic journey through time by combining personal information with movie data. Built using HTML5, CSS3, JavaScript (with jQuery), Bootstrap, and leveraging APIs like TheMovieDB and YouTube Data, this project seamlessly integrates user input with dynamic content retrieval.</p>
                                <Link to="https://segleston.github.io/birthday-blast-from-the-past/" className='button-text'> <button>Application</button> </Link>
                                <Link to="https://github.com/segleston/birthday-blast-from-the-past/" className='button-text'> <button>Repository</button> </Link>
                            </div>
                        </Col>
                    </Row>

                    {/* </Link> */}
                    {/* <Link to={`/project/3`}> */}
                    <Row className="my-5 card-background">
                        <Col lg={8} sm={12} className="d-flex align-items-center justify-content-center">
                            <div className='card-content text-start'>
                                <h2 className='card-title p-3 text-start'>Weather Dashboard</h2>
                                <p className='card-text p-3 text-start'>The Weather Dashboard is a solo front-end project displaying current and 5-day forecast weather data for searched locations. Developed with JavaScript, HTML, and CSS, it integrates weather APIs to provide real-time information and featuring search history.</p>
                                <Link to="https://segleston.github.io/weather-dashboard/" className='button-text'> <button>Application</button> </Link>
                                <Link to="https://github.com/segleston/weather-dashboard/" className='button-text'> <button>Repository</button> </Link>
                            </div>
                        </Col>

                        <Col lg={4} sm={12} className='photo-card'>
                            <img src={CardImage3} className='img-fluid card-image' alt='Card Image 3' />
                        </Col>
                    </Row>
                    {/* </Link> */}
                </Container>
                <div className="d-flex justify-content-center my-4">
                    <Link to="/portfolio" className='button-text'> <button>See More</button> </Link>

                </div>
            </div>
        </>
    );
}

export default Home;
