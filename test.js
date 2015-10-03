function flatten(nestedArray, initialValue) {
  return nestedArray.reduce(function(a, b) {
    return a.concat(b)
  }, initialValue)
}

x = [[1,2,],[3,4]]

x = flatten(x,[])
console.log(x)


