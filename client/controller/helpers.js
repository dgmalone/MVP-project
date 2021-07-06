import axios from 'axios';

let serverCalls = {};

serverCalls.saveSearch = (name, filters) => {
  return axios.post('/Bonds', {name, filters})
    .then(results => {
      return results.data;
    })
    .catch(err => {
      return err;
    })
}

serverCalls.getBonds = (filters) => {
  return axios.get('/Bonds', {filters})
  then(results => {
    return results.data;
  })
  .catch(err => {
    return err;
  })
}

export default serverCalls