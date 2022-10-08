// KHAN ACADEMY PROBLEM - BFS WITH ADJACENCY LIST GRAPH

// A Queue class for queue-like functionality over JavaScript arrays.

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(obj) {
    this.items.push(obj);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

/*
Performs a breadth-first search on a graph
@param {array} graph - Graph, represented as adjacency lists.
@param {number} source - The index of the source vertex.
@returns {array} Array of objects describing each vertex, like
[{distance: _, predecessor: _ }]
*/
const doBFS = function (graph, source) {
  let bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    };
  }

  bfsInfo[source].distance = 0;

  let queue = new Queue();
  queue.enqueue(source);

  /* Traverse the graph

    As long as the queue is not empty:
    Repeatedly dequeue a vertex u from the queue.

    For each neighbor v of u that has not been visited:
    Set distance to 1 greater than u's distance
    Set predecessor to u
    Enqueue v

    Hint:
    use graph to get the neighbors,
    use bfsInfo for distances and predecessors */

  while (!queue.isEmpty()) {
    let u = queue.dequeue();
    graph[u].forEach((v) => {
      if (bfsInfo[v].predecessor === null && bfsInfo[v].distance === null) {
        bfsInfo[v].distance = bfsInfo[u].distance + 1;
        bfsInfo[v].predecessor = u;
        queue.enqueue(v);
      }
    });
  }
  return bfsInfo;
};

/* Test the functions above with data below, working properly :)

let adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  [],
];
let bfsInfo = doBFS(adjList, 3);
for (let i = 0; i < adjList.length; i++) {
  console.log(
    "vertex " +
      i +
      ": distance = " +
      bfsInfo[i].distance +
      ", predecessor = " +
      bfsInfo[i].predecessor
  );
}
*/

export { doBFS };
