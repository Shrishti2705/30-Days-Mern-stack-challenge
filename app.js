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



6) // Merge two arrays.

const a = [1, 2];
const b = [3, 4];
// Output:[1, 2, 3, 4]

let c=[]
  for(let i=0; i<a.length; i++){
  // c.push(a[i])
    c[i]=a[i]
  }
for(let j=0; j<b.length; j++){
  // c.push(b[j])
  c[a.length+j]=b[j]
}
console.log(c)







// 7. Rotate array to the right by 2 steps.


 const arr = [1, 2, 3, 4, 5];
 // Output: [4, 5, 1, 2, 3]
let newarr=[]
let n=arr.length

for(let i=n-2; i<arr.length; i++){
  newarr.push(arr[i])
}
for(let i=0; i<n-2; i++){
  newarr.push(arr[i])
}
console.log(newarr)






// 8. Check if all elements are even.

 const arr = [2, 4, 6, 8];
// Output:true
let flag=true
for(let i=0; i<arr.length; i++){
  if(arr[i]%2!==0){
    flag=false
    break;
  }

}

  console.log(flag)






// 9. Count occurrences of a value.

const arr = [1, 2, 2, 3, 2];
// Output for value = 2:3
let count=0
for(let i=0; i<arr.length; i++){
 
    if(arr[i]==2){
      count++
    
  }
}
console.log(`2:${count}`)




// 10. Find the index of the second occurrence of a value.

const arr = [5, 1, 5, 2, 5];
// Output for value = 5: 2
let count=0
for(let i=0; i<arr.length; i++){
  if(arr[i]==5){
    count++
   
  }
  if(count==2){
    console.log(`5:${i}`)
    break;
  }
}





// prototype code

function Student(name){
  this.name=name
  console.log(this.name)
}
Student.prototype.study=function(){
  console.log(this.name+" is studing")
}

const student1=new Student("rahul")
student1.study()







// call, apply, bind
const person1={
  name:"shrishti",
  surname:"bansal",
  myfunction: function(hometown, country){
    return this.name + " " + this.surname+" " + hometown +" "+ country
  }
  
}
const person2={
  name:"gaurvi",
  surname:"bansal",
  //   myfunction: function(){
  //   return this.name + " " + this.surname+" "
  // }
}


console.log(person1.myfunction.call(person2,"ganjbasoda","india"))  //call method

console.log(person1.myfunction.apply(person2,["ahmedabad", "india"]))  //apply method


const result=person1.myfunction.bind(person2,"bhopal","india")  //bind method
console.log(result())






// 11. Filter even numbers.

 const arr = [1, 2, 3, 4, 5];
// Output:[2, 4]
let newarr=[]
for(let i=0; i<arr.length; i++){
  if(arr[i]%2==0){
    newarr.push(arr[i])
  }
}
console.log(newarr)




// 12. Sort an array in descending order.

const arr = [3, 1, 4, 2];
// Output:[4, 3, 2, 1]

for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    if(arr[i]<arr[j]){
      let temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp
    }
  }
}
console.log(arr)






// 13. Find common elements in two arrays.


 const a = [1, 2, 3]; const b = [2, 3, 4];
// Output:[2, 3]
let c=[]
for(let i=0; i<a.length; i++){
  for(let j=0; j<b.length; j++){
    if(a[i]==b[j]){
      c.push(a[i])
    }
  }
}
console.log(c)












