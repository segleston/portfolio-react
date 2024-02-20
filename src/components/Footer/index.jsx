import React from 'react';

export default function MyFooter() {
  return (
    <footer className="footer mt-5 pb-3 fixed-bottom">
      <div>
        <a href='mailto:sarah.c.egleston@gmail.com'><i className="px-1 fa-solid fa-envelope"></i></a>
        <a href='https://www.linkedin.com/in/sarah-egleston/' target='blank'><i className="px-1 fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/segleston/' target='blank'><i className="px-1 fa-brands fa-github"></i></a>
      </div>
      <div className="align-right">
        <span>&copy; Sarah Egleston 2024</span>
      </div>
    </footer>
  );
}
