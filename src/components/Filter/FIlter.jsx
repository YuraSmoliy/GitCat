import Rect from "react";
import { memo } from "react";

let Filter = (props) => {
  let search = (event) => {
    props.search(event.target.value);
  };
  return (
    <div>
      <input
        value={props.value}
        type="text"
        placeholder="search value by name"
        onChange={search}
      />
    </div>
  );
};

export default Filter;
