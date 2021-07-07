import axios from 'axios';

let serverCalls = {};

let serverURL = 'http://localhost:3000';

serverCalls.getData = (filters) => {

  // let data = JSON.stringify(filters);
  // console.log(data)
  // axios({
  //   url: 'http://localhost:3000/Bonds',
  //   method: "get",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data: 'data'
  // })
  //  .then(results => {return results.data})
  //  .catch(err => {return err})
  let params = {
    filters: filters
  };

  return axios.get(serverURL + '/Bonds', { params })
    .then(results => {
      //console.log(results.data.results);
      return results.data;
    })
    .catch(err => { return console.log('test', err); });

}


export default serverCalls