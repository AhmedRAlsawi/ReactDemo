import React from "react";

class AppClassComponent extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "Ahmed",
      age: 27,
    };
  }
  componentDidMount() {
    console.log("didMount / every thing rendered");
  }
  componentDidUpdate() {
    console.log("didUpdate");
  }
  componentWillUnmount() {
    console.log("willUnMount");
  }

  changeName() {
    return this.setState({
      name: "Sawi",
      age: 25,
    });
  }

  render() {
    console.log("render / file is ready");
    return (
      <>
        <h1>Hi from app component class</h1>
        <h2>
          {this.state.name} is {this.state.age}
        </h2>
        <button onClick={() => this.changeName()}>Click Me!</button>
      </>
    );
  }
}

export default AppClassComponent;
