export class Leaf {

    parentNode

    id = Math.floor(Math.random() * 100_000_000)

    data = null

    constructor(parentNode, data) {
        this.parentNode = parentNode
        this.data = data
    }

    changeData(data) {
        this.data = data
        this.parentNode.incrementVersion()
    }

}

