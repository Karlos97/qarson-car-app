import React, { useState, Fragment } from 'react'
import Image from '../others/Image'
import Button from '../others/Button'
import classes from './Row.module.scss'
import Modal from '../Modal/Modal'

const Row = (props) => {
  const [showCar, setShowCar] = useState(false)
  const thClass = classes.th
  const paragraphClass = classes['th-paragraph']
  const handleOnShowCar = () => {
    setShowCar(!showCar)
  }
  const handleOnHideCar = () => {
    setShowCar(!showCar)
  }
  const photo = props.photo ? (
    <Image
      image={props.photo}
      model={props.model}
      class={classes['image-small']}
      onClick={handleOnShowCar}
    />
  ) : null
  return (
    <>
      {showCar && (
        <Modal onClose={handleOnHideCar}>
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
          <div className={thClass}>
            <p
              className={paragraphClass}
            >{`${props.make} ${props.model} ${props.engine}`}
            </p>
            {photo}
          </div>
        </th>
        <th>
          <p className={paragraphClass}>{props.model}</p>
        </th>
        <th>
          <p className={paragraphClass}>{props.engine}</p>
        </th>
        <th>
          <p className={paragraphClass}>{props.availability ? 'tak' : 'nie'}</p>
        </th>
        <th>
          <Button onClick={props.handleOnDeleteRow} id={props.id}>
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
