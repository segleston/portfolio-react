//card from bootstrap called ProjectCard

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function ProjectCard({ project }) {
    return (
            <a href={`/project/${project.id}`}>
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
            </a>  
                )
}