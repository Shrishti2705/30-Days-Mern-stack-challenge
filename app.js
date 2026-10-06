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





 // Find unique elements from two arrays.

const a = [1, 2, 3]; const b = [3, 4, 5];
// Output:[1, 2, 4, 5]

let newarr=[]
for(let i=0; i<a.length; i++){
  let found =false
  for(let j=0; j<b.length; j++){
    if(a[i]==b[j]){
      found=true;
      break;
     
    }
  }
  if(!found){
    newarr.push(a[i])
  }
}
for(let i=0; i<b.length; i++){
  let found=false
  for(let j=0; j<a.length; j++){
    if(b[i]==a[j]){
      found=true
     break;
    }
  }
  if(!found){
    newarr.push(b[i])
  }
}
console.log(newarr)




// 15. Remove falsy values from an array.

 const arr = [0, "a", "", false, 5];
let newarr=[]
// Output:  ["a", 5]
for(let i=0; i<arr.length; i++){
  if(arr[i]){
    newarr.push(arr[i])
  }
}
console.log(newarr)



// 16. Chunk an array into smaller arrays.

const arr = [1, 2, 3, 4, 5];
let newarr=[]
let size=2
// chunk size = 2 Output:[[1, 2], [3, 4], [5]]
for(let i=0; i<arr.length; i+=size){
  let chunk=[]
  for(let j=i; j<i+size && j<arr.length; j++){
    chunk.push(arr[j])
  }
  newarr.push(chunk)
}
console.log(newarr)




// 17. Find the longest string in an array.

const arr = ["a", "abcd", "abc"];
// Output:"abcd"
let str=""
for(let i=0; i<arr.length; i++){
  if(str.length<arr[i].length)
  {
    str=arr[i]
  }
}
console.log(str)






// 18. Convert array to object using index as key.

const arr = ['a', 'b'];
let obj={}
// Output:{0: 'a', 1: 'b'}
for(i=0; i<arr.length; i++){
  obj[i]=arr[i]
}
console.log(obj)




// 19. Find second largest number.

const arr = [5, 3, 9, 7,8];
// Output: 7
let largest=0
let secondlargest=0

for(let i=0;i<arr.length; i++){
  if(largest<arr[i]){
    largest=arr[i]
  }
}
for(let i=0; i<arr.length; i++){
  if(secondlargest<arr[i] && largest!==arr[i]){
    secondlargest=arr[i]
  }
}
console.log(secondlargest)






// 20. Find missing number from a sequence.


const arr = [1, 2, 3, 5];
// Output:3
let n=arr.length+1
let expected=(n*(n+1))/2
let actual=0
for(let i=0; i<arr.length; i++){
  actual+=arr[i]
}
console.log(expected-actual)
  





// callback concept

function calculation(a,b ,callback){
  console.log("hello")
  callback(a,b)
}
function addition(a,b){
  console.log(a+b)
}
function subtraction(a,b){
  console.log(a-b)
}

calculation(1,2 , addition)
calculation(1,2 , subtraction)





// 1. Callback + setTimeout

// Requirement:
// Ek fetchData function banao jo 2 seconds baad callback ko "Data fetched successfully" pass kare.


function fetchData(callback){
  setTimeout(()=>{
    callback("data fetch successfully")
  },2000)
}
function resultData(data){
  console.log(data)
}
fetchData(resultData)








// 2. Promise

// Ek function getUser() banao jo Promise return kare.

// 2 sec baad resolve ho
// value: "User data"

// Then .then() se print karo aur .catch() bhi lagao.




function getUser(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve("user data")
    
    },2000)
  })
}

getUser().
  then((result)=>{
    console.log(result)
  })
.catch((error)=>{
  console.log(error)
})







// 3. Async/Await

// Ek getProducts() function banao jo Promise return kare.

// async/await use karke:

// Products loaded

// print karo.

// Saath mein try/catch use karo.


function getProducts (){
     return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve("product loaded")
    },2000)
  })
}

async function showproducts(){
     try{
     const result=  await getProducts()
       console.log(result)
     }catch(error){
         console.log(error)
     }
}
showproducts()








// promise.all

let p1=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("user")
  },1000)
})
let p2=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("post")
  },3000)
})
let p3=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("likes")
  },2000)
})

Promise.all([p1,p2,p3]).
  then((user)=>{
    console.log(user)
  }).catch((error)=>{
    console.log(error)
  })





// promise.race

let p1=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject("user")
  },1000)
})
let p2=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("post")
  },3000)
})
let p3=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("likes")
  },2000)
})

Promise.race([p1,p2,p3]).
  then((user)=>{
    console.log(user)
  }).catch((error)=>{
    console.log(error)
  })







// 21. Remove first and last element.

const arr = [1, 2, 3, 4];
// Output:[2, 3]
arr.pop()
 arr.shift()

