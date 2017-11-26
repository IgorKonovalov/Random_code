const doubleTheNumber = number => number * 2
const evenOnly = number => number % 2 === 0
const notTwo = number => number !== 2

const map = xf => reducer => (acc, val) => {
  return reducer(acc, xf(val))
}

const filter = predicate => reducer => (acc, val) => {
  if (predicate(val)) return reducer(acc, val)
  return acc
}

const pushReducer = (acc, val) => {
  acc.push(val)
  return acc
}

const compose = (...functions) =>
  functions.reduce(
    (accumulation, fn) => (...args) => accumulation(fn(...args)),
    x => x
  )

const isEvenFilter = filter(evenOnly)
const notTwoFilter = filter(notTwo)
const doubleTheMap = map(doubleTheNumber)

const transduce = (xf, reducer, seed, collection) => {
  // reduce works with arrays:
  // return collection.reduce(xf(reducer), seed)
  // we can use with any iterable like:
  const transformReducer = xf(reducer)
  let accumulation = seed
  for (const value of collection) {
    accumulation = transformReducer(accumulation, value)
  }
  return accumulation
}

transduce(
  compose(isEvenFilter, notTwoFilter, doubleTheMap),
  pushReducer,
  [],
  [1, 2, 3, 4, 5, 6]
) /*?*/

// lets test it on other data structures: 

// string 

const toUpper = str => str.toUpperCase()
const isVow = char => ['a', 'o', 'e', 'i', 'y', 'u'].includes(char.toLowerCase())
toUpper('cmon') /*?*/

transduce(
  compose(map(toUpper), filter(isVow)),
  (str, char) => str + char,
  '',
  'konovalov'
) /*?*/
