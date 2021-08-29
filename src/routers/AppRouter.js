import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { ItemScreen } from "../components/item/ItemScreen";
import { ItemsScreen } from "../components/items/ItemsScreen";
import { NavbarSearch } from "../components/navbarSearch/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <NavbarSearch />
      <div className="base_container">
        <Breadcrumb />
        <Switch>
          <Route exact path="/items" component={ItemsScreen} />
          <Route exact path="/items/:id" component={ItemScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
