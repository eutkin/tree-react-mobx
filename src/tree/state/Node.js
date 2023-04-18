import {Leaf} from "./Leaf";


export class Node {

    parentNode

    id = Math.floor(Math.random() * 100_000_000)

    logic = "and";

    children = [];

    version = 0

    constructor(parent, logic, children) {
        this.parentNode = parent
        this.children = children || []
    }

    /**
     *
     * @returns {Node} child node
     */
    addNode() {
        const childNode = new Node(this, "and", [])
        this.children = [...this.children, childNode]
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        }
        return childNode
    }

    addLeaf() {
        const childLeaf = new Leaf(this)
        this.children = [...this.children, childLeaf]
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        }
        return childLeaf
    }

    deleteChild(id) {
        const index = this.children.findIndex(child => child.id === id)
        if (index > -1) {
            this.children = [...this.children.slice(0, index), ...this.children.slice(index + 1, this.children.length)]
            this.incrementVersion()
        }
    }

    incrementVersion() {
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        }
        this.version++
    }
}