import React from "react";
import { useSelector } from "react-redux";

export const ItemsScreen = () => {
  const { items } = useSelector((state) => state);

  if (items) {
    return (
      <div>
        {items.items.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};
