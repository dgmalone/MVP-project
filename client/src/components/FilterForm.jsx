import React, {useState, useEffect} from 'react';
import serverCalls from '../Controller.js';
import SavedSearches from './SavedSearches.jsx';
function FilterForm(props) {
  const [open, setOpen] = useState(true);
  const [savedList, setSavedList] = useState([
    {
        "filters": {
            "FA": "",
            "Counsel": "",
            "SaleDateStart": "",
            "SaleDateEnd": "",
            "IssuerType": "",
            "DebtType": "",
            "RefundAmtMin": "",
            "RefundAmtMax": "",
            "SaleType": "",
            "Issuer": ""
        },
        "_id": "60e650582a16634286894268",
        "userName": "test",
        "searchName": "bleh",
        "__v": 0
    },
    {
        "filters": {
            "FA": "testnew",
            "Counsel": "",
            "SaleDateStart": "",
            "SaleDateEnd": "",
            "IssuerType": "",
            "DebtType": "",
            "RefundAmtMin": "",
            "RefundAmtMax": "",
            "SaleType": "",
            "Issuer": ""
        },
        "_id": "60e653ebba1792433c209dc7",
        "userName": "test",
        "searchName": "bleh2",
        "__v": 0
    },
    {
      "filters": {
          "FA": "",
          "Counsel": "",
          "SaleDateStart": "2011-07-07",
          "SaleDateEnd": "2011-07-07",
          "IssuerType": "",
          "DebtType": "",
          "RefundAmtMin": "",
          "RefundAmtMax": "",
          "SaleType": "",
          "Issuer": ""
      },
      "_id": "60e661f2c4a87c467aa48544",
      "userName": "test",
      "searchName": "7-7-2011",
      "__v": 0
  }
])
  const [searchName, setSearchName] = useState('');
  const [values, setValues] = useState({
    FA: '',
    Counsel: '',
    SaleDateStart: '',
    SaleDateEnd: '',
    IssuerType: '',
    DebtType: '',
    RefundAmtMin: '',
    RefundAmtMax: '',
    SaleType: '',
    Issuer: ''
  })
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
    //console.log(values)
    // call to server ?
    serverCalls.getData(values)
      .then(results => {
        console.log('returned:', results)
        props.setNewBonds(results)
      })
  }
  const changeSearchName = (event) => {
    setSearchName(event.target.value)
  }
  const saveSearch = (event) => {

    // call server
    event.preventDefault();
    serverCalls.saveSearch('test', searchName, values)
  }
  const clickOnSaved = (event) => {
    const index = event.target.id;
    setValues(savedList[index].filters)
  }
  useEffect (() => {
    serverCalls.getSearches(props.userName)
      .then(results => {
        setSavedList(results)
      })
  }, [props.userName])
  // Issuer:			D, F (low)
// Underwriter:		D, F (low)
// Placement Agent:	D, F (low)
// CAB Flag:		D, F (low)
// Guarantor:		D, F (low)
// Discl Counsel:		D, F (low)
if (!open) {
  return <button onClick={toggleOpen}>Expand Filter </button>
}
  return (
    <div>
      Saved Searches:
      <div>
        <SavedSearches  searches={savedList} handleSavedClick={clickOnSaved}/>
      </div>
      Filter Search:
      <form className='filter-form' onSubmit={handleSubmit}>
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
           Issuer Type: <input type='text' name='IssuerType' value={values.IssuerType} onChange={handleChange}/>
        </label>
        <label>
           Sale Type: <input type='text' name='SaleType' value={values.SaleType} onChange={handleChange}/>
        </label>
        <label>
           Refund Amount Range: <input type='number' name='RefundAmtMin' value={values.RefundAmtMin} onChange={handleChange}/> to <input type='number' name='RefundAmtMax' value={values.RefundAmtMax} onChange={handleChange}/>
        </label>
        <label>
           Debt Type: <input type='text' name='DebtType' value={values.DebtType} onChange={handleChange}/>
        </label >
        <button>Filter Search</button>
      </form>
      <button onClick={toggleOpen}>
        Collapse Filter
      </button>
      <form onSubmit={saveSearch}>
      <label>
        <input type='text' name='nameSearch' value={searchName} onChange={changeSearchName}/>
      </label>
      <button>
        Save Search
      </button>
      </form>
    </div>
  )
}

export default FilterForm;