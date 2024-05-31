import React from 'react';
import { motion } from 'framer-motion';
import projects from '../../projects.json';
import ProjectCard from '../Project';
import { useInView } from 'react-intersection-observer';

const fadeInAnimationVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function ProjectGallery() {
   const [ref, inView] = useInView({ triggerOnce: true });

   return (
      <section id="projects" className="primary-green">
         <div className="container py-5 px-5 px-lg-0">
            <motion.h1
               ref={ref}
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? "visible" : "hidden"}
               transition={{ delay: 0.25 }}
               className="mb-4 display-4 text-highlight"
            >
               Projects
            </motion.h1>
            <div className="row">
               {projects.map((project, index) => (
                  <motion.div
                     className="col-md-12 col-lg-4 my-3"
                     key={project.id}
                     variants={fadeInAnimationVariants}
                     initial="hidden"
                     animate={inView ? "visible" : "hidden"}
                     custom={index}
                  >
                     <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        altText={project.imageAltText}
                        techOne={project.tech[0]}
                        techTwo={project.tech[1]}
                        techThree={project.tech[2]}
                        deployedURL={project.deployedURL}
                        repoLink={project.github}
                     />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default ProjectGallery;
