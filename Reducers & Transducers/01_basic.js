// simple reducers
const addReducer = (acc, val) => val + acc
;[1, 2, 3, 4, 5].reduce(addReducer, 0)

const objReducer = (acc, val) => ({
  ...val,
  ...acc
})

// simple transformers

const toUpper = str => str.toUpperCase()

const shout = str => `${str}!!`

const scream = str => toUpper(shout(str)) // compose them

