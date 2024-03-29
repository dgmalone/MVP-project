import React, {useState, useEffect} from 'react';
import serverCalls from '../Controller.js';
import SavedSearches from './SavedSearches.jsx';
import helpers from '../Helpers.js';
function FilterForm(props) {
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState(helpers.filters)
  const toggleOpen = (event) => {
    setOpen(!open)
  }
  const handleChange = (event) => {
    let name = event.target.name
    setValues({...values, [name]: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    serverCalls.getData(values)
      .then(results => {
        props.setNewBonds(results)
      })
  }
  const changeSearchName = (event) => {
    setSearchName(event.target.value)
  }
  const saveSearch = (searchName) => {

    return serverCalls.saveSearch(props.userName, searchName, values)
  }
  const clickOnSaved = (filters) => {
    const index = event.target.id;
    const emptyVals = helpers.filters
    serverCalls.getData(filters)
      .then(results => {
        setValues({...emptyVals, ...filters})
        props.setNewBonds(results)
      })
  }


if (!open) {
  return (
    <div>
      <div>
        <SavedSearches  saveSearch={saveSearch} handleSavedClick={clickOnSaved} userName={props.userName}/>
      </div>
      <button onClick={toggleOpen}>Filters v</button>
    </div> )
}
  return (
    <div>
      <div>
        <SavedSearches  saveSearch={saveSearch} handleSavedClick={clickOnSaved} userName={props.userName}/>
      </div>
      <div>
      <button onClick={toggleOpen}>

        Filters >
      </button>
      </div>
      <div className="boxed-form">
      Filter Search:
      <form className='filter-form' onSubmit={handleSubmit}>
        <label>
          CDIAC Number:
          <input type='text' name='cdiacNo' value={values.cdiacNo} onChange={handleChange}/>
        </label>
        <label>
          Financial Advisor: <input type='text' name='FA' value={values.FA} onChange={handleChange}/>
        </label>
        <label>
          Bond Counsel:
          <input type='text' name='Counsel' value={values.Counsel} onChange={handleChange}/>
        </label>
        <label>
          Sale Date Range: <input type='date' name='SaleDateStart' value={values.SaleDateStart} onChange={handleChange}/> to <input type='date' name='SaleDateEnd' value={values.SaleDateEnd} onChange={handleChange}/>
        </label>
        <label>
           County: <input type='text' name='County' value={values.County} onChange={handleChange}/>
        </label>
        <label>
           Issuer: <input type='text' name='Issuer' value={values.Issuer} onChange={handleChange}/>
        </label>
        <label>
           Issuer Type: <input type='text' name='IssuerType' value={values.IssuerType} onChange={handleChange}/>
        </label>
        <label>
           Debt Type: <input type='text' name='DebtType' value={values.DebtType} onChange={handleChange}/>
        </label >
        <label>
           Sale Type: <input type='text' name='SaleType' value={values.SaleType} onChange={handleChange}/>
        </label>
        <label>
           Principal Amount Range: <input type='number' name='PrincAmtMin' value={values.PrincAmtMin} onChange={handleChange}/> to <input type='number' name='PrincAmtMax' value={values.PrincAmtMax} onChange={handleChange}/>
        </label>
        <label>
           Refund Amount Range: <input type='number' name='RefundAmtMin' value={values.RefundAmtMin} onChange={handleChange}/> to <input type='number' name='RefundAmtMax' value={values.RefundAmtMax} onChange={handleChange}/>
        </label>
        <label>
           Private Placement:
            <select name="PrivatePlacement" onChange={handleChange}  value={values.PrivatePlacement}>
              <option value=""> -- </option>
              <option value="YES"> Yes </option>
              <option value="NO"> No </option>
            </select>
        </label>
        <button>Filter Search</button>
      </form>
      </div>
    </div>
  )
}

export default FilterForm;