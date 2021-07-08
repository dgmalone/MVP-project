import React, {useState} from 'react';

function Name(props) {
  // expanded or collappsed
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] =useState(props.searchName)
  const editName = (event) => {
    setEditing(true);
  }
  const cancelEdit = (event) => {
    setEditing(false);
    setNewName(props.searchName)
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
  if (editing) {
    return (
      <>
      <form onSubmit={updateSearch}>
        <input type='text' value={newName} onChange={updateValue}></input>
        <button type='submit'>Save</button>
      </form>
        <button onClick={cancelEdit}>Cancel</button>
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