import axios from 'axios';

let serverCalls = {};

let serverURL = 'http://localhost:3000';

serverCalls.getData = (filters) => {

  let params = {
    filters: filters
  };

  return axios.get(serverURL + '/Bonds', { params })
    .then(results => {;
      return results.data;
    })
    .catch(err => { return console.log('test', err); });

}
serverCalls.saveSearch = (userName, searchName, filters) => {
  let data = {
    filters: filters,
    userName: userName,
    searchName: searchName
  };
  //console.log('dat', data)
  return axios.post(serverURL + '/Bonds', data)
    .then(results => {
      return results.data;
    })
    .catch(err => { return console.log('test', err); });
}

serverCalls.getSearches = (userName) => {
  //console.log(userName)
  let params = { userName }
  return axios.get(serverURL + '/Favorites', {params})
    .then(results => {
      //console.log(results.data);
      return results.data;
    })
    .catch(err => { return console.log('test', err); });
}

serverCalls.deleteSearch = (id) => {
  return axios.put(serverURL + '/Favorites/Delete', {id})
    .then(results => {
      console.log(results.data);
      return results.data;
    })
    .catch(err => {
      console.log(err)
      return err; });
}

serverCalls.updateSearch = (id, newName) => {
  return axios.put(serverURL + '/Favorites/UpdateName', {id, newName})
    .then(results => {
      console.log(results.data);
      return results.data;
    })
    .catch(err => {
      console.log(err)
      return err; });
}

serverCalls.updateSearchFilters = (id, filters) => {
  return axios.put(serverURL + '/Favorites/UpdateFilter', {id, filters})
    .then(results => {
      console.log(results.data);
      return results.data;
    })
    .catch(err => {
      console.log(err)
      return err; });
}

export default serverCalls