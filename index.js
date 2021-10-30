// popShift should use pop() and shift() to
// remove the first and last elements of the argument array 
// and assign the removed elements to their corresponding variables, so that the returned array contains their values.


function popShift(arr) {
  console.log(arr)
  let popped = arr.pop()
  console.log(`popped:${popped}`)
  let shifted = arr.shift()
  console.log(`shifted:${shifted}`)
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));