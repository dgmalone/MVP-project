import React, {useState, useEffect} from 'react';
import SavedSearchButton from './SavedSearchButton.jsx';
import serverCalls from '../Controller.js';

function SavedSearches(props) {

  const [savedList, setSavedList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [test, setTest] = useState(0);

  const saveFiltersAsSearch = (event) => {
    event.preventDefault()
    props.saveSearch(searchName)
    .then(res => {
      return serverCalls.getSearches(props.userName)
    })
    .then(results => {
      setSavedList(results);
      setSearchName('');
    })
    .catch(err => {
      console.log(err)
    })
  }
  const changeSearchName = (event) => {
    setSearchName(event.target.value)
  }
  const deleteSearch = (event) => {
    event.preventDefault();
    serverCalls.deleteSearch(event.target.id)
      .then(res => {
        return serverCalls.getSearches(props.userName)
      })
      .then(results => {
        setSavedList(results)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const updateSearchName = (id, newName) => {
    return serverCalls.updateSearch(id, newName)
    .then(res => {
      return serverCalls.getSearches(props.userName)
    })
    .then(results => {
      setSavedList(results)
      return 'close'
    })
  }
  const handleUpdateFilter = (id, filters) => {
    return serverCalls.updateSearchFilters(id, filters)
    .then(res => {
      return serverCalls.getSearches(props.userName)
    })
    .then(results => {
      setSavedList(results)
      return 'test'
    })
  }
  useEffect (() => {
    serverCalls.getSearches(props.userName)
      .then(results => {
        setSavedList(results)
      })
  }, [props.userName, test])

  return (
    <div>
      {savedList.map( (search, index) => {
        return <SavedSearchButton key={index} id={index} handleSavedClick={props.handleSavedClick}  info={search} deleteSearch={deleteSearch} updateSearchName={updateSearchName} handleUpdateFilter={handleUpdateFilter}/>
      })}
      <form onSubmit={saveFiltersAsSearch}>
      <label>
        <input type='text' name='nameSearch' value={searchName} onChange={changeSearchName} required/>
      </label>
      <button>
        Save Search
      </button>
      </form>
    </div>
  )
}

export default SavedSearches;