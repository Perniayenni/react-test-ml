import React from "react";
import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";

export const ItemsScreen = () => {
  const { items } = useSelector((state) => state);

  if (items) {
    return (
      <div className="items_content">
        <Paper>
          {items.items.map((item) => (
            <div key={item.id} className="items_content_item">
              <div className="items_content_picture">
                <img
                  className="items_picture"
                  alt="imagen"
                  src={item.picture}
                />
              </div>

              <div className="items_content_description">
                <label className="items_price">
                  <span className="items_symbol">$</span>
                  {item.price.amount}
                </label>
                <p className="items_title">{item.title}</p>
                <label className="items_condition">
                  {item.condition === "new" ? "Nuevo" : "Usado"}
                </label>
              </div>
              <div className="items_content_adress">
                <label className="items_adress">{item.state_name}</label>
              </div>
            </div>
          ))}
        </Paper>
      </div>
    );
  } else {
    return <></>;
  }
};
