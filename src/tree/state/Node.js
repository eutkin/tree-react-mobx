import {Leaf} from "./Leaf";


export class Node {

    parentNode

    id

    logic = "AND";

    children = [];

    version = 0

    type = "node"

    constructor(parent, logic, children) {
        this.parentNode = parent
        if (this.parentNode !== undefined) {
            this.id = 10_000 * (Math.floor(this.parentNode.id / 10_000 + 1)) + this.parentNode.children.length
        } else {
            this.id = 0
        }
        this.children = children || []
    }

    /**
     *
     * @returns {Node} child node
     */
    addNode() {
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        } else {
            this.incrementVersion()
        }
        const childNode = new Node(this, "and", [])
        this.children.push(childNode)
        return childNode
    }

    addLeaf() {
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        } else {
            this.incrementVersion()
        }
        const childLeaf = new Leaf(this)
        this.children.push(childLeaf)
        return childLeaf
    }

    deleteChild(childIndex) {
        if (childIndex > -1) {
            this.children.splice(childIndex, 1)
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