import React from 'react';

export default function MyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer mt-5 py-5 fixed-bottom">
      <div>
        <a href='mailto:sarah@egleston.dev'><i className="px-2 fa-solid fa-envelope"></i></a>
        <a href='https://www.linkedin.com/in/sarah-egleston/' target='_blank' rel='noopener noreferrer'><i className="px-2 fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/segleston/' target='_blank' rel='noopener noreferrer'><i className="px-2 fa-brands fa-github"></i></a>
      </div>
      <div className="align-right">
        <span>Copyright &copy; Sarah Egleston 2024. All Rights Reserved.</span>
      </div>
      <i id="arrow" className="fa-solid fa-circle-arrow-up px-3 align-right" onClick={scrollToTop} style={{ cursor: 'pointer' }}></i>
    </footer>
  );
}
