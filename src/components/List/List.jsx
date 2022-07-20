import ListItem from "../ListItem/ListItem";

const List = (props) => {
  if (!props.items.length) {
    return null;
  }
  return (
    <div>
      {props.items.map(function (currentItem) {
        return <ListItem {...currentItem} />;
      })}
      <button onClick={props.onClear}>Clear Items</button>
    </div>
  );
};
export default List;
