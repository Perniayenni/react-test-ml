import React from "react";
import { CircularIndeterminate } from "../CircularIndeterminate";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

export const ItemsScreen = () => {
  const { items, loading } = useSelector((state) => state.items);
  let history = useHistory();

  function goToItems(id) {
    history.push(`/items/${id}`);
  }

  if (items && items.length > 0 && !loading) {
    return (
      <div className="base_content">
        <Paper>
          {items.map((item) => (
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
                <p
                  className="items_title pointer"
                  onClick={() => goToItems(item.id)}
                >
                  {item.title}
                </p>
                <label
                  className="items_condition pointer"
                  onClick={() => goToItems(item.id)}
                >
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
  } else if (loading) {
    return <CircularIndeterminate />;
  } else {
    return <>No se encontraron resultados</>;
  }
};
