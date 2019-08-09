import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import BeerIndex from "./beers/index";
import BeerNew from "./beers/new";
import BeerShow from "./beers/show";

import BeerEdit from "./beers/edit";
import BeerDestroy from "./beers/destroy";



function router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
	    <Route exact path="/beers" component={BeerIndex} />
      <Route exact path="/beers/new" component={BeerNew} />
      <Route exact path="/beers/:id/" component={BeerShow} />
      <Route exact path="/beers/:id/edit" component={BeerEdit} />
      <Route exact path="/beers/:id/destroy" component={BeerDestroy} />
      
      </Switch>
  );
}


export default router;
