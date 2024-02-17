//card from bootstrap called ProjectCard

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function ProjectCard({ project }) {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <a href={project.deployed}><Button variant="primary">Deployed site</Button></a>
                            <a href={project.github}><Button variant="primary">Github Repo</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default GridExample;