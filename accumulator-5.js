const arr = ['1', '2', '3', '4', '6', '-2', '-3']
let accumulatorEven = []
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 0){
    accumulatorEven.push(arr[i])
  }
  console.log(accumulatorEven)
}