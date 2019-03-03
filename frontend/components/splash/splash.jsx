import React from 'react';
import SplashDynamicText from './splash_dynamic_text';
import ProjectIndexContainer from '../project/project_index_container';

class Splash extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentImageIdx: 0
    };

    this.setImage = this.setImage.bind(this);

    this.images = [
      window.images.splash1,
      window.images.splash2,
      window.images.splash3,
      window.images.splash4,
      window.images.splash5,
      window.images.splash6,
      window.images.splash7,
      window.images.splash8,
      window.images.splash9
    ];
  }

  componentDidMount() {
    this.intervalId = setInterval(this.setImage, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  setImage () {
    this.setState((state) => {
      return { currentImageIdx: ((state.currentImageIdx + 1) % this.images.length)};
    });
  }
  
  render() {
    return (
      <>
      <div className="splash-bkgrd'">
        <img id='splash-bkgrd-img' src={this.images[this.state.currentImageIdx]} />
        <div className="splash-dynamic-text">
          <form>
            <span>Let's Make</span>
            <div className="splash-input">
              <SplashDynamicText />
              <input type="text"/>
            </div>
          </form>
        </div>
      </div>
      <ProjectIndexContainer />
      </>
    );
  }
}

export default Splash;




