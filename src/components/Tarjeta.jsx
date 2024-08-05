import React from "react";

const Tarjeta = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <hr/>
          <p className="card-text text-center">
            Ingredientes:
          </p>
          <p className="card-text text-center">
      
            {props.ingredients.map(i=> i).join(', ')}
          </p>
          <hr/>
          <h3 class="text-center">
         Precio: $ {props.price.toLocaleString("es-CL")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
