import {Leaf} from "./Leaf";


export class Node {

    parentNode

    id

    logic = "and";

    children = [];

    version = 0

    constructor(parent, level, index, logic, children) {
        this.level = level
        this.index = index
        this.parentNode = parent
        this.id = 10_000 * level + index
        this.children = children || []
    }

    /**
     *
     * @returns {Node} child node
     */
    addNode() {
        const childNode = new Node(this, this.level + 1, this.children.length, "and", [])
        this.children = [...this.children, childNode]
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        }
        return childNode
    }

    addLeaf() {
        const childLeaf = new Leaf(this, this.level + 1, this.children.length)
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