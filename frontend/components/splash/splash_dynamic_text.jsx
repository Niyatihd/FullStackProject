import React from "react";

class SplashDynamicText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTextIdx: 0,
      lastTextIdx: 0
    };

    this.setLastIdx = this.setLastIdx.bind(this);

    this.dynText = "Poly-Juice Potion                  ".split("");
  }

  setLastIdx() {
    this.setState(state => {
      return {
        lastTextIdx: ((state.lastTextIdx + 1) % this.dynText.length) + 1
      };
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.setLastIdx, 250);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="splash-dyn-text">
        {this.dynText.slice(this.state.currentTextIdx, this.state.lastTextIdx)}
      </div>
    );
  }
}

export default SplashDynamicText;
