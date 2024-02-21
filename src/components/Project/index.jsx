import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link from React Router


//  Functional component to display individual book card with title, author(s), description, and a button
export default function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project.id}`} className="text-decoration-none card-font"> 
            <Card style={{ width: '20rem', height: '450px'}} className='project-card'>
                <Card.Img variant="top" src={project.image} className='pt-3 card-image'/>
                <Card.Body className="d-flex flex-column pt-2 card-font">
                    <div>
                        <Card.Title className='pt-3 pb-2'>{project.title}</Card.Title>
                        <Card.Text className='pb-3'>{project.description}</Card.Text>
                    </div>
                    <div className="mt-auto pb-1">
                        <a href={project.deployed}><Button variant="primary" className='m-1 card-button'>Application</Button></a>
                        <a href={project.github}><Button variant="primary" className='card-button'>Repository</Button></a>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}
