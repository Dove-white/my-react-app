import { useState } from "react";

export const ListGroup = () => {
  const heading = "List Group";
  const peacing = "mt-4";
  const ACenter = "text-center";
  let items = ["An item", "A second item", "A third item", "A fourth item"];
  // items = [];
  const getMessage = () => items.length === 0 && <p>No item found</p>;

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  const [selectIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className={peacing && ACenter}>{heading}</h1>
      <ul className="list-group">
        {getMessage()}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
