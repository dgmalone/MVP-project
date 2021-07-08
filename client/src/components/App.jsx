import React, {useState, useEffect} from 'react';
import BondList from './BondList.jsx';
import FilterForm from './FilterForm.jsx';
import helpers from '../helpers.js';

function App() {
  const [bonds, setBonds] = useState([
    {
        "cdiac_number": "2021-0888",
        "issuer": "California Housing Finance Agency",
        "issuance_documents": {
            "url": "http://cdiacdocs.sto.ca.gov/Pending.pdf",
            "description": "Pending"
        },
        "sold_status": "PROPOSED",
        "sale_date": "2021-05-21T00:00:00.000",
        "adtr_report": {
            "url": "http://cdiacdocs.sto.ca.gov/ProposedIssue.pdf",
            "description": "Proposed"
        },
        "adtr_filing_status": {
            "url": "http://cdiacdocs.sto.ca.gov/ADTRFilingStatus.pdf",
            "description": "PROPOSED"
        },
        "adtr_reportable_next_fiscal_year": "N/A",
        "debt_policy": "NA",
        "issuer_county": "State of California",
        "mkr_authority": "NO",
        "local_obligation": "NO",
        "issuer_group": "State of California",
        "issuer_type": "State Programs & Departments",
        "project_name": "1322 O Street Apts Issue F-T",
        "principal_amount": "1679921",
        "new_money": "1679921",
        "refunding_amount": "0",
        "social_impact_bond": "None",
        "debt_type": "Conduit revenue bond",
        "purpose": "Multifamily Housing",
        "source_of_repayment": "Private obligor payments",
        "federally_taxable": "Federally Taxable",
        "cab_flag": "N/A",
        "s_and_p_rating": "NOT RATED",
        "moody_rating": "NOT RATED",
        "fitch_rating": "NOT RATED",
        "other_rating": "NOT RATED",
        "sale_type_comp_neg": "Neg",
        "private_placement_flag": "YES",
        "purchaser": "JP Morgan Chase Bank",
        "bond_counsel": "Orrick Herrington & Sutcliffe LLP"
    },
    {
        "cdiac_number": "2021-0853",
        "issuer": "California Housing Finance Agency",
        "issuance_documents": {
            "url": "http://cdiacdocs.sto.ca.gov/Pending.pdf",
            "description": "Pending"
        },
        "sold_status": "PROPOSED",
        "sale_date": "2021-06-07T00:00:00.000",
        "adtr_report": {
            "url": "http://cdiacdocs.sto.ca.gov/ProposedIssue.pdf",
            "description": "Proposed"
        },
        "adtr_filing_status": {
            "url": "http://cdiacdocs.sto.ca.gov/ADTRFilingStatus.pdf",
            "description": "PROPOSED"
        },
        "adtr_reportable_next_fiscal_year": "N/A",
        "debt_policy": "NA",
        "issuer_county": "State of California",
        "mkr_authority": "NO",
        "local_obligation": "NO",
        "issuer_group": "State of California",
        "issuer_type": "State Programs & Departments",
        "project_name": "The Calms at Burgess Point Issue L",
        "principal_amount": "10585186",
        "new_money": "10585186",
        "refunding_amount": "0",
        "social_impact_bond": "None",
        "debt_type": "Conduit revenue note",
        "purpose": "Multifamily Housing",
        "source_of_repayment": "Private obligor payments",
        "cab_flag": "N/A",
        "s_and_p_rating": "NOT RATED",
        "moody_rating": "NOT RATED",
        "fitch_rating": "NOT RATED",
        "other_rating": "NOT RATED",
        "sale_type_comp_neg": "Neg",
        "private_placement_flag": "YES",
        "purchaser": "Bank of the West",
        "financial_advisor": "Kingdom Development Inc",
        "bond_counsel": "Orrick Herrington & Sutcliffe LLP"
    },
    {
        "cdiac_number": "2021-0906",
        "issuer": "California Housing Finance Agency",
        "issuance_documents": {
            "url": "http://cdiacdocs.sto.ca.gov/Pending.pdf",
            "description": "Pending"
        },
        "sold_status": "PROPOSED",
        "sale_date": "2021-06-07T00:00:00.000",
        "adtr_report": {
            "url": "http://cdiacdocs.sto.ca.gov/ProposedIssue.pdf",
            "description": "Proposed"
        },
        "adtr_filing_status": {
            "url": "http://cdiacdocs.sto.ca.gov/ADTRFilingStatus.pdf",
            "description": "PROPOSED"
        },
        "adtr_reportable_next_fiscal_year": "N/A",
        "debt_policy": "NA",
        "issuer_county": "State of California",
        "mkr_authority": "NO",
        "local_obligation": "NO",
        "issuer_group": "State of California",
        "issuer_type": "State Programs & Departments",
        "project_name": "Gateway Family Issue J-2",
        "principal_amount": "25000000",
        "new_money": "25000000",
        "refunding_amount": "0",
        "social_impact_bond": "None",
        "debt_type": "Conduit revenue note",
        "purpose": "Multifamily Housing",
        "source_of_repayment": "Private obligor payments",
        "federally_taxable": "Federally Taxable",
        "cab_flag": "N/A",
        "s_and_p_rating": "NOT RATED",
        "moody_rating": "NOT RATED",
        "fitch_rating": "NOT RATED",
        "other_rating": "NOT RATED",
        "sale_type_comp_neg": "Neg",
        "private_placement_flag": "YES",
        "purchaser": "Bank of America NA",
        "bond_counsel": "Orrick Herrington & Sutcliffe LLP"
    },
    {
        "cdiac_number": "2021-0932",
        "issuer": "California Housing Finance Agency",
        "issuance_documents": {
            "url": "http://cdiacdocs.sto.ca.gov/Pending.pdf",
            "description": "Pending"
        },
        "sold_status": "PROPOSED",
        "sale_date": "2021-06-17T00:00:00.000",
        "adtr_report": {
            "url": "http://cdiacdocs.sto.ca.gov/ProposedIssue.pdf",
            "description": "Proposed"
        },
        "adtr_filing_status": {
            "url": "http://cdiacdocs.sto.ca.gov/ADTRFilingStatus.pdf",
            "description": "PROPOSED"
        },
        "adtr_reportable_next_fiscal_year": "N/A",
        "debt_policy": "NA",
        "issuer_county": "State of California",
        "mkr_authority": "NO",
        "local_obligation": "NO",
        "issuer_group": "State of California",
        "issuer_type": "State Programs & Departments",
        "project_name": "Residency at the Mayer Hollywood Issue K",
        "principal_amount": "29500000",
        "new_money": "29500000",
        "refunding_amount": "0",
        "social_impact_bond": "None",
        "debt_type": "Conduit revenue bond",
        "purpose": "Multifamily Housing",
        "source_of_repayment": "Private obligor payments",
        "cab_flag": "N/A",
        "s_and_p_rating": "NOT RATED",
        "moody_rating": "NOT RATED",
        "fitch_rating": "NOT RATED",
        "other_rating": "NOT RATED",
        "sale_type_comp_neg": "Neg",
        "private_placement_flag": "YES",
        "purchaser": "America First Multifamily Investors LP",
        "bond_counsel": "Orrick Herrington & Sutcliffe LLP"
    },
    {
        "cdiac_number": "2021-0933",
        "issuer": "California Housing Finance Agency",
        "issuance_documents": {
            "url": "http://cdiacdocs.sto.ca.gov/Pending.pdf",
            "description": "Pending"
        },
        "sold_status": "PROPOSED",
        "sale_date": "2021-06-17T00:00:00.000",
        "adtr_report": {
            "url": "http://cdiacdocs.sto.ca.gov/ProposedIssue.pdf",
            "description": "Proposed"
        },
        "adtr_filing_status": {
            "url": "http://cdiacdocs.sto.ca.gov/ADTRFilingStatus.pdf",
            "description": "PROPOSED"
        },
        "adtr_reportable_next_fiscal_year": "N/A",
        "debt_policy": "NA",
        "issuer_county": "State of California",
        "mkr_authority": "NO",
        "local_obligation": "NO",
        "issuer_group": "State of California",
        "issuer_type": "State Programs & Departments",
        "project_name": "Residency at the Mayer Hollywood Issue K-T",
        "principal_amount": "12000000",
        "new_money": "12000000",
        "refunding_amount": "0",
        "social_impact_bond": "None",
        "debt_type": "Conduit revenue bond",
        "purpose": "Multifamily Housing",
        "source_of_repayment": "Private obligor payments",
        "federally_taxable": "Federally Taxable",
        "cab_flag": "N/A",
        "s_and_p_rating": "NOT RATED",
        "moody_rating": "NOT RATED",
        "fitch_rating": "NOT RATED",
        "other_rating": "NOT RATED",
        "sale_type_comp_neg": "Neg",
        "private_placement_flag": "YES",
        "purchaser": "America First Multifamily Investors LP",
        "bond_counsel": "Orrick Herrington & Sutcliffe LLP"
    },
    {
        "cdiac_number": "2021-0905",
        "issuer": "California Housing Finance Agency",
        "issuance_documents": {
            "url": "http://cdiacdocs.sto.ca.gov/Pending.pdf",
            "description": "Pending"
        },
        "sold_status": "PROPOSED",
        "sale_date": "2021-06-07T00:00:00.000",
        "adtr_report": {
            "url": "http://cdiacdocs.sto.ca.gov/ProposedIssue.pdf",
            "description": "Proposed"
        },
        "adtr_filing_status": {
            "url": "http://cdiacdocs.sto.ca.gov/ADTRFilingStatus.pdf",
            "description": "PROPOSED"
        },
        "adtr_reportable_next_fiscal_year": "N/A",
        "debt_policy": "NA",
        "issuer_county": "State of California",
        "mkr_authority": "NO",
        "local_obligation": "NO",
        "issuer_group": "State of California",
        "issuer_type": "State Programs & Departments",
        "project_name": "Gateway Family Issue J-1",
        "principal_amount": "40000000",
        "new_money": "40000000",
        "refunding_amount": "0",
        "social_impact_bond": "None",
        "debt_type": "Conduit revenue note",
        "purpose": "Multifamily Housing",
        "source_of_repayment": "Private obligor payments",
        "cab_flag": "N/A",
        "s_and_p_rating": "NOT RATED",
        "moody_rating": "NOT RATED",
        "fitch_rating": "NOT RATED",
        "other_rating": "NOT RATED",
        "sale_type_comp_neg": "Neg",
        "private_placement_flag": "YES",
        "purchaser": "Bank of America NA",
        "bond_counsel": "Orrick Herrington & Sutcliffe LLP"
    }
])
  const updateBondList = (data) => {
    console.log(data)
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
    // abstract this to call another function that takes the name then does this same thing
    let plcFeeSum = 0;
    let count = 0;
    bonds.forEach(bond => {
      if (bond.placement_agent_fee) {
        console.log(bond.placement_agent_fee)
        plcFeeSum += parseInt(bond.placement_agent_fee);
        count++
      }
    })
    console.log( plcFeeSum, count)
    setAve({...averages, 'placement_agent_fee': plcFeeSum / count})

  }, [bonds])

useEffect ( () => {
  let plcFeeSum = 0;
  let count = 0;
  bonds.forEach(bond => {
    if (bond.financial_advisor_fee) {
      console.log(bond.financial_advisor_fee)
      plcFeeSum += parseInt(bond.financial_advisor_fee);
      count++
    }
  })
  //console.log( plcFeeSum, count)
  setAve({
    'placement_agent_fee': helpers.findAverage('financial_advisor_fee', bonds), 'financial_advisor_fee': helpers.findAverage('financial_advisor_fee', bonds),
    'bond_counsel_fee': helpers.findAverage('bond_counsel_fee', bonds),
    'disclosure_counsel_fee': helpers.findAverage('disclosure_counsel_fee', bonds)
  })

}, [bonds])

  return (
    <div>TestApp
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
      <FilterForm setNewBonds={updateBondList} userName={userName}/>
      <BondList bonds={bonds}/>
    </div>
  )
}

export default App;