import React, { Component } from "react";
import Input from "./components/Input/Input";
import List from "./components/List/List";

class App extends Component {
  state = {
    data: [
      { name: "mishti", id: 123 },
      { name: "mayur", id: 456 },
    ],
    editName: "",
  };

  onAddItem = (value, id) => {
    const val = value.trim();

    if (!val) {
      return;
    }

    // if ID exists then this items needs to be edited
    // if (id) {
    // return after doing the edit operation;
    //   return;
    // }
    console.log("value", val);
    id = parseInt(Math.random() * 1000);
    this.setState({
      data: [{ name: val, id: id }, ...this.state.data],
    });
  };

  onClear = () => {
    this.setState({ data: [] });
  };

  onDelete = (id) => {
    let x = this.state.data.filter((currItem) => {
      if (currItem.id === id) {
        return false;
      }
      return true;
    });
    this.setState({ data: x });
  };
  onEdit = (name) => {
    this.setState({ editName: name });
  };
  render() {
    return (
      <div>
        <h2>Grocery Bud</h2>
        <Input onAdd={this.onAddItem} value={this.state.editName} />
        <List
          items={this.state.data}
          onClear={this.onClear}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
      </div>
    );
  }
}
export default App;
