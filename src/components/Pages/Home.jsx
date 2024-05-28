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
                            <h1 className='welcome-font py-4'>HELLO!</h1>
                            <p className='home-text'>I'm Sarah, a Front End Web & RPA (Robotic Process Automation) Developer  based in Bedfordshire, UK. </p>
                            <p className='home-text'>Fuelled by my new found interest and eager to expand my skill set, I recently completed a
                                certificate in Front End Web
                                Development with EdX, achieving a final score of 100%. Currently, I'm undertaking
                                online courses to further enhance my front-end development skills and pave the way
                                towards my goal of becoming a full-stack developer.</p>
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