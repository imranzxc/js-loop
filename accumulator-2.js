const arr = ['1', '2', '3', '4', '6', '-2', '-3']
let result = 0
let i = 0
while(i < arr.length){
  i++;
  if(arr[i] > 0){
    result += arr[i]
  }
  console.log(result)
}