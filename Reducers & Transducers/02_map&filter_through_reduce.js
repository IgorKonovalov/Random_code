const doubleTheNumber = number => number * 2
const evenOnly = number => number % 2 === 0
;[1, 2, 3, 4].map(doubleTheNumber) /*?*/
;[1, 2, 3, 4, 5].filter(evenOnly) /*?*/

// map through reduce

const map = (xf, arr) =>
  arr.reduce((acc, val) => {
    acc.push(xf(val))
    return acc
  }, [])

map(doubleTheNumber, [1, 2, 3, 4, 5]) /*?*/

// filter through reduce

const filter = (predicate, arr) =>
  arr.reduce((acc, val) => {
    if (predicate(val)) acc.push(val)
    return acc
  }, [])

filter(evenOnly, [1, 2, 3, 4, 5]) /*?*/
