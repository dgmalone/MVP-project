import React, {useState} from 'react';

function Columns(props) {
  // expanded or collappsed
  return (
    <div className='tempFlex'>
      <p>
        Number:
      </p>
      <p>
        Issuer:
      </p>
      <p>
        Sale Date:
      </p>
      <p>
        Issuer Type:
      </p>
      <p>
        Principal Amount:
      </p>
      <p>
        Refunding Amt:
      </p>
      <p>
        Debt Type:
      </p>
      <p>
        Financial Advisor:
      </p>
      <p>
        Bond Counsel:
      </p>
    </div>
  )

}

export default Columns;