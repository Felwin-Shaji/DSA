class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] = new Set();
        }
        if(!this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = new Set();
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    bfs(start){
        let queue = [start];
        let visited = new Set();
        let result = [];

        visited.add(start);

        while(queue.length > 0 ){
            let vertex = queue.shift();
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            })
        }
        return result;
    }

    dfs(start){         
        let stack = [start];
        let visited = new Set();
        let result = [];

        
        while(stack.length > 0){
            let vertex = stack.pop();
            if(!visited.has(vertex)){
                visited.add(vertex);
                result.push(vertex);

                this.adjacencyList[vertex].forEach(neighbor => {
                    stack.push(neighbor)
                })
            }
        }
        return result;
    }

    hasEdge(vertex1, vertex2){
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1);
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
console.log(graph.bfs("E"))
graph.display()
console.log(graph.adjacencyList)


































