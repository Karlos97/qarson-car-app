import React from "react";
import classes from "./Table.module.scss";

import Rows from "../Rows/Rows";

const offers = [
  {
    make: "Volkswagen",
    model: "Golf VII",
    engine: "1.6 TDI",
    availability: false,
    photo:
      "https://cars.qarson.fr/64883/mandataire-auto-cd-fl030-ff29c7-bcp.jpg",
  },
  {
    make: "Volkswagen",
    model: "ID.3",
    engine: "58 kWh",
    availability: true,
    photo:
      "https://cars.qarson.fr/69648/mandataire-auto-cd-fl030-6729e1-bcp.jpg",
  },
];

const Table = (props) => {

  const onRemoveHandler = (e) => {
    // offers[e].pop()
    console.log("del item")
  }
  return (
    <table>
      <thead className={classes["table-head"]}>
        <tr>
          <th>Nazwa</th>
          <th>Model</th>
          <th>Silnik</th>
          <th>Dostepnosc</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        
        <Rows data={offers} deleteItem={onRemoveHandler}/>
      </tbody>
    </table>
  );
};
export default Table;
