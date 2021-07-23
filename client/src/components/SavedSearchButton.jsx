import React, {useState} from 'react';
import Name from './Name.jsx';
import { Button } from '@material-ui/core';
function SavedSearchButton(props) {

  const handleSet = () => {
    let filters = props.info.filters;
    let saveId = props.info._id;
    props.handleSavedClick(filters)
  }
  return (
    <div className="edit-savedSearch">
      <Name searchName={props.info.searchName} id={props.info._id} filters={props.info.filters} updateSearchName={props.updateSearchName} handleUpdateFilter={props.handleUpdateFilter}/>
      <Button color="primary" onClick={handleSet} id={props.id}>Apply</Button>
      <Button color="primary" onClick={props.deleteSearch} id={props.info._id} name={props.info.searchName}>
        Delete
      </Button>
    </div>
  )

}

export default SavedSearchButton;