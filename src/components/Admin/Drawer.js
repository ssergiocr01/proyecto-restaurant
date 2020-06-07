import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
export default class TemporaryDrawer extends React.Component {
  render() {
    return (
      <List>
        <Link to="/admin">
          <ListItem button>
            <ListItemIcon>
              <RestaurantIcon /> Restaurante
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        </Link>
        <Link to="/admin/detail">
          <ListItem button>
            <ListItemIcon>
              <RestaurantMenuIcon /> Detalle Restaurante
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        </Link>
      </List>
    );
  }
}
