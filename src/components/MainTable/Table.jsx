import React from "react";

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
  const rows = offers.map((el, id) => {
    return (
      <tr style={{color: el.availability? "black" : "red"}}>
        <th>{el.make}</th>
        <th>{el.model}</th>
        <th>{el.engine}</th>
        <th>{el.availability ? "tak" : "nie"}</th>
        <th>
          <img alt="Car photo" src={el.photo} />
          <button>Usun z listy</button>
        </th>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th>Nazwa</th>
        <th>Model</th>
        <th>Silnik</th>
        <th>Dostepnosc</th>
        <th>Akcje</th>
      </tr>
      {rows}
    </table>
  );
};
export default Table;
