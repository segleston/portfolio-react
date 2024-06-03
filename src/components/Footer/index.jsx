import React from 'react';

export default function MyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer mt-5 py-5 fixed-bottom border-top">
    <div className="container">
        <div className="row">
  
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0 footer-font">
                <div className="d-flex justify-content-center justify-content-md-start">
                    <a href='mailto:sarah@egleston.dev' className="d-inline-block me-3">Email Me <i className="px-2 fa-solid fa-envelope"></i></a>
                    <a href='https://www.linkedin.com/in/sarah-egleston/' target='_blank' rel='noopener noreferrer' className="d-inline-block me-3">LinkedIn <i className="px-2 fa-brands fa-linkedin"></i></a>
                    <a href='https://github.com/segleston/' target='_blank' rel='noopener noreferrer' className="d-inline-block">GitHub <i className="px-2 fa-brands fa-github"></i></a>
                </div>
            </div>
   
            <div className="col-md-6 text-center text-md-right">
                <div className="mb-2 align-right">
                    <span>Copyright &copy; Sarah Egleston 2024. </span>
                </div>
                <div>
                    <i id="arrow" className="fa-solid fa-circle-arrow-up px-3 align-right" onClick={scrollToTop} style={{ cursor: 'pointer' }}></i>
                </div>
            </div>
        </div>
    </div>
</footer>



    
  );
}
