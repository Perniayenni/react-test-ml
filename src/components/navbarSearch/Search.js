import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { itemsService } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import { setItems } from "../../actions/items";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export const Search = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [query, setquery] = useState(q);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    itemsService.index({ q: query }).then((resp) => {
      if (resp.suggested_queries) {
        dispatch(setItems(""));
      } else {
        dispatch(setItems(resp));
        setquery("");
      }
    });
  }, [q]);

  function searching() {
    history.push(`/items?q=${query}`);
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
