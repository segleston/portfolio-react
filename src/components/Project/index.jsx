import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project.id}`}> {/* Use Link instead of anchor tag */}
            <Card style={{ width: '18rem', height: '300px'}} className='project-card'>
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
        </Link>
    )
}
