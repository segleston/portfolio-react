import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Headshot from '../../assets/images/photo/ir.png';  // Ensure this path is correct
import CardImage1 from '../../assets/images/photo/devopps2.png';  // Add your card images
import CardImage2 from '../../assets/images/photo/devopps2.png';
import CardImage3 from '../../assets/images/photo/devopps2.png';

// Function for home page
function Home() {
    return (
        <>
            {/* Container holding the images and text */}
            <div className='container-fluid p-0'>
                <div className='container-home'>
                    <div className='row py-5 px-2 w-100'>
                        <div className='col-lg-7 col-sm-12'>
                            <h1 className='welcome-font py-3'>Hi, I'm Sarah.</h1>
                            <p className='home-text'>Welcome to my portfolio. I'm a multifaceted developer based in Bedfordshire, UK, with a background in veterinary nursing and pet insurance operations. Transitioning into the tech field, I have harnessed my skills in decision-making, critical thinking, and teamwork to excel as an Automation Developer and Systems Analyst Programmer. I recently completed a comprehensive web development bootcamp, demonstrating my dedication and versatility in software development.</p>
                            <p className='home-text'>Fueled by my newfound passion for software development, I am eager to continue growing and refining my skills. Please explore my portfolio to see my work, and feel free to get in touch. I'm excited about the opportunity to contribute to innovative projects and connect with like-minded professionals.</p>
                        </div>
                        <div className='col-lg-5 col-sm-12 p-5 photo-div'>
                            {/* Image source using imported photo */}
                            <img src={Headshot} className='img-fluid' alt='Photo of Sarah Egleston' />
                        </div>
                    </div>
                </div>

                {/* Cards Section */}
                <Container className='container-background'>
                    <div className='featured-projects-header'>
                        ------------Featured Projects------------
                    </div>
                    <Link to={`/project/2`}>
                    <Row className="my-5 card-background">
                        <Col lg={8} sm={12} className="d-flex align-items-center">
                            <div>
                                <h2 className='card-title'>devOpps</h2>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi, totam, magni tenetur corrupti similique maiores expedita reiciendis aut enim illum dignissimos iure ipsam maxime quasi accusamus dolorem quam modi?
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <img src={CardImage1} className='img-fluid' alt='Card Image 1' />
                        </Col>
                    </Row>
                    </Link>
                    <Link to={`/project/2`}>
                    <Row className="my-5 card-background">
                        <Col lg={4} sm={12}>
                            <img src={CardImage2} className='img-fluid' alt='Card Image 2' />
                        </Col>
                        <Col lg={8} sm={12} className="d-flex align-items-center">
                            <div>
                                <h2 className='card-title'>Card Title 2</h2>
                                <p className='card-text'>Card content goes here. This card has the image on the left and text on the right.</p>
                            </div>
                        </Col>
                    </Row>
                    </Link>
                    <Link to={`/project/2`}>
                    <Row className="my-5 card-background">
                        <Col lg={8} sm={12} className="d-flex align-items-center">
                            <div>
                                <h2 className='card-title'>Card Title 3</h2>
                                <p className='card-text'>Card content goes here. This card has the image on the right and text on the left.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <img src={CardImage3} className='img-fluid' alt='Card Image 3' />
                        </Col>
                    </Row>
                    </Link>
                </Container>

                <button>
                    See More
                </button>
            </div>
        </>
    );
}

export default Home;
