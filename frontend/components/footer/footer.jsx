import React from "react";

export default () => {
  return (
    <div className="footer-wrapper">
      {/* <div className="footer-top"> */}
      <div className="footer-top">
        <div>
          <img id="footer-logo" src={window.images.logo_hp} />
        </div>
        <div className="footer-icons">
          <div className="link-git-icon-wrapper">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/niyati-desai-70a5758/"
            >
              <img id="link-git-icon" src={window.images.linkedin} />
            </a>
            <a
              target="_blank"
              href="https://github.com/Niyatihd/FullStackProject"
            >
              <img id="link-git-icon" src={window.images.git} />
            </a>
          </div>
          <div className="insta-tweet-icon-wrapper">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1gyu5oZMjSeNNOf0WfDPwu2kaCjpN700D/view"
              className="button primary"
            >
              <span id="resume">Resume</span>
            </a>
            <a target="_blank" href="https://www.niyati-desai.com/">
              <span>Portfolio</span>
            </a>
            {/* <img id="insta-tweet-icon" src={window.images.insta} />
            <img id="insta-tweet-icon" src={window.images.tweet} /> */}
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="footer-bottom">
        <div className="copyright">
          <span>&copy; 2019 Hogwarts, Inc.</span>
        </div>
        <div className="footer-right">
          <img id="footer-slogan-logo" src={window.images.footer_logo} />
          <span>
            AT HOGWARTS, help is always given to those who ask for it.
          </span>
        </div>
      </div>
    </div>
  );
};
