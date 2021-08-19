import React from 'react'
import Image from "../others/Image";
import classes from "./Row.module.scss";

const functionName = props =>{

return (
    <tr className={ props.availability ? classes.available : classes["not-available"] }>
    
    {/* // <tr > */}
    {/* <tr style={{ "background-color":props.id % 2  ? "green" : "red" }} > */}
    <th className={classes.name}>
      <Image image={props.photo} model={props.model} />
      {props.make}
    </th>
    <th>{props.model}</th>
    <th>{props.engine}</th>
    <th>{props.availability ? "tak" : "nie"}</th>
    <th>
      <button onClick={props.deleteItem(props.id)}>Usun z listy</button>
      <button>Zmien dostepnosc</button>
    </th>
  </tr>
)
}
export default functionName