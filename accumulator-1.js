const arr = ['1', '2', '3', '4', '6']
let accum = 0
for(let i = 0; i < arr.length;i++){
  accum += arr[i]
}
console.log(accum)