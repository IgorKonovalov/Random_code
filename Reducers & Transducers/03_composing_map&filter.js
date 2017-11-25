const doubleTheNumber = number => number * 2
const evenOnly = number => number % 2 === 0

// return reducer instead of result of reduce
const map = xf => (acc, val) => {
  acc.push(xf(val))
  return acc
}

const filter = predicate => (acc, val) => {
  if (predicate(val)) acc.push(val)
  return acc
}
;[1, 2, 3, 4, 5, 6]
  .reduce(filter(evenOnly), [])
  .reduce(map(doubleTheNumber), []) /*?*/

// how to iterate once? hardcoded solution
const filterThatDoubles = predicate => (acc, val) => {
  if (predicate(val)) return map(doubleTheNumber)(acc, val)
  return acc
}
;[1, 2, 3, 4, 5, 6, 7].reduce(filterThatDoubles(evenOnly), []) /*?*/

const transducerFilter = predicate => reducer => (acc, val) => {
  if (predicate(val)) return reducer(acc, val)
  return acc
}

// same thing if we pass reducer to filter
;[1, 2, 3, 4, 5, 6].reduce(
  transducerFilter(evenOnly)(map(doubleTheNumber)),
  []
) /*?*/
