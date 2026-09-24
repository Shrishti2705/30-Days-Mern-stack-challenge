 1)// Reverse an array.

 const arr = [1, 2, 3, 4, 5];
// Output: [5, 4, 3, 2, 1]

for(let i=0; i<arr.length/2; i++){
 let temp=arr[i]
  arr[i]=arr[arr.length-i-1]
  arr[arr.length-i-1]=temp
}
console.log(arr)








2)// Flatten a nested array.

 const arr = [1, [2, 3], [4, [5]]];
// Output: [1, 2, 3, 4, 5]
let newarr=[]
const flattern=(arr)=>{
  arr.forEach((element)=>{
    if(Array.isArray(element)){
      flattern(element)
    }else{
      newarr.push(element)
    }
  })
}

flattern(arr)
console.log(newarr)






3)// 3. Remove duplicate elements from an array and add in newarray.

const arr = [1, 2, 2, 3, 4, 4, 5];
// Output:[1, 2, 3, 4, 5]
let newarr=[]

for(let i=0; i<arr.length; i++){
  let flag=false;
  for(let j=0; j<newarr.length; j++){
    if(arr[i]==newarr[j]){
      flag=true;
      break;
    }
  }
  if(!flag){
    newarr.push(arr[i])
  }
}

console.log(newarr)


// alternate approch
// 3. Remove duplicate elements from an array.

const arr = [1, 2, 2, 3, 4, 4, 5];
// Output:[1, 2, 3, 4, 5]
for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    if(arr[i]==arr[j]){
      for(let k=j; k<arr.length-1; k++){
        arr[k]=arr[k+1]
      }
       arr.length--;
      j--
    }
  }
}
console.log(arr)






4)
// 4. Find the maximum value in an array.


 const arr = [3, 5, 7, 2, 8];
// Output:8
let max=0
  for(let i=0; i<arr.length; i++){
  if(max<arr[i])
    max=arr[i]
  }
console.log(max)





5)// 5. Sum all elements in an array.

const arr = [1, 2, 3, 4];
// Output:10
let sum=0
for(let i=0; i<arr.length; i++){
  sum+=arr[i]
}
console.log(sum)



