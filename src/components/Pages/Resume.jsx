import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <h1 className='heading-font m-5 text-center pb-3'>Resume</h1>
            <div className='container resume-container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 d-flex justify-content-center'>
                        <iframe 
                            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
                            style={{ width: '100%', height: '800px', maxWidth: '1000px' }} // Adjust width and height as needed
                            title="Resume PDF"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