console.log(arr)






// 22. Find intersection without duplicates.

const a = [1, 2, 2, 3];
const b = [2, 2, 3];
// Output: [2, 3]
let newarr=[]
for(let i=0; i<a.length; i++){
  let duplicate=false
  for(let j=0; j<b.length; j++){
    if(a[i]==b[j]){
      duplicate=true
      break;
    }
  }
  if(duplicate && !newarr.includes(a[i]) ){
    newarr.push(a[i])
  }
}
console.log(newarr)








// 23. Replace every element with its square.

const arr = [1, 2, 3];
// Output:[1, 4, 9]
let newarr=[]
for(let i=0; i<arr.length; i++){
  newarr.push(arr[i]*arr[i])
}
console.log(newarr)






// 24. Find average of elements.

const arr = [2, 4, 6, 8];
// Output:5

let average=0
for(let i=0; i<arr.length; i++){
  average+=arr[i]/arr.length
}
console.log(average)







// 25. Convert array of key-value pairs to object.

const arr = [['a', 1], ['b', 2]];
// Output:{a: 1, b: 2}
let obj=Object.fromEntries(arr)
console.log(obj)





// 26. Create an array with n copies of a value.

const val = 'x', n = 3;
// Output: ['x', 'x', 'x']
let newarr=[]
for(let i=0; i<3; i++){
  newarr.push("x")
}
console.log(newarr)






// 27. Replace a value in array.

const arr = [1, 2, 3, 2];
// Replace 2 with 9
// Output:[1, 9, 3, 9]
for(let i=0; i<arr.length; i++){
  if(arr[i]==2){
    arr[i]=9
  }
}
console.log(arr)





// 28. Shuffle an array randomly.

const arr = [1, 2, 3];
// Output (random):
// [2, 3, 1]

for(let i=arr.length-1; i>0; i--){
  let j=Math.floor(Math.random()*(i+1))
  let temp=arr[i]
  arr[i]=arr[j]
  arr[j]=temp
}
console.log(arr)





// 29. Find frequency of each element.


const arr = [1, 2, 1, 3, 2];
// Output:
// {1: 2, 2: 2, 3: 1}
let freq={}
for(let i=0; i<arr.length; i++){
  let count=0
  for(let j=0; j<arr.length; j++){
    if(arr[i]==arr[j]){
      count++
    }
  }
  freq[arr[i]]=count
}
console.log(freq)





// 30. Get unique values from an array of objects by key.

// Input:
const arr = [{id:1}, {id:2}, {id:1}];
// Output: [{id:1}, {id:2}]
let newarr=[]
for(let i=0; i<arr.length; i++){
  let found=false
  for(let j=0; j<newarr.length; j++){
    if(arr[i].id==newarr[j].id){
      found=true
      break;
    }
  }
  if(!found){
    newarr[i]=arr[i]
  }
}
console.log(newarr)







// 31. Print numbers from 1 to 10.
 // Output:
 // 1 2 3 4 5 6 7 8 9 10
for(let i=1; i<=10; i++){
  console.log(i)
}







// 32. Print even numbers from 1 to 20.

// Output:2 4 6 8 10 12 14 16 18 20

for(let i=2; i<=20; i++){
  if(i%2==0){
    console.log(i)
  }
}







// 33. Print the multiplication table of 5.

// Output:
// 5 10 15 20 25 30 35 40 45 50

for(let i=1; i<=10; i++){
 console.log(5*i)
}









// 34. Print characters of a string.

// Output:l o o p

 const str = "loop";
for(let i=0; i<str.length; i++){
  console.log(str[i])
}






// 35. Sum numbers from 1 to n.

 n = 5
// Output:15
let sum=0;
for(let i=1; i<=n; i++){
  sum+=i
}
console.log(sum)





// 36. Print elements of an array using a `for` loop.

const arr = [10, 20, 30];
// Output:10 20 30
for(let i=0; i<arr.length; i++){
  console.log(arr[i])
}







// 37. Print array elements in reverse.
  const arr = [1, 2, 3];
 // Output:3 2 1
for(let i=arr.length-1; i>=0; i--){
  console.log(arr[i])
}







// 38. Count vowels in a string.

const arr= "education"
// Output:5
let count=0
for(let i=0; i<arr.length; i++){
  if(arr[i]=="a" || arr[i]=="i" || arr[i]=="o" || arr[i]=="u" || arr[i]=="e")
    count++
}
console.log(count)





// 39. Find factorial of a number.

let num= 4
// Output:24
let fact=1
for(let i=1; i<=4; i++){
   fact=fact*i
}
console.log(fact)







// 40. Find all divisors of a number.


let num= 12
// Output:1 2 3 4 6 12
for(let i=1; i<=12; i++){
    if(12%i==0){
      console.log(i)
    }
}












