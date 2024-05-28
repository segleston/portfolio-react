import React from 'react';

export default function MyFooter() {
  return (
    <footer className="footer mt-5 py-5 fixed-bottom">
      <div>
        <a href='mailto:sarah@egleston.dev'><i className="px-2 fa-solid fa-envelope"></i></a>
        <a href='https://www.linkedin.com/in/sarah-egleston/' target='blank'><i className="px-2 fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/segleston/' target='blank'><i className="px-2 fa-brands fa-github"></i></a>
      </div>
      <div className="align-right">
        <span>Copyright &copy; Sarah Egleston 2024. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
