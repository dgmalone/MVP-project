import React, {useState, useEffect} from 'react';
import Modal from './Modal.jsx';
import { Button } from '@material-ui/core';

function Name(props) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] =useState('');
  const [open, setOpen] = useState(false);
  const editName = (event) => {
    setEditing(true);
  }
  const cancelEdit = (event) => {
    setEditing(false);
  }
  const updateSearch = (event) => {
    event.preventDefault();
    props.updateSearchName(props.id, newName)
      .then(results => {
        setEditing(false);
      })
      .catch(err => { console.log(err)})
  }
  const updateValue = (event) => {
    setNewName(event.target.value)
  }
  const handlePopCancel = () => {
    setOpen(false);
  }
  useEffect( () => {
    setNewName(props.searchName)
  }, [props.searchName, editing])
  if (editing) {
    return (
      <>
      <div >
      {props.searchName}
     </div>
      <form onSubmit={updateSearch}>
        <input type='text' value={newName} onChange={updateValue}></input>
        <Button color="primary" type='submit'>Save Name</Button>
      </form>
      <Button color="primary" onClick={() => setOpen(true)}>Update</Button>
      <Button color="primary" onClick={cancelEdit}>Cancel</Button>
      <Modal open={open} filters={props.filters} searchName={props.searchName} id={props.id} closePopup={handlePopCancel} handleUpdateFilter={props.handleUpdateFilter}/>
      </>
    )
  }
  return (
     <div onClick={editName}>
      {props.searchName}
     </div>
  )

}

export default Name;