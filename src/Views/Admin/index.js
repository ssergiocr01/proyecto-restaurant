import React from "react";
import "./index.scss";
class IndexView extends React.Component {
  render() {
    return (
      <section className="index-admin">
        <div className="layout-admin">texto a la izquiera</div>
        <div className="layout-admin">Texto a la derecha</div>
      </section>
    );
  }
}

export default IndexView;
