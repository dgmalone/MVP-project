import React, {useState} from 'react';

function Bond(props) {
  // expanded or collappsed
  // format date and money amounts
  return (
    <div className='tempFlex'>
      <p>
         {props.info.cdiac_number}
      </p>
      <p>
        {props.info.issuer}
      </p>
      <p>
        {props.info.issuer_type}
      </p>
      <p>
        {props.info.sale_date.substring(0, 10)}
      </p>
      <p>
        {props.info.sale_type_comp_neg}
      </p>
      <p>
        ${props.info.principal_amount}
      </p>
      <p>
        ${props.info.refunding_amount}
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
      <p>
        <a href={props.info.adtr_report.url}>ADT</a>
        <br/>
        <a href={props.info.issuance_documents.url}>Issuance</a>
      </p>
    </div>
  )

}

export default Bond;