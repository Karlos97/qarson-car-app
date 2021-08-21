import React from 'react'
import Row from '../Row/Row'

const Rows = (props) => {



  const rows = props.data.map((car, id) => {
    return (
      <Row

        availability={car.availability}
        photo={car.photo}
        model={car.model}
        engine={car.engine}
        make={car.make}
        key={car.id}
        id={car.id}
        handleDeleteRow={props.handleDeleteRow}
        changeAvailability={props.changeAvailability}
      />
    )
  })
  return rows
}
export default Rows
