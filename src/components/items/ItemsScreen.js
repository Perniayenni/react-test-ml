import React from "react";
import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

export const ItemsScreen = () => {
  const { items } = useSelector((state) => state);
  let history = useHistory();

  function goToItems(id) {
    history.push(`/items/${id}`);
  }

  if (items) {
    return (
      <div className="base_content">
        <Paper>
          {items.items.map((item) => (
            <div key={item.id} className="items_content_item">
              <div
                className="items_content_picture pointer"
                onClick={() => goToItems(item.id)}
              >
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
                <p className="items_title pointer">{item.title}</p>
                <label className="items_condition pointer">
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
