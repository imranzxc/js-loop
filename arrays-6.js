const arr = ['1', '2', '3', '4', '6']
for(let i = 0; i < arr.length;i++){
  if(arr[i] % 2 ===0){
    console.log(arr[i])
  }
}
let i = 0
while(i < arr.length){
  i++
  if(arr[i] % 2 !== 0){
    console.log(arr[i])
  }
}