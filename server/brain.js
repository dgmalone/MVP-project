const axios = require('axios');
const config = require('./APIconfig.js');

let brain = {}

brain.fetchData = (filter) => {
  // console.log(filter)
  const saleMin = filter.SaleDateStart ? filter.SaleDateStart + 'T00:00:00.000': '1900-01-01T00:00:00.000'
  const saleMax = filter.SaleDateEnd ? filter.SaleDateEnd + 'T00:00:00.000' : '3021-05-21T00:00:00.000'
  const refMin = filter.RefundAmtMin ? filter.RefundAmtMin : 0;
  const refMax = filter.RefundAmtMax ? filter.RefundAmtMax : 1000000000000;
  let params = {
    $where: 'refunding_amount >= ' + refMin + ' AND refunding_amount <= ' + refMax + ' AND sale_date >= "' + saleMin + '" AND sale_date <= "' + saleMax + '"'
  }
  if (filter.PrincAmtMin !== '' || filter.PrincAmtMax !== '') {
    const prnMin = filter.PrincAmtMin ? filter.PrincAmtMin : 0;
    const prnMax = filter.PrincAmtMax ? filter.PrincAmtMax : 1000000000000;
    params.$where+= ' AND principal_amount >= ' + prnMin + ' AND principal_amount <= ' + prnMax
  }
  if (filter.Counsel !== '') {
    params.$where+= ' AND bond_counsel like "%' + filter.Counsel + '%"';
  }
  if (filter.DebtType !== '') {
    params.$where+= ' AND debt_type like "%' + filter.DebtType + '%"';
  }
  if (filter.FA !== '') {
    params.$where+= ' AND financial_advisor like "%' + filter.FA + '%"';
  }
  if (filter.Issuer !== '') {
    params.$where+= ' AND issuer like "%' + filter.Issuer + '%"';
  }
  if (filter.IssuerType !== '') {
    params.$where+= ' AND issuer_type like "%' + filter.IssuerType + '%"';
  }
  if (filter.cdiacNo !== '' && filter.cdiacNo !== undefined) {
    params.$where+= ' AND cdiac_number like "%' + filter.cdiacNo + '%"';
  }
  if (filter.County !== '' && filter.County !== undefined) {
    params.$where+= ' AND issuer_county like "%' + filter.County + '%"';
  }
  if (filter.PrivatePlacement !== '' && filter.PrivatePlacement !== undefined) {
    params.$where+= ' AND private_placement_flag like "%' + filter.PrivatePlacement + '%"';
  }
  let headers = config.auth.headers
  return axios.get(config.url, {params, headers})
}

brain.formatData = (data) => {
  // console.log('test')
  // console.log(data[0])
  data.forEach(bond => {
    for (var key in bond) {
      //console.log(key)
      if (key.includes('_amount') || key.includes('_expenses')) {
        //console.log(key)
        bond[key] = `$${new Intl.NumberFormat().format(bond[key]).toString()}`
      }
      if (key.includes('_date')) {
        bond[key] = bond[key].substring(0, 10)
      }
    }
  })
  return data;
}

module.exports = brain;