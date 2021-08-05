import React, {useState, useEffect} from 'react';
import helpers from '../Helpers.js';

function Percentiles(props) {
  let percentiles = helpers.formatNum(props.averages)
  return (
    <div>
    Median Fees:
    <div>
    <table>
    <thead>
        <tr>
            <th>Fee</th>
            <th>25%</th>
            <th>Median</th>
            <th>75%</th>
            <th>Reported</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Placement Agent Fee</td>
            <td>${percentiles.placement_agent_fee[0]}</td>
            <td>${percentiles.placement_agent_fee[1]}</td>
            <td>${percentiles.placement_agent_fee[2]}</td>
            <td>{percentiles.placement_agent_fee[3]}</td>
        </tr>
        <tr>
            <td>Financial Advisor Fee</td>
            <td>${percentiles.financial_advisor_fee[0]}</td>
            <td>${percentiles.financial_advisor_fee[1]}</td>
            <td>${percentiles.financial_advisor_fee[2]}</td>
            <td>{percentiles.financial_advisor_fee[3]}</td>
        </tr>
        <tr>
            <td>Bond Counsel Fee</td>
            <td>${percentiles.bond_counsel_fee[0]}</td>
            <td>${percentiles.bond_counsel_fee[1]}</td>
            <td>${percentiles.bond_counsel_fee[2]}</td>
            <td>{percentiles.bond_counsel_fee[3]}</td>
        </tr>
        <tr>
            <td>Disclosure Counsel Fee</td>
            <td>${percentiles.disclosure_counsel_fee[0]}</td>
            <td>${percentiles.disclosure_counsel_fee[1]}</td>
            <td>${percentiles.disclosure_counsel_fee[2]}</td>
            <td>{percentiles.disclosure_counsel_fee[3]}</td>
        </tr>
    </tbody>
</table>
    </div>
  </div>
  )

}

export default Percentiles;