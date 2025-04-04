const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 

function binarySearch(array, target){
 let left = 0;
 let right = array.length - 1;

 while(left <= right) {
   let mid = Math.floor((left + right) / 2); 
   if(array[mid] === target) return mid; 
   if(array[mid] < target) { 
     left = array[mid] + 1
   } else {
     right = array[mid] - 1
   }
 }
 return -1
}
