/**
 * Лепесток. Хранит данные.
 */
export class Leaf {


    /**
     * Иденификатор лепетска.
     */
    id

    /**
     * Generic данные.
     * @type {null}
     */
    data = null

    /**
     * Тип элемента. Используется для десериализации на сервере при определении типа элемента дерева.
     * @type {string}
     */
    type = "leaf"

    /**
     * Флаг, обозначающий, что узел содержит только валидные лепестки.
     * @type {boolean}
     */
    valid = true

    /**
     * Родительский узел.
     */
    parentNode

    constructor(parentNode, level, index, data) {
        this.parentNode = parentNode
        this.id = 10_000 * (Math.floor(this.parentNode.id / 10_000 + 1)) + this.parentNode.children.length
        this.data = data
    }

    changeData(data, isValid) {
        this.data = data
        this.parentNode.setValid(isValid)
        this.parentNode.incrementVersion()
        this.valid = isValid
    }

}

