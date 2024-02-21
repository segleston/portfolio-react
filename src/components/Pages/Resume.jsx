import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Resume function to embed resume pdf, using container/flex/justify-content classes for alignment and responsiveness
function Resume() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column pt-5">
            <h1 className='heading-font m-5 text-center pb-3'>Resume</h1>
            <div className='container resume-container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 d-flex justify-content-center'>
                        <iframe 
                            src="/SarahEglestonCV.pdf"
                            style={{ width: '100%', height: '800px', maxWidth: '1000px' }} 
                            title="Resume PDF"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
//export resume
export default Resume;
