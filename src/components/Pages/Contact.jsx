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
                <Form>
                    <Form.Group>
                        <Form.Label>Enter your full name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email address:</Form.Label>
                        <Form.Control type="email"
                            placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Your message:</Form.Label>
                        <Form.Control as="textarea" aria-label="With textarea" placeholder="Message"  />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
                <div className='col-md-6'>
                <h1>TEST</h1>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Contact;