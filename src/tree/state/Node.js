import {makeAutoObservable, observe} from "mobx";
import {Leaf} from "./Leaf";


export class Node {

    id = Math.floor(Math.random() * 100_000_000)

    logic = "and";

    children = [];

    version = 0

    constructor(logic, children) {
        makeAutoObservable(this)
        this.children = children || []
    }

    /**
     *
     * @returns {Node} child node
     */
    addNode() {
        const childNode = new Node("and", [])
        this.children = [...this.children, childNode]
        observe(childNode, change => {
            this.incrementVersion()

        })
        return childNode
    }

    addLeaf() {
        const childLeaf = new Leaf()
        this.children = [...this.children, childLeaf]
        observe(childLeaf, change => {
            this.incrementVersion()
        })
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
        this.version++
    }
}