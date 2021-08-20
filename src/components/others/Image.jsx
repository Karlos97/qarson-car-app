import React from 'react'
import classes from './Image.module.scss'

const Image = ({ model, image }) => {
  return (
    <img alt={`Car${model}`} src={image} className={classes.image} />
  )
}
export default Image
