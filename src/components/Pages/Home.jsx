import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Headshot from '../../assets/images/photo/ir.png'

function Home() {
    return (
        <>
            <div className='d-flex justify-content-around'>
                <Container className='p-5 m-5'>
                    <Row className=''>
                        <Col className='py-5'>
                            <h1 className='m-5 py-3 welcome-font'>WELCOME</h1>
                            <p className='mx-5 home-text'>I'm Sarah Egleston, a Front End Web Developer and this is my portfolio.</p>
                        </Col>
                        <Col className='py-5'>
                            <img src={Headshot} className='img-fluid' alt='Photo of Sarah Egleston' />
                        </Col>
                    </Row>
                </Container>


            </div>
        </>
    )
}

export default Home;