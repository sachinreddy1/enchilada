import React from "react";
import image from "./images/0.gif"

const MS_PER_FRAME = 5;
const widthFloatingObject = 125;
const heightFloatingObject = 125;

class FloatingObject extends React.Component {
  constructor() {
    super();

    this.state = {
      imageHash: Date.now(),
      x: (window.innerWidth - widthFloatingObject) / 2,
      y: (window.innerHeight - heightFloatingObject) /2,
      xSpeed: 0.75,
      ySpeed: 0.75
    };
  }

  componentDidMount() {
    setInterval(() => this.moveObject(), MS_PER_FRAME);
    window.addEventListener("resize", this.resize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.setState({
      x: (window.innerWidth - widthFloatingObject) / 2,
      y: (window.innerHeight - heightFloatingObject) / 2
    });
  }

  moveObject() {
    this.setState({
        x: this.state.x + this.state.xSpeed,
        y: this.state.y + this.state.ySpeed
    });

    if (this.state.x + widthFloatingObject >= window.innerWidth || this.state.x <= 0) {
        this.setState({
          // imageHash: Date.now(),
          xSpeed: -this.state.xSpeed
        });
    }

    if (this.state.y + heightFloatingObject >= window.innerHeight || this.state.y <= 0) {
        this.setState({
          // imageHash: Date.now(),
          ySpeed: -this.state.ySpeed
        });
    }
  }

  addDefaultSrc(ev){
    ev.target.src = `${image}?${this.state.imageHash}`
  }

  render() {
    const {x, y} = this.state;

    return (
      <g>
        <g transform={`translate(${x}, ${y})`}>
          <image href={`${image}?${this.state.imageHash}`} onError={this.addDefaultSrc} height={heightFloatingObject} width={widthFloatingObject}></image>
        </g>
      </g>
    );
  }
}

export default FloatingObject;
