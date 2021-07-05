import React, {useState} from 'react';
import Bond from './Bond.jsx';
import Columns from './Columns.jsx';

function BondList(props) {

  return (
    <div>
      Test
      <Columns />
      {props.bonds.map( (bond, index)=> {
      return <Bond info={bond} key={index}/>
    })}
    </div>
  )
}

export default BondList;