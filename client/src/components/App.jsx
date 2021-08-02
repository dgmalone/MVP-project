import React, {useState, useEffect, useContext } from 'react';
import BondList from './BondList.jsx';
import FilterForm from './FilterForm.jsx';
import Percentiles from './Percentiles.jsx';
import helpers from '../Helpers.js';
import { Theme, colors } from './Theme.jsx';
import { CSVLink } from 'react-csv';

function App() {
  const [bonds, setBonds] = useState([])
  const color = useContext(Theme);
  //console.log(colors[color.themeColor], color)
  const themeColor = {
    backgroundColor: colors[color.themeColor],
  }
  const updateBondList = (data) => {
    setBonds(data)
  }
  const [userName, setUserName] = useState('Derek')
  const [inputName, setInputName] = useState('')
  const [averages, setAve] = useState({
    placement_agent_fee: [0, 0, 0, 0],
    financial_advisor_fee: [0, 0, 0, 0],
    bond_counsel_fee: [0, 0, 0, 0],
    disclosure_counsel_fee: [0, 0, 0, 0]
  })

  const updateUserName = () => {
    event.preventDefault()
    setUserName(inputName)
  }
  const handleChange = (event) => {
    event.preventDefault()
    setInputName(event.target.value)
  }
  useEffect ( () => {
    setAve({
      'placement_agent_fee': helpers.findMedian('placement_agent_fee', bonds),
      'financial_advisor_fee': helpers.findMedian('financial_advisor_fee', bonds),
      'bond_counsel_fee': helpers.findMedian('bond_counsel_fee', bonds),
      'disclosure_counsel_fee': helpers.findMedian('disclosure_counsel_fee', bonds)
    })

  }, [bonds])

  return (
    <div style={themeColor}>
      <form onSubmit={updateUserName}>
      <label>
        Enter Username:
        <input type='text' name='userName' value={inputName} onChange={handleChange} required/>
      </label>
      <button>
        Enter
      </button>
      </form>
      <FilterForm setNewBonds={updateBondList} userName={userName}/>
      <Percentiles averages={averages}/>
      <div>
        Median Fees:
        <ul>
          <li>
            Placement Agent Fee: $
            {averages.placement_agent_fee[1]}
          </li>
          <li>
            Financial Advisor Fee: $
            {averages.financial_advisor_fee[1]}
          </li>
          <li>
            Bond Counsel Fee: $
            {averages.bond_counsel_fee[1]}
          </li>
          <li>
            Disclourse Counsel Fee: $
            {averages.disclosure_counsel_fee[1]}
          </li>
        </ul>
      </div>
      <CSVLink data={bonds} >Download Table (CSV)</CSVLink>
      <BondList bonds={bonds}/>
    </div>
  )
}

export default App;