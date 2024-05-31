import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ContactMe = () => {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div className="custom-container py-5 px-5 px-lg-0">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-4 display-4 text-highlight"
            >
                Get In Touch
            </motion.h1>
            <motion.p
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInAnimationVariants}
                className="home-text mb-4"
            >
                If you want to get in touch, please contact me below.
            </motion.p>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInAnimationVariants}
            >
                <div class="social-card">
                    <button class="Btn github">
                        <span class="svgContainer">
                        <i class="fa-brands fa-github"></i>
                        </span>
                        <span class="BG"></span>
                    </button>

                    <button className="Btn email">
    <span className="svgContainer">
    <i class="fa-regular fa-envelope"></i>    </span>
    <span className="BG"></span>
</button>


                    <button class="Btn linkdin">
                        <span class="svgContainer">
                        <i class="fa-brands fa-linkedin"></i>
                        </span>
                        <span class="BG"></span>
                    </button>

                    
                </div>

            </motion.div>
        </div>
    );
};

export default ContactMe;

