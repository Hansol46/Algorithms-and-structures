function factorial(n) {
  if(n === 1) {
    return n;
  }
  return n * factorial(n - 1)
} 

function fibonachi(n) {
  if(n === 1 || n === 2){
    return 1
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}
