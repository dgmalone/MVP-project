import React, {useState, useEffect} from 'react';
import BondList from './BondList.jsx';
import FilterForm from './FilterForm.jsx';
import helpers from '../helpers.js';

function App() {
  const [bonds, setBonds] = useState([])
  const updateBondList = (data) => {
    setBonds(data)
  }
  const [userName, setUserName] = useState('test')
  const [averages, setAve] = useState({
    placement_agent_fee: 0,
    financial_advisor_fee: 0,
    bond_counsel_fee: 0,
    disclosure_counsel_fee: 0
  })

  useEffect ( () => {
    setAve({
      'placement_agent_fee': helpers.findAverage('placement_agent_fee', bonds),
      'financial_advisor_fee': helpers.findAverage('financial_advisor_fee', bonds),
      'bond_counsel_fee': helpers.findAverage('bond_counsel_fee', bonds),
      'disclosure_counsel_fee': helpers.findAverage('disclosure_counsel_fee', bonds)
    })

  }, [bonds])

  return (
    <div>
      <form >
      <label>
        <input type='text' name='userName'/>
      </label>
      <button>
        Confirm Username
      </button>
      </form>
      <FilterForm setNewBonds={updateBondList} userName={userName}/>
      <div>
        Averages:
        <ul>
          <li>
            Placement Agent Fee:
            {averages.placement_agent_fee}
          </li>
          <li>
            FA Fee:
            {averages.financial_advisor_fee}
          </li>
          <li>
            Bond Counsel Fee:
            {averages.bond_counsel_fee}
          </li>
          <li>
            Disclourse Counsel Fee:
            {averages.disclosure_counsel_fee}
          </li>
        </ul>
      </div>
      <BondList bonds={bonds}/>
    </div>
  )
}

export default App;