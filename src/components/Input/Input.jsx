import React, { Component } from "react";

class Input extends Component {
  state = {
    value: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({ value: "" });
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  componentDidUpdate(prevProp) {
    if (prevProp.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            onChange={this.onChange}
            type="text"
            placeholder="e.g milk"
            value={this.state.value}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Input;
