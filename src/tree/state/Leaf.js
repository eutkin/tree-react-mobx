export class Leaf {

    parentNode

    id

    data = null

    constructor(parentNode, level, index, data) {
        this.level = level
        this.index = index
        this.id = 10_000 * level + index
        this.parentNode = parentNode
        this.data = data
    }

    changeData(data) {
        this.data = data
        this.parentNode.incrementVersion()
    }

}

