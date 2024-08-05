import React from "react";
import Tarjeta from "./Tarjeta";
const Galeria = () => {
  return (
    <>
      <div class="row mt-4 p-4">
        <div class="col">
          <Tarjeta
            imagen="assets/img/pizza1.jpg"
            name="Napolitana"
            price={10000}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          />
        </div>
        <div class="col">
          <Tarjeta imagen="assets/img/pizza2.jpg" 
              name="Margarita"
              price={14000}
              ingredients={["mozzarella","salsa" ]}/>
        </div>
        <div class="col">
          <Tarjeta imagen="assets/img/pizz3.jpg" 
              name="Mexicana"
              price={16000}
              ingredients={["mozzarella", "tomates", "jamón", "orégano","Jalapeños"]}/>
        </div>
      </div>
    </>
  );
};

export default Galeria;
