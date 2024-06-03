import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../../components/Form';


const fadeInAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.25 } },
};

const ContactMe = () => {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div className="custom-container py-5 px-5 px-lg-0 border-top-right">
            {/* <motion.h1
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInAnimationVariants}
                className="mb-4 display-4 text-highlight"
            >
                Get In Touch
            </motion.h1> */}
            <div className="row">
                <div className="col-lg-4 p-5 get-in-touch">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInAnimationVariants}
                    >
                        <h1 className="display-4 text-highlight mb-4 px-4 welcome-font">Get in Touch</h1>
                        <p className="home-text mb-4 p-4 touch-div">
                        Feel free to reach out through the form or via the links below.                        </p>
                        <div class="social-card m-4">
                            <a href="https://github.com/segleston" class="Btn github">
                                <span class="svgContainer">
                                    <svg height="1.6em" viewBox="0 0 496 512" fill="white">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                </span>
                                <span class="BG"></span>
                            </a>

                            <a href="https://www.linkedin.com/in/sarah-egleston" class="Btn linkdin">
                                <span class="svgContainer">
                                    <svg fill="white" class="svgIcon" xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 448 512">
                                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                                    </svg>
                                </span>
                                <span class="BG"></span>
                            </a>

                            <a href="mailto:sarah@egleston.dev" class="Btn email">
                                <span class="svgContainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zM1.5 4a.5.5 0 0 0-.5.5v.634l6.72 3.721a.5.5 0 0 0 .56 0l6.72-3.72V4.5a.5.5 0 0 0-.5-.5h-12zM15 5.932l-4.8 2.66L15 11.211V5.932zM13.856 12l-4.856-2.689L4.144 12H13.856zM1 11.211l4.8-2.618L1 5.932v5.279z"></path>
                                    </svg>
                                </span>
                                <span class="BG"></span>
                            </a>
                        </div>



                    </motion.div>
                </div>
                <div className="col-lg-8">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInAnimationVariants}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
