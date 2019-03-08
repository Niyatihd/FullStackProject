import React from 'react';

export default () => {
 
  return (
    <div className="footer-wrapper">
      <div className="footer-top">
        <div>
          
        </div>
        <div>
          <img id='footer-slogan-logo' src={window.images.linkedin_logo} />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <span>&copy; 2019 Hogwarts, Inc.</span>
        </div>
        <div className="footer-right">
          <img id='footer-slogan-logo' src={window.images.footer_logo} />
          <span>AT HOGWARTS, help is always given to those who ask for it.</span>
        </div>
      </div>
    </div>
  );
}