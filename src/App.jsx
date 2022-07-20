import React, { Component } from "react";
import Input from "./components/Input/Input";
import List from "./components/List/List";

export const TimePassContext = React.createContext(null);

const initialState = {
  data: [],
  editName: "",
  editId: null,
  isEdit: false,
};

class App extends Component {
  state = initialState;

  addNewItem = (value) => {
    const val = value.trim();

    if (!val) {
      return;
    }
    const id = parseInt(Math.random() * 1000);
    this.setState({
      data: [{ name: val, id: id }, ...this.state.data],
    });
  };

  updateEditedItem = (value) => {
    const newArr = [...this.state.data];
    // done
    const temp = { name: value, id: this.state.editId };
    const index = newArr.findIndex((currentItem) => {
      if (currentItem.id === this.state.editId) {
        return true;
      }
      return false;
    });
    newArr[index] = temp;
    this.setState({ data: newArr });
  };

  onAddItem = (value) => {
    if (this.state.isEdit) {
      // written in input box is a an Edit Item
      this.updateEditedItem(value);
      this.setState({ isEdit: false });
    } else {
      // user is adding a new item
      this.addNewItem(value);
    }
  };

  onClear = () => {
    this.setState({ ...initialState });
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

  onEdit = (name, id) => {
    this.setState({ editName: name, editId: id, isEdit: true });
  };

  render() {
    return (
      <TimePassContext.Provider
        value={{ onEdit: this.onEdit, onDelete: this.onDelete }}
      >
        <div>
          <h2>Grocery Bud</h2>
          <Input onAdd={this.onAddItem} value={this.state.editName} />
          <List items={this.state.data} onClear={this.onClear} />
        </div>
      </TimePassContext.Provider>
    );
  }
}
export default App;
