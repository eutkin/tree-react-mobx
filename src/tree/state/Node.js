import {makeAutoObservable, observe} from "mobx";
import {Leaf} from "./Leaf";


export class Node {

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

    incrementVersion() {
        this.version++
    }
}