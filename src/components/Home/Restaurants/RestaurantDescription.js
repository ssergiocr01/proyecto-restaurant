import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import "./restaurantDesc.css";
function RestaurantDesc() {
  const [value, setValue] = React.useState(2);
  const clickButton = () => {
    console.log("dhdhdh");
  };
  return (
    <>
      <section className="restaurant-description">
        <div>
          <h2>Calificacion y opiniones</h2>
          <div>
            <span>4</span>
            <FiberManualRecordIcon onClick={clickButton} />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <RadioButtonUncheckedIcon />
          </div>
        </div>
        <div>Holaa2</div>
        <div>Holaa3</div>
      </section>
    </>
  );
}
export default RestaurantDesc;
