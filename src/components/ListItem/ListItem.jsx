import React from "react";

const ListItem = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div>
      <div>
        <span>{props.name}</span>
        <button onClick={() => props.onEdit(props.name)}>Edit</button>
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
