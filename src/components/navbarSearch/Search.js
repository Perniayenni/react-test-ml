import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCategories, setItems, setLoading } from "../../actions/items";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
import { itemsService } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import queryString from "query-string";

export const Search = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [query, setquery] = useState(q);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (query) {
      dispatch(setLoading(true));
      itemsService.index({ q: query }).then((resp) => {
        if (resp.suggested_queries || !resp) {
          dispatch(setItems([]));
          dispatch(setCategories([]));
        } else {
          dispatch(setItems(resp.items));
          dispatch(setCategories(resp.categories));
        }
        dispatch(setLoading(false));
        setquery("");
      });
    }
  }, [q]);

  function searching() {
    history.push(`/items?q=${query}`);
  }

  function enterPressed(e) {
    var code = e.keyCode || e.which;
    if (code === 13) {
      searching();
    }
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
        onKeyPress={enterPressed.bind(this)}
      ></input>
      <button className="search_button" onClick={searching}>
        <FontAwesomeIcon className="search_icon" icon={faSearch} />
      </button>
    </div>
  );
};
