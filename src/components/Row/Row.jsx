import React, { useState, Fragment } from 'react'
import Image from '../others/Image'
import Button from '../others/Button'
import classes from './Row.module.scss'
import Modal from '../Modal/Modal'

const Row = (props) => {
  const [showCar, setShowCar] = useState(false)

  const onShowCar = () => {
    setShowCar(!showCar)
  }
  const onHideCar = () => {
    setShowCar(!showCar)
  }

  const photo = props.photo ? (
    <Image
      image={props.photo}
      model={props.model}
      class={classes['image-small']}
      onClick={onShowCar}
    />
  ) : null

  return (
    <>
      {showCar && (
        <Modal onClose={onHideCar}>
          <Image
            image={props.photo}
            model={props.model}
            class={classes['image-big']}
          />
        </Modal>
      )}
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
    </>
  )
}
export default Row
