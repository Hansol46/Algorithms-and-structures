/**
* BFS (поиск в ширину):    
* Использует очередь.
* Обходит все соседние узлы перед тем, как переходить дальше.
* Полезен для поиска кратчайшего пути.

*      ищем кратчайший путь (в невзвешенном графе) 
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
function breadthSearch(graph, start, target) {
  const queue = [[start]];
  const visited = new Set();
        
  while(queue.length > 0) {
   const path = queue.shift();
   const currentNode = path[path.length - 1];

   if(!visited.has(currentNode)){
     if(currentNode === target) return path;

     visited.add(currentNode);

     for(let neighbor of graph[currentNode]) { 
       if(!visited.has(neighbor)) {
         queue.push([...path, neighbor]) 
       }
     }
   }
  }
 return null; 
};
