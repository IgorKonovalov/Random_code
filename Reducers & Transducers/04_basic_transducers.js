const doubleTheNumber = number => number * 2
const evenOnly = number => number % 2 === 0

const map = xf => reducer => (acc, val) => {
  reducer(acc, xf(val))
  return acc
}
const pushReducer = (acc, val) => {
  acc.push(val)
  return acc
}

const filter = predicate => reducer => (acc, val) => {
  if (predicate(val)) return reducer(acc, val)
  return acc
}

const isEvenFilter = filter(evenOnly)
const notTwoFilter = filter(val => val !== 2)
const doubleTheMap = map(doubleTheNumber)

;[1, 2, 3, 4, 5, 6].reduce(doubleTheMap(notTwoFilter(pushReducer)), []) /*?*/
