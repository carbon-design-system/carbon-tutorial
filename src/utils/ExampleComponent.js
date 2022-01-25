import React from 'react';

export class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 100 };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>remove</button>
        <span>Value is {this.state.count}</span>
      </div>
    );
  }
  add() {
    this.setState({ count: this.state.count + 1 });
  }
  remove() {
    this.setState({ count: this.state.count - 1 });
  }
}
