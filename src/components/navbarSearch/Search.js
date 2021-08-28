import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { itemsService } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import { setItems } from "../../actions/items";
import { useHistory } from "react-router-dom";

export const Search = () => {
  const [query, setquery] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  function searching() {
    itemsService.index({ q: query }).then((resp) => {
      dispatch(setItems(resp));
      history.push(`/items?q=${query}`);
    });
  }

  return (
    <div className="search_content_search">
      <input
        className="search_input"
        type="text"
        placeholder="Nunca dejes de buscar"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        maxLength="120"
      ></input>
      <button className="search_button" onClick={searching}>
        <FontAwesomeIcon className="search_icon" icon={faSearch} />
      </button>
    </div>
  );
};
