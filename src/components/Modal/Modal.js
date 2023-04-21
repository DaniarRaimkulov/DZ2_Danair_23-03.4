import React from 'react'
import classes from './Modal.module.css'
const Modal = ({ handleShow }) => {
    const handleChangeInput = (event) => {
        console.log(event.target.value, 'event');
    }
  return (
    <>
        <div onClick={handleShow} className={classes.modalWrapper}></div>
        <div className={classes.modalContent}>
            <input onChange={handleChangeInput} type="text" name="task" />
        </div>
    </>
  )
}

export default Modal