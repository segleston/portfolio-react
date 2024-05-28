import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Headshot from '../../assets/images/photo/ir.png'

//function for home page
function Home() {
    return (
        <>
            {/* container holding  the images and text */}
            <div className='container-fluid p-0'>
                <div className='container-home'>
                    <div className='row py-5 px-2 w-100'>
                        <div className='col-lg-7 col-sm-12'>
                            <h1 className='welcome-font py-3'>Hi, I'm Sarah.</h1>
                            <p className='home-text'>Welcome to my portfolio. I'm a multifaceted developer based in Bedfordshire, UK, with a rich background in veterinary nursing and pet insurance operations. Transitioning into the tech field, I have harnessed my skills in decision-making, critical thinking, and teamwork to excel as an Automation Developer and Systems Analyst Programmer. I recently completed a comprehensive web development bootcamp with a perfect score, demonstrating my dedication and versatility in software development.</p>
                            <p className='home-text'>Fueled by my newfound passion for software development, I am eager to continue growing and refining my skills. Please explore my portfolio to see my work, and feel free to get in touch. I'm excited about the opportunity to contribute to innovative projects and connect with like-minded professionals.</p>
                        </div>
                        <div className='col-lg-5 col-sm-12 p-5 photo-div'>
                            {/* image source using imported photo */}
                            <img src={Headshot} className='img-fluid' alt='Photo of Sarah Egleston' />
                        </div>
                    </div>
                </div>
                {/* <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 pb-5'>
                            <div className='d-flex justify-content-center pb-4'>
                                <h1 className='heading-font text-center pb-5 '>Skills</h1>
                            </div>
                            <div className='d-flex justify-content-center flex-wrap'>
                                <div className='icon-text'><i class="fa-brands fa-js skills-icon"></i><p className='skill-text'>JavaScript</p></div>
                                <div className='icon-text'><i class="fa-brands fa-html5 skills-icon"></i><p className='skill-text'>HTML5</p></div>
                                <div className='icon-text'><i class="fa-brands fa-node-js skills-icon"></i><p className='skill-text'>Node.js</p></div>
                                <div className='icon-text'><i class="fa-brands fa-css3-alt skills-icon"></i><p className='skill-text'>CSS3</p></div>
                                <div className='icon-text'><i class="fa-brands fa-react skills-icon"></i><p className='skill-text'>React.js</p></div>
                                <div className='icon-text'><i class="fa-brands fa-git-alt skills-icon"></i><p className='skill-text'>GIT</p></div>
                                <div className='icon-text'><i class="fa-brands fa-github skills-icon"></i><p className='skill-text'>Github</p></div>
                                <div className='icon-text'><i class="fa-brands fa-bootstrap skills-icon"></i><p className='skill-text'>Bootstrap</p></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>



            {/* </div> */}
        </>
    )
}

export default Home;