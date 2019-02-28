import React from 'react';

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
      return { currentImageIdx: ((state.currentImageIdx + 1) % 6)};
    });
  }
  
  render() {
    return (
      <div className="splash-bkgrd'">
        <img id='splash-bkgrd-img' src={this.images[this.state.currentImageIdx]} />
      </div>
    )
  }
};

export default Splash;




