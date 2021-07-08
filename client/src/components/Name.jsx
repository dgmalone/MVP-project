import React, {useState, useEffect} from 'react';
import Modal from './Modal.jsx'
function Name(props) {
  // expanded or collappsed
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
    // call server to make update
    props.updateSearchName(props.id, newName)
      .then(results => {
        setEditing(false);
      })
      .catch(err => { console.log(err)})
    //setEditing(false);
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
      <form onSubmit={updateSearch}>
        <input type='text' value={newName} onChange={updateValue}></input>
        <button type='submit'>Save Name</button>
      </form>
      <button onClick={() => setOpen(true)}>Update Search</button>
      <button onClick={cancelEdit}>Cancel</button>
      <Modal open={open} filters={props.filters} id={props.id} closePopup={handlePopCancel} handleUpdateFilter={props.handleUpdateFilter}/>
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