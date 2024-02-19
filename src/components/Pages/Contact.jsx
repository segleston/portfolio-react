import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <>
            <div>
                <div className='d-flex justify-content-around'>
                <h1 className='heading-font p-5 m-5 text-center'>Contact me</h1>
                </div>
                <div  className="container">
                    <div className='row'>
                        <div className='col-md-6'>
                <Form className='form-area'>
                    <Form.Group className='p-2'>
                        <Form.Label>Enter your full name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Full Name" className='form-style'/>
                    </Form.Group>
                    <Form.Group className='p-2'>
                        <Form.Label>Enter your email address:</Form.Label>
                        <Form.Control type="email"
                            placeholder="Email" className='form-style'/>
                    </Form.Group>
                    <Form.Group className="mb-3 p-2" >
                        <Form.Label>Your message:</Form.Label>
                        <Form.Control as="textarea" aria-label="With textarea" placeholder="Message" className='form-style' />
                    </Form.Group>
                    <Button className='page-button' type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
                <div className='col-md-6'>
                <a href='https://www.linkedin.com/in/sarah-egleston/'><img src='../../assets/images/photo/linkedin-icon.png'/></a>
                <a href='mailto:sarah.c.egleston@gmail.com'><img src='../../assets/images/photo/mail-icon.png'/></a>
                <a href='https://github.com/segleston'><img src='../../assets/images/photo/github-icon.png'/></a>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Contact;