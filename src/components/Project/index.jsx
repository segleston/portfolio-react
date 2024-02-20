import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project.id}`} className="text-decoration-none card-font"> {/* Use hash route for the link */}
            <Card style={{ width: '20rem', height: '400px'}} className='project-card'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                    {project.description}
                    </Card.Text>
                    <a href={project.deployed}><Button variant="primary" className='m-1 card-button'>Application</Button></a>
                    <a href={project.github}><Button variant="primary" className='card-button'>Repository</Button></a>
                </Card.Body>
            </Card>
        </Link>
    )
}
