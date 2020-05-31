import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import LocationOffIcon from "@material-ui/icons/LocationOff";
import ApartmentIcon from "@material-ui/icons/Apartment";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import PhoneIcon from "@material-ui/icons/Phone";
import "./restaurantDesc.scss";
function RestaurantDesc() {
  const [value, setValue] = React.useState(2);
  const clickButton = () => {
    console.log("dhdhdh");
  };
  return (
    <>
      <section className="restaurant-description">
        <div className="grid">
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
        <div className="grid">
          <h2>Detalles</h2>
          <strong>RANGO DE PRECIOS</strong>
          <p>$70 - $90 </p>
          <strong>RANGO DE PRECIOS</strong>
          <p>Italiana, Peruana, Europea, Internacional</p>
          <strong>DETALLES ESPECIALES</strong>
          <p>Apto para vegetarianos</p>
        </div>
        <div className="grid">
          <h2>Ubicación e información</h2>
          <p>
            <LocationOffIcon />
            <span>Avenida dos de mayo, Lima-Perú</span>
          </p>
          <p>
            <ApartmentIcon />
            <span>A 9km del centro de Lima</span>
          </p>
          <p>
            <LaptopChromebookIcon />
            <a
              href="https://material-ui.com/es/components/material-icons/"
              target="_blank"
            >
              Sitio web
            </a>
          </p>
          <p>
            <PhoneIcon />
            <span>+51 98883838833</span>
          </p>
        </div>
      </section>
    </>
  );
}
export default RestaurantDesc;
