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
    <div>
      <Name searchName={props.info.searchName} id={props.info._id} updateSearchName={props.updateSearchName}/>
      {/* <h1 onClick>
      {props.info.searchName}
      </h1> */}
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