import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Headshot from '../../assets/images/photo/ir.png'

function Home() {
    return (
        <>
            {/* <div className='d-flex justify-content-around'> */}
            <div className='container-fluid p-0'>
    <div className='container-home'>
        <div className='row py-5 px-2 w-100'>
            <div className='col-lg-7 col-sm-12'>
                <h1 className='welcome-font py-4'>HELLO!</h1>
                <p className='home-text'>I'm Sarah Egleston, a Front End Web Developer and welcome to my portfolio. </p>
                <p className='home-text'>I have a passion for learning new skills, and recently moved into the realm of programming having previously been an Emergency and Critical Care Veterinary Nurse. </p> 
            </div>
            <div className='col-lg-5 col-sm-12 p-5 photo-div'>
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