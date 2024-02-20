import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Headshot from '../../assets/images/photo/ir.png'

function Home() {
    return (
        <>
            {/* <div className='d-flex justify-content-around'> */}
                <div className='container d-flex m-0 justify-content-between container-home'>
                    <div className='row p-5'>
                        <div className='col-lg-7 col-sm-12 p-5 m-5'>
                            <h1 className=' welcome-font'>WELCOME</h1>
                            <p className='home-text'>I'm Sarah Egleston, a Front End Web Developer and this is my portfolio.</p>
                        </div>
                        <div className='col-lg-5 col-sm-12 p-5 photo-div'>
                            <img src={Headshot} className='img-fluid' alt='Photo of Sarah Egleston' />
                        </div>
                    </div>
                </div>


            {/* </div> */}
        </>
    )
}

export default Home;