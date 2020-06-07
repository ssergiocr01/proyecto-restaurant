import React from "react";
import { Switch, Route } from "react-router-dom";
import HeaderAdmin from "../../components/Header";
import Drawer from "../../components/Admin/Drawer";
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
        <section className="index-admin">
          <div className="layout-admin">
            <Drawer />
          </div>
          <div className="layout-admin">
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
          </div>
        </section>
      </>
    );
  }
}

export default LayoutHome;
