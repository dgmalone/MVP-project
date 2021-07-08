import React, {useState} from 'react';
import Name from './Name.jsx'
function SavedSearchButton(props) {
  // expanded or collappsed
  //const [editing, setEditing] = useState(false);
  const handleSet = () => {
    let filters = props.info.filters;
    let saveId = props.info._id;
    props.handleSavedClick(filters)
  }
  return (
    <div className="edit-savedSearch">
      <Name searchName={props.info.searchName} id={props.info._id} filters={props.info.filters} updateSearchName={props.updateSearchName} handleUpdateFilter={props.handleUpdateFilter}/>
      {/* <h1 onClick>
      {props.info.searchName}
      </h1> */}
      <button onClick={handleSet} id={props.id}>
        Apply
      </button>
      <button onClick={props.deleteSearch} id={props.info._id} name={props.info.searchName}>
        Delete
      </button>
    </div>
  )

}

export default SavedSearchButton;