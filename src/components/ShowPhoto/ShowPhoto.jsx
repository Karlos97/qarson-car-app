import React from 'react'

const ShowPhoto = props =>{
    // className={classes.image} 
return (
    <Modal onClose={props.onClose}>
    <img alt={`Car${props.model}`} src={props.image} />
  </Modal>
 
)
}
export default ShowPhoto