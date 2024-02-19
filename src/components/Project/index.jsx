//card from bootstrap called ProjectCard

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function ProjectCard({ project }) {
    return (
        <a href={`/project/${project.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                    {project.description}
                    </Card.Text>
                    <a href={project.deployed}><Button variant="primary" className='m-1 card-button'>Deployed site</Button></a>
                    <a href={project.github}><Button variant="primary" className='card-button'>Github Repo</Button></a>
                </Card.Body>
            </Card>
            {/* <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                        {project.description}
                    </Card.Text>
                    <a href={project.deployed}><Button variant="primary">Deployed site</Button></a>
                    <a href={project.github}><Button variant="primary">Github Repo</Button></a>
                </Card.Body>
            </Card> */}
        </a>
    )
}