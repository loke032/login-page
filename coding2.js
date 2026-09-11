

function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
} 
function sum(arr) {
  return arr.reduce((total, current) => {
    return total + current
  }, 0)
}
function multiply(arr) {
  return arr.reduce((total, current) => {
    return total * current
  }, 1)
}
function power(a, b) {
  return a ** b
}
function factorial(a) {
  arr = []
  
  for (let i=1; i <= a; i++) {
    arr.push(i)
  }
  
  return arr.reduce((total, current) => total * current)
}
console.log(add(1, 2))
console.log(subtract(2, 1))
console.log(sum([1, 2, 3]))
console.log(multiply([1, 2, 3, 4]))
console.log(power(2, 4))
console.log(factorial(4))

function fibonacci(times) {
  if (times <= 0) {
    return "OOPS"
  }
  let arr = []
  for (let i=1; i <= times; i++) {
    
    if (i===1) {
      arr.push(1)
    } else if (i===2) {
      arr.push(1)
    } else {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1])
    }

  }
  return arr[arr.length - 1]
}
console.log(fibonacci(100))