import React, {useState} from 'react';

function FilterForm(props) {
  const [open, setOpen] = useState(true)
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

  const handleChange = (event) => {
    let name = event.target.name
    setValues({...values, [name]: event.target.value})
  }
  // Issuer:			D, F (low)
// Underwriter:		D, F (low)
// Placement Agent:	D, F (low)
// CAB Flag:		D, F (low)
// Guarantor:		D, F (low)
// Discl Counsel:		D, F (low)
  return (
    <div>
      Filter Search:
      <form className='filter-form'>
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

      </form>
    </div>
  )
}

export default FilterForm;