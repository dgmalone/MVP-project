import React, {useState} from 'react';

function SavedSearches(props) {

  return (
    <div>
      {props.searches.map( (search, index) => {
        return <button key={index} id={index} onClick={props.handleSavedClick}>{search.searchName}</button>
      })}
    </div>
  )
}

export default SavedSearches;