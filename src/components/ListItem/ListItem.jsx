import React from "react";
import { TimePassContext } from "../../App";

const ListItem = (props) => {
  return (
    <TimePassContext.Consumer>
      {(obj) => {
        const { onEdit, onDelete } = obj;
        return (
          <div>
            <div>
              <span>{props.name}</span>
              <button onClick={() => onEdit(props.name, props.id)}>Edit</button>
              <button onClick={() => onDelete(props.id)}>Delete</button>
            </div>
          </div>
        );
      }}
    </TimePassContext.Consumer>
  );
};

export default ListItem;
