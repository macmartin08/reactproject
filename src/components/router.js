import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import BeerIndex from "./beers/index";
import BeerNew from "./beers/new";
import BeerShow from "./beers/show";
import BrandIndex from "./brands/index";
import BrandNew from "./brands/new";
import BrandShow from "./brands/show";



function router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
	    <Route exact path="/beers" component={BeerIndex} />
      <Route exact path="/beers/new" component={BeerNew} />
      <Route exact path="/beers/:id" component={BeerShow} />
      <Route exact path="/brands" component={BrandIndex} />
      <Route exact path="/brands/new" component={BrandNew} />
      <Route exact path="/brands/:id" component={BrandShow} />
      </Switch>
  );
}


export default router;
