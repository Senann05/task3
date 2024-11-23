// import { Component } from "react";
// class Button extends Component {
//   clickHandler = () => {
//     console.log("Button click");
//   };
 
//   render() {
//     return (
//       <button type="button" onClick={this.clickHandler}>
//          Click
//       </button>
//     );
//   }
//  }
//  export default Button

import { Component } from "react"; 
class SubscribeButton extends Component {
  state = {
    subscribed: false,
    text: "Subscribe"
  };

  clickHandler = () => {
    this.setState({ text: "Subscribed", subscribed: true });
  };

  render() {
    const { text, subscribed } = this.state;
    let className = "subscribe-button";
   
    if (!subscribed) {
      className += " subscribe-button_red";
    } else {
      className += " subscribe-button_grey";
    }

    return (
      <button type="button" className={className} onClick={this.clickHandler}>
        {text}
      </button>
    );
  }
}

export default SubscribeButton;
