import React from "react";
import { Switch, Route } from "react-router-dom";
import HeaderHome from "../../components/Header";
import SearchBar from "../../components/Home/SearchBar";
function LayoutHome(props) {
  const { routes } = props;
  return (
    <>
      <HeaderHome />
      <SearchBar />
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            component={route.component}
          ></Route>
        ))}
      </Switch>
    </>
  );
}

export default LayoutHome;
