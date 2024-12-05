class Node{
    constructor(data){
        this.data = data;
        this.children = [];                
    }
    add(data){        
        this.children.push(new Node(data));
    }
    remove(data){
        this.children = this.children.filter(node =>{
            return node.data !== data;
        })
    }

}

class Tree{
    constructor(){
        this.root = null;
    }
    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();

            arr.push(...node.children);
            // for(let child of node.children){
            //     arr.push(child);
            // }
             // search array
            fn(node);
        }
    }

    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children);
            // search array
            fn(node);
        }
    }  
    
    
}

const node = new Node(1);
const tree = new Tree();
node.add(2)
tree.root = node;

console.log(tree)

// Find with of each level
function levelWidth(root){
    const arr = [root, "s"]
    const counters = [0]

    while(array.length > 1){
       const node = arr.shift();
       if(node === "s") {
        counters.push(0);
        arr.push('s');
       }else{
        arr.push(...node.children);
        counters[counters.length - 1]++;
       }
    }
    return counters;
}

