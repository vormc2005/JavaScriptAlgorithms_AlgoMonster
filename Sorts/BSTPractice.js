class Node{
   constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
   }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
      let newNode = new Node(value);
      if(this.root === null){
        this.root = newNode;
        return this
      }else{
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }else{
                    current = current.left;
                }
            }else if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }else{
                    current = current.right
                }
            }
        }
      }      
    }


    find(value){
        if(this.root === null) return false;
        var current = this.root;
        var isFound = false;
        while(current && isFound === false){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                isFound = true;
            }

        }
        if(!isFound) return undefined;
        return current;
    }

    BFS(){
        var node = this.root;
        var data = [];
        var queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        var data = [];      
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(this.root)
        return data;
    }

    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value)
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }

      
}

// Add nodes manually
var tree = new BST();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// Add using insert method
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(10)
console.log(tree)
console.log(tree.find(5))
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())