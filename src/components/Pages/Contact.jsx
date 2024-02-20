import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <>
            <div>
                <div className='d-flex justify-content-around'>
                    <h1 className='heading-font m-5 text-center pb-3 '>Contact me</h1>
                </div>
                <div className='d-flex justify-content-center mb-4 pb-3 contact-links'>
                    <a href='mailto:sarah.c.egleston@gmail.com'><i className="px-3 fa-solid fa-envelope"></i></a>
                    <a href='https://www.linkedin.com/in/sarah-egleston/' target='blank'><i className="px-3 fa-brands fa-linkedin"></i></a>
                    <a href='https://github.com/segleston/' target='blank'><i className="px-3 fa-brands fa-github"></i></a>
                </div>
                <div className="container">
                    <div className='row align-center justify-content-center'>
                        <div className=''>
                            <Form className='form-area'>
                                <Form.Group className='p-1'>
                                    <Form.Label>Enter your full name:</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Full Name" className='form-style' />
                                </Form.Group>
                                <Form.Group className='p-1'>
                                    <Form.Label>Enter your email address:</Form.Label>
                                    <Form.Control type="email"
                                        placeholder="Email" className='form-style' />
                                </Form.Group>
                                <Form.Group className="mb-3 p-1" >
                                    <Form.Label>Your message:</Form.Label>
                                    <Form.Control as="textarea" aria-label="With textarea" placeholder="Message" className='form-style' />
                                </Form.Group>
                                <div className='button-div'>
                                    <Button className='page-button' type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;