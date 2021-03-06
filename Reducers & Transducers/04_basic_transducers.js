const doubleTheNumber = number => number * 2
const evenOnly = number => number % 2 === 0

const map = xf => reducer => (acc, val) => {
  return reducer(acc, xf(val))
}

const filter = predicate => reducer => (acc, val) => {
  if (predicate(val)) return reducer(acc, val)
  return acc
}

// initial reducer
const pushReducer = (acc, val) => {
  acc.push(val)
  return acc
}

// combinator
const compose = (...functions) =>
  functions.reduce(
    (accumulation, fn) => (...args) => accumulation(fn(...args)),
    x => x
  )

const isEvenFilter = filter(evenOnly)
const notTwoFilter = filter(val => val !== 2)
const doubleTheMap = map(doubleTheNumber)

;[1, 2, 3, 4, 5, 6].reduce(
  notTwoFilter(isEvenFilter(doubleTheMap(pushReducer))),
  []
) /*?*/

const numbersMagic = compose(notTwoFilter, isEvenFilter, doubleTheMap)
;[1, 2, 3, 4, 5, 6].reduce(numbersMagic(pushReducer), []) /*?*/
