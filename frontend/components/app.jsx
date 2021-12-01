import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from './welcome_pages/welcome_page_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import ListingFormContainer from './listings/listing_form_container'
import ListingShowContainer from "./listings/listing_show_container";
import EditFormContainer from "./listings/edit_form_container";
import ListingIndexContainer from './listings/listings_index_container'
import { AuthRoute,ProtectedRoute } from "../util/routes";

const App = () => (
  <div>
    <header>

    <p className='mainLogo'>HipCamp</p>

    <GreetingContainer/>
  </header>
  <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/listings/new" component ={ListingFormContainer} />
    <Route exact path="/listings/:listingId" component={ListingShowContainer} />
    <Route exact path="/listings/:listingId/edit" component={EditFormContainer}/>
    <Route exact path='/' component={ListingIndexContainer} />
  </Switch>
  </div>
);

export default App;