import React from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Select from "./Select";
export default class FormAddRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
    };
  }

  render() {
    return (
      <>
        <FormControl>
          <InputLabel htmlFor="my-input">Nombre</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">Dirección</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">País</InputLabel>
          <br />
          <br />
          <Select />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Ciudad</InputLabel>
          <br />
          <br />
          <Select />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Código postal</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Categoría</InputLabel>
          <br />
          <br />
          <Select />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Rating</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Comentarios</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
      </>
    );
  }
}
