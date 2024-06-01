import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInAnimationVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.25 } },
};

export default function ProjectCard({ title, description, image, altText, techOne, techTwo, techThree, deployedURL, repoLink }) {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInAnimationVariants}>
            <Card className="h-100 projects-card">
                <a href={deployedURL} target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" src={image} alt={altText} />
                </a>
                <Card.Body className="p-4">
                    <Card.Title className="mb-3 ">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={deployedURL} className='button-text'> <button>Application</button> </Link>
                    <Link to={repoLink} className='button-text'> <button>Repository</button> </Link>
                    <div className="technology mt-4">
                        <Badge className="me-2 tech-button">{techOne}</Badge>
                        <Badge bg="info" className="me-2 tech-button">{techTwo}</Badge>
                        <Badge bg="info" className='tech-button'>{techThree}</Badge>
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    );
}
