const axios = require('axios');
const config = require('./APIconfig.js');

let APIcalls = {}

APIcalls.fetchData = (filter) => {
  console.log(config)
  // convert to proper format
  const saleMin = filter.SaleDateStart ? filter.SaleDateStart + 'T00:00:00.000': '1900-01-01T00:00:00.000'
  const saleMax = filter.SaleDateEnd ? filter.SaleDateEnd + 'T00:00:00.000' : '3021-05-21T00:00:00.000'
  const refMin = filter.RefundAmtMin ? filter.RefundAmtMin : 0;
  const refMax = filter.RefundAmtMax ? filter.RefundAmtMax : 1000000000000
  let params = {
    bond_consel: filter.Counsel,
    debt_type: filter.DebtType,
    financial_advisor: filter.FA,
    issuer: filter.Issuer,
    issuer_type: filter.IssuerType,
    $where: 'refunding_amount >= ' + refMin + ' AND refunding_amount <= ' + refMax + ' AND sale_date >= ' + saleMax + ' AND sale_date <= ' + saleMax
  }
  let headers = config.auth.headers
  //console.log(params)
  console.log({params, headers})
  //axios.get(config.url, {params, headers})
}

module.exports = APIcalls;