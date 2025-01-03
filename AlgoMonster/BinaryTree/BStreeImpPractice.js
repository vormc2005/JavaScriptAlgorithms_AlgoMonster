class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            var current = this.root;
            while (true) {
                if (value === current.value) return undefined
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) return false
        let current = this.root
        while (current) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else if (value === current.value) {
                return current
            }
        }
        return false
    }


    bfs() {
        let current = this.root
        let list = []
        let queue = []
        queue.push(current)
        while (queue.length > 0) {
            current = queue.shift()
            list.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return list
    }

    // dfs(root,target){    
    //     if(root === null) return null
    //     if(root.value === target) return root
    //     const left = this.dfs(root.left, target)
    //     if(left !== null) return left
    //     const right = this.dfs(root.right, target)
    //     return right
    // }

    doTheSearch(target) {
        return this.dfs(this.root, target)
    }

    inOrderTraversal(root) {
        if (root !== null) {
            this.inOrderTraversal(root.left)
            console.log(root.val)
            this.inOrderTraversal(root.right)
        }
    }
    traverse() {
        return this.inOrderTraversal(this.root)
    }
  
    

    getTreeRoot() {
        return this.root
    }

}



var tree = new BinarySearchTree();
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
// console.log(tree.traverse())



// function inOrderTraversal(tree){
//     let root = 
//     if(root !== null) {
//         this.inOrderTraversal(root.left)
//         console.log(node.val)
//         this.inOrderTraversal(root.right)
//     }
// }
// console.log(tree.lookup(5))
// console.log(tree.bfs())

// console.log(tree.doTheSearch(11))
// console.log(tree.inOrderTraversal())
let root = tree.getTreeRoot()


function dfs(node) {
    if (node === null) return 0
    return Math.max(dfs(node.left), dfs(node.right)) + 1
}
function treeMaxDepth() {
    return tree.getTreeRoot() !== null ? dfs(tree.getTreeRoot()) - 1 : 0;
}


function treeHeight(tree){
    if(tree === null)return 0
    const leftHeight = treeHeight(tree.left)
    const rightHeight = treeHeight(tree.right)
    if(leftHeight === -1 || rightHeight === -1) return -1
    if(Math.abs(leftHeight - rightHeight)>1) return -1
    return Math.max(leftHeight, rightHeight)+1;
}
/**/
function isBalanced(){
    return treeHeight(root) !==-1
}

/*is subtree of another*/
function subtreeofAnotherTree(root, subRoot){
    if(!root) return false
    return isSame(root, subRoot) || subtreeofAnotherTree(root.left, subRoot) || subtreeofAnotherTree(root.right, subRoot)
}

function isSame(tree1, tree2){
    if(!tree1 && !tree2) return true
    if(!tree || !tree) return false
    return tree1.val === tree2.val && isSame(tree1.left, tree2.left) && isSame(tree1.right && tree2.right)
}


function invertTree(tree){
    if(tree === null) return null
   
    return new Node(tree.val, invertTree(tree.right), invertTree(tree.left))
}
console.log(invertTree(root))

console.log(isBalanced())
console.log(treeMaxDepth())