import React from "react";

class RandomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { random: 0 };
  }

  render() {
    return (
      <div>
        <>
          <p className="nameSize">{this.props.name}</p>
        </>
        <button onClick={this.props.randomClick}>Add Random Contact </button>{" "}
      </div>
    );
  }
}

export default RandomButton;
