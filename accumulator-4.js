const arr = ['imran', 'askhab', 'deni', 'isra', 'bosko']
let result = []
for(let i = 0; i < arr.length; i++){
  if(arr[i][0] === 'a'){
    result.push(arr[i])
  }
  console.log(result)
}