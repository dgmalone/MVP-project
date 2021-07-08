import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// could make more generic

const modal_styles = {
  top: '25%',
  position: 'fixed',
  left: '25%',
  padding: '50px',
  backgroundColor: 'white',
  zIndex: 10,
};

const form_style = {
  maxHeight: 'calc(100vh - 300px)',
  overflowY: 'auto',
  overflowX: 'hidden'
};

const overlay_styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 10
};

function Modal (props) {
  const [searchFilt, setSrchFilt] = useState({
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
    setSrchFilt({...searchFilt, [name]: event.target.value})
  }
  useEffect( () => {
    setSrchFilt({...searchFilt, ...props.filters})
  }, [open])

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdateFilter(props.id, searchFilt)
      .then( () => {
        props.closePopup()
      })
  }
  if (!props.open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>
      <div style={overlay_styles}/>
      <div style={modal_styles}>
        <button onClick={props.closePopup}>Exit</button>
        <div style={form_style}>
        <form className='filter-form' onSubmit={handleSubmit}>
        <label>
          Financial Advisor: <input type='text' name='FA' value={searchFilt.FA} onChange={handleChange}/>
        </label>
        <label>
          Bond Counsel:
          <input type='text' name='Counsel' value={searchFilt.Counsel} onChange={handleChange}/>
        </label>
        <label>
          Sale Date Range: <input type='date' name='SaleDateStart' value={searchFilt.SaleDateStart} onChange={handleChange}/> to <input type='date' name='SaleDateEnd' value={searchFilt.SaleDateEnd} onChange={handleChange}/>
        </label>
        <label>
           Issuer Type: <input type='text' name='IssuerType' value={searchFilt.IssuerType} onChange={handleChange}/>
        </label>
        <label>
           Sale Type: <input type='text' name='SaleType' value={searchFilt.SaleType} onChange={handleChange}/>
        </label>
        <label>
           Refund Amount Range: <input type='number' name='RefundAmtMin' value={searchFilt.RefundAmtMin} onChange={handleChange}/> to <input type='number' name='RefundAmtMax' value={searchFilt.RefundAmtMax} onChange={handleChange}/>
        </label>
        <label>
           Debt Type: <input type='text' name='DebtType' value={searchFilt.DebtType} onChange={handleChange}/>
        </label >
        <div>
          <button>Update Search</button>
        </div>
      </form>
        </div>
      </div>
      {/* <button onClick={onClose}>Submit</button> */}
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;