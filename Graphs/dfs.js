const graph = [
  [0,1,0,1],
  [1,0,1,1],
  [0,1,0,1],
  [1,1,1,0]
]

const visited = new Array(graph.length).fill(false);
const stack = [];

const dfs = (node) => {
  stack.push(node);
  while (stack.length > 0) {
    node = stack.pop();
    if (visited[node] === false) {
      visited[node] = true;
      console.log(`visited node ${node}`)
      for (let j = 0; j < graph[node].length; j++) {
        if (graph[node][j] === 1){
          stack.push(j);
        }
      }
    }
  }
}

dfs(2);