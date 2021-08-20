import React, { useState, useEffect } from "react";
import classes from "./Table.module.scss";

import Rows from "../Rows/Rows";
import { uuid } from "uuidv4";

const Table = (props) => {
  const [dataFetched, setDataFetched] = useState(false);
  const [stockData, setStockData] = useState("");

  useEffect(() => {
    fetch(
      "https://bitbucket.org/dacsoftware/recruitment/raw/e824e5c44befb603535a33ea88a4888c92cf1042/data.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setStockData(
          res.offers.map((el) => {
            el.id = uuid();
            return el;
          })
        );
        setDataFetched(true);
      })
      .catch((err) => alert("ERROR"));
    //   $.ajax({
    //     url : "https://bitbucket.org/dacsoftware/recruitment/raw/e824e5c44befb603535a33ea88a4888c92cf1042/data.json"
    // }).done(res => {
    //     console.log(res);
    // })
  }, []);

  const onChangeAvailability = (event) => {
    console.log("change item");
    console.log(event.target.id);
    console.log(
      setStockData(
        stockData.map((el) => {
          if (el.id === event.target.id) {
            el.availability = !el.availability;
          }
          return el;
        })
      )
    );
  };

  const onDeleteRowHandler = (event) => {
    console.log("del item");
    console.log(event.target.id);
    console.log(
      setStockData(stockData.filter((el) => el.id !== event.target.id))
    );
  };
  return (
    <section className={classes.table}> 

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
        {dataFetched && (
          <Rows
            data={stockData}
            handleDeleteRow={onDeleteRowHandler}
            stockData={stockData}
            changeAvailability={onChangeAvailability}
          />
        )}
      </tbody>
    </table>
    </section>
  );
};
export default Table;
