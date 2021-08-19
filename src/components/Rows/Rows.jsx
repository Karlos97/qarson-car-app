import React from "react";
import Row from "../Row/Row";
import classes from "./Rows.module.scss";

const Rows = (props) => {

  const rows = props.data.map((car, id) => {
    console.log(id%2)

    return (
      <Row
      
        availability={car.availability}
        photo={car.photo}
        model={car.model}
        engine={car.engine}
        make={car.make}
        key={id}
        deleteItem={props.deleteItem}
      />
    );
  });
  return rows;
};
export default Rows;
