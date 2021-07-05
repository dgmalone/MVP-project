import React, {useState} from 'react';

function Bond(props) {
  // expanded or collappsed
  return (
    <div className='tempFlex'>
      <p>
         {props.info.cdiac_number}
      </p>
      <p>
        {props.info.issuer}
      </p>
      <p>
        {props.info.sale_date}
      </p>
      <p>
        {props.info.issuer_type}
      </p>
      <p>
        {props.info.principal_amount}
      </p>
      <p>
        {props.info.refunding_amount}
      </p>
      <p>
        {props.info.debt_type}
      </p>
      <p>
        {props.info.financial_advisor}
      </p>
      <p>
        {props.info.bond_counsel}
      </p>
    </div>
  )

}

export default Bond;