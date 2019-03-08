import React from 'react';

export default () => {
 
  return (
    <div className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-icons">
          <div>
            <img id='footer-logo' src={window.images.logo_hp} />
          </div>
          <div className="link-git-icon-wrapper">
            <img id='link-git-icon' src={window.images.linkedin} />
            <img id='link-git-icon' src={window.images.git} />
          </div>
          <div className="insta-tweet-icon-wrapper">
            <img id='insta-tweet-icon' src={window.images.insta} />
            <img id='insta-tweet-icon' src={window.images.tweet} />
          </div>
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