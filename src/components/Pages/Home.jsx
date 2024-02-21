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
                <p className='home-text'>Welcome to my front end web portfolio. </p>
                <p className='home-text'>Based in Bedfordshire, I have a passion for learning new skills and crafting visually captivating websites. I am currently undertaking a Front End Web Development bootcamp with EdX.</p> 
            </div>
            <div className='col-lg-5 col-sm-12 p-5 photo-div'>
                {/* image source using imported photo */}
                <img src={Headshot} className='img-fluid' alt='Photo of Sarah Egleston' />
            </div>
        </div>
    </div>
</div>



            {/* </div> */}
        </>
    )
}

export default Home;