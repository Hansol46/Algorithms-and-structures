/**
BFS (поиск в ширину):    
        Использует очередь.
        Обходит все соседние узлы перед тем, как переходить дальше.
        Полезен для поиска кратчайшего пути.
         

    DFS (поиск в глубину):    
        Использует стек (или рекурсию).
        Углубляется максимально в один путь, прежде чем вернуться назад.
        Полезен для проверки связности или обхода всех возможных путей.
*/

/**
*      A -- B -- C
*      |    |
*      D -- E
*/
const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D']
};
// ищем кротчайший путь (в невзвешенном графе) 
function breadthSearch(graph, start, target) {
  let queue = [[start]];
  const visited = new Set();
        
  while(queue.length > 0) {
   const path = queue.shift(); // ["A"]
   const currentNode = path[path.length - 1]; // "A"
   if(!visited.has(currentNode){
     if(currentNode === target) return path;
     visited.add(currentNode);
     for(let neighbor of graph[currentNode]) {
       if(!visited.has(neighbor)) {
         queue.push(...path, neighbor)
       }
     }
   }
  }
}
         
     
