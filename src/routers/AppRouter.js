import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { ItemScreen } from "../components/item/ItemScreen";
import { ItemsScreen } from "../components/items/ItemsScreen";
import { NavbarSearch } from "../components/navbarSearch/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavbarSearch />
        <Switch>
          <Route exact path="/items" component={ItemsScreen} />
          <Route exact path="/items/:id" component={ItemScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
