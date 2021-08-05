const axios = require('axios');
const config = require('./APIconfig.js');

let APIcalls = {}

APIcalls.fetchData = (filter) => {
  const saleMin = filter.SaleDateStart ? filter.SaleDateStart + 'T00:00:00.000': '1900-01-01T00:00:00.000'
  const saleMax = filter.SaleDateEnd ? filter.SaleDateEnd + 'T00:00:00.000' : '3021-05-21T00:00:00.000'
  const refMin = filter.RefundAmtMin ? filter.RefundAmtMin : 0;
  const refMax = filter.RefundAmtMax ? filter.RefundAmtMax : 1000000000000
  let params = {
    $where: 'refunding_amount >= ' + refMin + ' AND refunding_amount <= ' + refMax + ' AND sale_date >= "' + saleMin + '" AND sale_date <= "' + saleMax + '"'
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

  let headers = config.auth.headers
  return axios.get(config.url, {params, headers})
}

module.exports = APIcalls;