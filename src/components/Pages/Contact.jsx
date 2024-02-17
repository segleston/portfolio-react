import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <>
            <div>
                <h1>Contact me</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter your full name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your full name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email address:</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter your your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Your message:</Form.Label>
                        <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter your your message"  />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Contact;