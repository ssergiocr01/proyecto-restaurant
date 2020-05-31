import React from "react";
import { Switch, Route } from "react-router-dom";
import HeaderAdmin from "../../components/Header";
class LayoutHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: this.props.routes,
    };
  }
  render() {
    const { routes } = this.state;
    return (
      <>
        <HeaderAdmin />
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
}

export default LayoutHome;
