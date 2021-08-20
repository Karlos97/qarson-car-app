import React from 'react'
import Image from '../others/Image'
import Button from '../others/Button'
import classes from './Row.module.scss'

const functionName = (props) => {
  const photo = props.photo ? (
    <Image image={props.photo} model={props.model} />
  ) : null

  return (
    <tr
      id={props.id}
      className={
        props.availability ? classes.available : classes['not-available']
      }
    >
      <th>
        <div className={classes.th}>
          <p>{props.make}</p>
          {photo}
        </div>
      </th>
      <th>{props.model}</th>
      <th>{props.engine}</th>
      <th>{props.availability ? 'tak' : 'nie'}</th>
      <th>
        <Button onClick={props.handleDeleteRow} id={props.id}>
          Usun z listy
        </Button>
        <Button onClick={props.changeAvailability} id={props.id}>
          Zmien dostepnosc
        </Button>

      </th>
    </tr>
  )
}
export default functionName
