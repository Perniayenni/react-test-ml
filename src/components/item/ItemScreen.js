import React, { useEffect, useState } from "react";
import { setLoading, setCategories } from "../../actions/items";
import { CircularIndeterminate } from "../CircularIndeterminate";
import { itemsService } from "../../services/apiServices";
import { useParams, Redirect } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const ItemScreen = () => {
  const { loading } = useSelector((state) => state.items);
  const [item, setitem] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    itemsService.show(id).then((response) => {
      if (response.item) {
        dispatch(setCategories(response.item.categories));
        setitem(response);
      }
      dispatch(setLoading(false));
    });
  }, [id]);

  if (item && !loading) {
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
  } else if (loading) {
    return <CircularIndeterminate />;
  } else {
    return <>No se encontraron resultados</>;
  }
};
