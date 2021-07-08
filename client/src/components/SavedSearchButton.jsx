import React, {useState} from 'react';

function SavedSearchButton(props) {
  // expanded or collappsed
  const handleSet = () => {
    let filters = props.info.filters;
    let saveId = props.info._id;
    props.handleSavedClick(filters)
  }
  return (
    <div>
      {props.info.searchName}
      <button onClick={handleSet} id={props.id}>
        Set
      </button>
      <button onClick={props.deleteSearch} id={props.info._id} name={props.info.searchName}>
        Delete
      </button>
    </div>
  )

}

export default SavedSearchButton;