export class Leaf {

    parentNode

    id

    data = null

    type = "leaf"

    constructor(parentNode, level, index, data) {
        this.parentNode = parentNode
        this.id = 10_000 * (Math.floor(this.parentNode.id / 10_000 + 1)) + this.parentNode.children.length
        this.data = data
    }

    changeData(data) {
        this.data = data
        this.parentNode.incrementVersion()
    }

}

