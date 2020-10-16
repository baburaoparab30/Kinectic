import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NotFound from "../ErrorPages/NotFound";
import HeaderComponent from "../Layout/Header/HeaderComponent";
import FooterComponent from "../Layout/Footer/FooterComponent";
import ContainerComponent from "../Layout/Container/ContainerComponent";
const HomeComponent = React.lazy(() => import("../Home/HomeComponent"));
const ProductsComponent = React.lazy(() =>
  import("../Products/ProductsComponent")
);
const NewsEventsComponent = React.lazy(() =>
  import("../NewsEvents/NewsEventsComponent")
);
const ContactUsComponent = React.lazy(() =>
  import("../ContactUs/ContactUsComponent")
);

export default function RouterComponent() {
  return (
    <ContainerComponent>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => <HomeComponent {...routeProps} />}
            />
            <Route
              exact
              path="/products"
              render={(routeProps) => <ProductsComponent {...routeProps} />}
            />
            <Route
              exact
              path="/news-and-events"
              render={(routeProps) => <NewsEventsComponent {...routeProps} />}
            />
            <Route
              exact
              path="/contact"
              render={(routeProps) => <ContactUsComponent {...routeProps} />}
            />
            <Route render={(routeProps) => <NotFound {...routeProps} />} />
          </Switch>
          <FooterComponent />
        </Router>
      </Suspense>
    </ContainerComponent>
  );
}
