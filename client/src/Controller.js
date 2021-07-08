import axios from 'axios';

let serverCalls = {};

let serverURL = 'http://localhost:3000';

serverCalls.getData = (filters) => {

  let params = {
    filters: filters
  };

  return axios.get(serverURL + '/Bonds', { params })
    .then(results => {
      console.log(results.data);
      return results.data;
    })
    .catch(err => { return console.log('test', err); });

}
serverCalls.saveSearch = (userName, searchName, filters) => {
  let data = {
    filters: filters,
    userName: 'test',
    searchName: searchName
  };
  console.log('dat', data)
  return axios.post(serverURL + '/Bonds', data)
    .then(results => {
      return results.data;
    })
    .catch(err => { return console.log('test', err); });
}

serverCalls.getSearches = (userName) => {
  console.log(userName)
  let params = { userName }
  return axios.get(serverURL + '/Favorites', {params})
    .then(results => {
      console.log(results.data);
      return results.data;
    })
    .catch(err => { return console.log('test', err); });
}

export default serverCalls