import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { itemsService } from "../../services/apiServices";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const ItemScreen = () => {
  const { id } = useParams();
  const [item, setitem] = useState(null);

  useEffect(() => {
    itemsService.show(id).then((response) => {
      console.log(response);
      setitem(response);
    });
  }, [id]);

  if (item) {
    return (
      <div className="base_content">
        <Paper>
          <div className="item_content">
            <div className="item_content_picture">
              <img className="item_img" src={item.item.picture} />
              <div className="item_content_description">
                <label>Descripción del producto</label>
                <p>{item.item.description}</p>{" "}
              </div>
            </div>
            <div className="item_content_title">
              <label className="item_condition ">
                {item.item.condition === "new" ? "Nuevo" : "Usado"}
              </label>
              <p className="item_title">{item.item.title}</p>
              <label className="item_price">
                <span className="item_symbol">$</span>
                {item.item.price.amount}
              </label>

              <Button className="button-buy">Comprar</Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  } else {
    return <></>;
  }
};
