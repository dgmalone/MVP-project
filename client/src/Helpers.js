
let helpers = {};

helpers.findAverage = (numName, bonds) => {
  let sum = 0;
  let count = 0;
  bonds.forEach(bond => {
    if (bond[numName]) {
      //console.log(bond[numName])
      sum += parseInt(bond[numName]);
      count++
    }
  })
  if (count === 0) {
    return 0;
  }
  return Math.round((sum / count) * 100) / 100
}


export default helpers;