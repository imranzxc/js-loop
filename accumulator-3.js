const arr = ['java', 'php', 'js', '', 'html', 'css']
let result = []
for(let i = 0; i < arr.length; i++){
  if(arr[i].length > 3){
    result.push(arr[i])
  }
  console.log(result)
}