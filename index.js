// Your code here
function mapToNegativize(array) {
  const newArray = []
  array.forEach(number => newArray.push(number * -1))
  return newArray
}

function mapToNoChange(array) {
  const newArray = []
  array.forEach(number => newArray.push(number))
  return newArray
}

function mapToDouble(array) {
  const newArray = []
  array.forEach(number => newArray.push(number * 2))
  return newArray
}

function mapToSquare(array) {
  const newArray = []
  array.forEach(number => newArray.push(number ** 2))
  return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint
  sourceArray.forEach(number => total += number)
  return total
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.every(value => value)
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.some(value => value)
}