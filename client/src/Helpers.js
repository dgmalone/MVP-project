
let helpers = {};

helpers.findAverage = (numName, bonds) => {
  let sum = 0;
  let count = 0;
  bonds.forEach(bond => {
    if (bond[numName]) {
      sum += parseInt(bond[numName]);
      count++
    }
  })
  if (count === 0) {
    return 0;
  }
  return Math.round((sum / count) * 100) / 100
}

helpers.findMedian = (numName, bonds) => {
  let list = [];
  let count = 0;
  bonds.forEach(bond => {
    if (bond[numName] && bond[numName] != '0') {
      list.push(parseInt(bond[numName]));
      count++
    }
  })
  let sortArr = list.sort((a, b) => {
    return a - b
  })
  let mid = Math.floor(count / 2)
  let median = sortArr.length % 2 !== 0 ? sortArr[mid] : (sortArr[mid - 1] + sortArr[mid]) / 2;
  let q1 = sortArr(Math.ceil(count / 4))
  let q3 = sortArr(Math.ceil(3 * count / 4))
  if (count === 0) {
    return 0;
  } else {
    return median
  }
}

export default helpers;